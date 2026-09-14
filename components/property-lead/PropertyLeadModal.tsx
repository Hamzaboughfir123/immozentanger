"use client";

import { useEffect, useState } from "react";
import { onPropertyLeadModalOpen } from "./lead-modal-events";
import { PropertyLeadForm } from "./PropertyLeadForm";

/**
 * Monté une seule fois (voir app/page.tsx). Écoute l'événement global
 * "immozen:open-property-lead" déclenché par tous les boutons "Confier mon
 * bien" du site (Hero, Navbar, sticky mobile, section propriétaires...).
 */
export function PropertyLeadModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => onPropertyLeadModalOpen(() => setOpen(true)), []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Confier mon bien à ImmoZen Groupe"
      className="fixed inset-0 z-[60] flex items-end justify-center bg-brand-ink/60 backdrop-blur-sm sm:items-center sm:p-4"
      onClick={() => setOpen(false)}
    >
      <div
        className="max-h-[92svh] w-full overflow-y-auto rounded-t-3xl bg-white p-6 shadow-2xl sm:max-w-lg sm:rounded-3xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-medium text-brand-ink">
              Confier mon bien
            </h2>
            <p className="mt-1 text-sm text-brand-ink/60">
              0 DH de commission propriétaire. Réponse rapide.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Fermer"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-brand-ink/50 transition-colors hover:bg-brand-beige hover:text-brand-ink"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <PropertyLeadForm onSuccess={() => setTimeout(() => setOpen(false), 2500)} />
      </div>
    </div>
  );
}
