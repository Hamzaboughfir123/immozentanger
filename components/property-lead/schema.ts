import type { PropertyLeadFormValues } from "./types";

/**
 * Normalise un numéro marocain vers +2126XXXXXXXX / +2127XXXXXXXX.
 * Retourne `null` si invalide. Même logique que le backend
 * (immozen-leads-backend/src/common/phone.ts) — le backend revalide de toute
 * façon, ce n'est jamais qu'une aide de saisie côté client.
 */
export function normalizeMoroccanPhone(raw: string): string | null {
  const digits = raw.replace(/[\s.-]/g, "");

  const local = digits.match(/^0([67]\d{8})$/);
  if (local) return `+212${local[1]}`;

  const withPlus = digits.match(/^\+212([67]\d{8})$/);
  if (withPlus) return `+212${withPlus[1]}`;

  const withZeros = digits.match(/^00212([67]\d{8})$/);
  if (withZeros) return `+212${withZeros[1]}`;

  return null;
}

export type FormErrors = Partial<Record<keyof PropertyLeadFormValues, string>>;

export function validatePropertyLeadForm(values: PropertyLeadFormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.firstName.trim()) errors.firstName = "Prénom requis";
  if (!values.lastName.trim()) errors.lastName = "Nom requis";

  if (!values.phone.trim()) {
    errors.phone = "Numéro de téléphone requis";
  } else if (!normalizeMoroccanPhone(values.phone)) {
    errors.phone = "Numéro marocain invalide (ex: +212 6 12 34 56 78)";
  }

  if (!values.propertyType) errors.propertyType = "Sélectionnez un type de bien";
  if (values.propertyType === "OTHER" && !values.propertyTypeOther.trim()) {
    errors.propertyTypeOther = "Précisez le type de bien";
  }

  if (!values.transactionType) errors.transactionType = "Sélectionnez une option";

  if (!values.consent) errors.consent = "Consentement requis pour envoyer la demande";

  return errors;
}

export function readUtmParams() {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const utm: Record<string, string> = {};
  (["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const).forEach(
    (key) => {
      const value = params.get(key);
      if (value) utm[key] = value;
    },
  );
  return {
    utmSource: utm.utm_source,
    utmMedium: utm.utm_medium,
    utmCampaign: utm.utm_campaign,
    utmContent: utm.utm_content,
    utmTerm: utm.utm_term,
  };
}
