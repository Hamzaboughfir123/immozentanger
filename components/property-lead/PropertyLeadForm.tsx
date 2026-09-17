"use client";

import { cn } from "@/lib/utils";
import { PROPERTY_LEAD_CONFIG, SITE_URL } from "@/lib/constants";
import { useState } from "react";
import {
  PROPERTY_TYPE_OPTIONS,
  TRANSACTION_TYPE_OPTIONS,
  type PropertyLeadFormValues,
  type PropertyLeadPayload,
} from "./types";
import { normalizeMoroccanPhone, readUtmParams, validatePropertyLeadForm } from "./schema";

const EMPTY_VALUES: PropertyLeadFormValues = {
  firstName: "",
  lastName: "",
  phone: "",
  propertyType: "",
  propertyTypeOther: "",
  transactionType: "",
  district: "",
  message: "",
  consent: false,
};

type Status = "idle" | "submitting" | "success" | "error";

export function PropertyLeadForm({ onSuccess }: { onSuccess?: () => void }) {
  const [values, setValues] = useState<PropertyLeadFormValues>(EMPTY_VALUES);
  const [errors, setErrors] = useState<ReturnType<typeof validatePropertyLeadForm>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function set<K extends keyof PropertyLeadFormValues>(key: K, value: PropertyLeadFormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "submitting") return; // anti double-clic

    const fieldErrors = validatePropertyLeadForm(values);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) return;

    const phone = normalizeMoroccanPhone(values.phone);
    if (!phone) return; // déjà couvert par validatePropertyLeadForm, garde-fou TS

    setStatus("submitting");
    setErrorMessage("");

    const payload: PropertyLeadPayload = {
      firstName: values.firstName.trim(),
      lastName: values.lastName.trim(),
      phone,
      propertyType: values.propertyType as PropertyLeadPayload["propertyType"],
      propertyTypeOther:
        values.propertyType === "OTHER" ? values.propertyTypeOther.trim() : undefined,
      transactionType: values.transactionType as PropertyLeadPayload["transactionType"],
      district: values.district.trim() || undefined,
      message: values.message.trim() || undefined,
      sourceSite: PROPERTY_LEAD_CONFIG.siteDomain,
      sourcePage: typeof window !== "undefined" ? window.location.pathname : "/",
      consent: values.consent,
      ...readUtmParams(),
    };

    try {
      const res = await fetch(`${PROPERTY_LEAD_CONFIG.apiUrl}/api/property-leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("success");
        onSuccess?.();
        return;
      }

      // Réponses non-2xx : messages différenciés plutôt qu'un message
      // générique unique, pour que l'utilisateur (et nous) sachions si
      // c'est une limite de fréquence, une donnée invalide ou une vraie
      // panne serveur.
      if (res.status === 429) {
        setStatus("error");
        setErrorMessage(
          "Trop de demandes envoyées en peu de temps. Merci de patienter une minute avant de réessayer, ou contactez-nous directement par téléphone/WhatsApp.",
        );
        return;
      }

      if (res.status >= 400 && res.status < 500) {
        setStatus("error");
        setErrorMessage(
          "Votre demande n'a pas pu être envoyée : merci de vérifier les informations saisies (notamment le numéro de téléphone), ou contactez-nous directement par téléphone.",
        );
        return;
      }

      // 5xx ou statut inattendu : on logue le détail (invisible pour
      // l'utilisateur, mais consultable dans la console navigateur) avant de
      // basculer sur le message générique — sans ça, impossible de savoir si
      // c'est le serveur qui plante ou autre chose.
      const bodyText = await res.text().catch(() => "");
      console.error("[PropertyLeadForm] Réponse serveur en échec", res.status, bodyText);
      throw new Error(`server_error_${res.status}`);
    } catch (err) {
      // Une exception ici (avant même d'obtenir une réponse) vient presque
      // toujours d'un `fetch` qui n'a pas abouti : CORS, DNS, coupure
      // réseau, ou un bloqueur de pub/extension qui empêche l'appel vers
      // api.immozengroupe.com. Le message navigateur (ex: "Failed to
      // fetch") apparaît dans la console pour diagnostiquer précisément.
      console.error("[PropertyLeadForm] Échec de l'envoi du formulaire", err);
      setStatus("error");
      setErrorMessage(
        "Une erreur est survenue. Réessayez dans un instant ou contactez-nous directement par téléphone.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 py-6 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-pistachio/20 text-brand-forest">
          <CheckIcon />
        </span>
        <p className="text-lg font-semibold text-brand-ink">
          Merci ! Votre demande a bien été envoyée.
        </p>
        <p className="max-w-sm text-sm text-brand-ink/70">
          Notre équipe ImmoZen vous contactera prochainement.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Prénom" error={errors.firstName}>
          <input
            type="text"
            autoComplete="given-name"
            value={values.firstName}
            onChange={(e) => set("firstName", e.target.value)}
            className={inputClass(!!errors.firstName)}
            placeholder="Votre prénom"
          />
        </Field>
        <Field label="Nom" error={errors.lastName}>
          <input
            type="text"
            autoComplete="family-name"
            value={values.lastName}
            onChange={(e) => set("lastName", e.target.value)}
            className={inputClass(!!errors.lastName)}
            placeholder="Votre nom"
          />
        </Field>
      </div>

      <Field label="Numéro de téléphone" error={errors.phone}>
        <input
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          value={values.phone}
          onChange={(e) => set("phone", e.target.value)}
          className={inputClass(!!errors.phone)}
          placeholder="+212 6 12 34 56 78"
        />
      </Field>

      <Field label="Type de bien" error={errors.propertyType}>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-3">
          {PROPERTY_TYPE_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => set("propertyType", opt.value)}
              className={chipClass(values.propertyType === opt.value)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </Field>

      {values.propertyType === "OTHER" && (
        <Field label="Précisez le type de bien" error={errors.propertyTypeOther}>
          <input
            type="text"
            value={values.propertyTypeOther}
            onChange={(e) => set("propertyTypeOther", e.target.value)}
            className={inputClass(!!errors.propertyTypeOther)}
            placeholder="Ex : garage, duplex..."
          />
        </Field>
      )}

      <Field label="Que souhaitez-vous faire ?" error={errors.transactionType}>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          {TRANSACTION_TYPE_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => set("transactionType", opt.value)}
              className={chipClass(values.transactionType === opt.value)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </Field>

      <Field label="Quartier / secteur (optionnel)">
        <input
          type="text"
          value={values.district}
          onChange={(e) => set("district", e.target.value)}
          className={inputClass(false)}
          placeholder="Ex : Guéliz, Targa..."
        />
      </Field>

      <Field label="Informations complémentaires (optionnel)">
        <textarea
          value={values.message}
          onChange={(e) => set("message", e.target.value)}
          rows={3}
          className={cn(inputClass(false), "resize-none")}
          placeholder="Précisions utiles sur votre bien..."
        />
      </Field>

      <label className="flex items-start gap-3 text-sm text-brand-ink/70">
        <input
          type="checkbox"
          checked={values.consent}
          onChange={(e) => set("consent", e.target.checked)}
          className="mt-0.5 h-5 w-5 shrink-0 rounded border-brand-ink/30 text-brand-forest focus:ring-brand-pistachio"
        />
        <span>
          J&rsquo;accepte d&rsquo;être contacté(e) par ImmoZen concernant mon bien immobilier.{" "}
          <a
            href={`${SITE_URL}/politique-de-confidentialite`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-brand-forest"
          >
            Politique de confidentialité
          </a>
        </span>
      </label>
      {errors.consent && <p className="-mt-3 text-xs text-red-600">{errors.consent}</p>}

      {status === "error" && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-1 inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-brand-pistachio px-6 text-base font-semibold text-brand-ink shadow-[0_8px_30px_-8px_rgba(165,210,50,0.6)] transition-all hover:bg-brand-pistachio-dark disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Spinner />
            Envoi en cours...
          </>
        ) : (
          "Envoyer ma demande"
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-brand-ink">{label}</label>
      {children}
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    "min-h-14 w-full rounded-xl border bg-white px-4 text-base text-brand-ink outline-none transition-colors placeholder:text-brand-ink/35",
    "focus:border-brand-forest focus:ring-2 focus:ring-brand-pistachio/40",
    hasError ? "border-red-400" : "border-brand-ink/15",
  );
}

function chipClass(active: boolean) {
  return cn(
    "min-h-11 rounded-xl border px-3 py-2 text-center text-xs font-semibold transition-colors sm:text-sm",
    active
      ? "border-brand-forest bg-brand-forest text-white"
      : "border-brand-ink/15 bg-white text-brand-ink/70 hover:border-brand-forest/50",
  );
}

function CheckIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12.5l4.5 4.5L19 7"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Spinner() {
  return (
    <span className="h-4 w-4 animate-spin rounded-full border-2 border-brand-ink/30 border-t-brand-ink" />
  );
}
