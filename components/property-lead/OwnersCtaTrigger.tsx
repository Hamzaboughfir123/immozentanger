"use client";

import { openPropertyLeadModal } from "./lead-modal-events";

/**
 * Lien "Confier mon bien" générique (texte, ou zone cliquable invisible
 * positionnée par-dessus le bouton dessiné dans owners-campaign.webp — voir
 * .owners-cta dans globals.css, le cas d'usage d'origine). Reste un
 * <a href="#confier-mon-bien"> pour un repli correct sans JS (scroll vers la
 * section propriétaire, avec appel/WhatsApp) ; avec JS, ouvre directement la
 * modale du formulaire.
 */
export function OwnersCtaTrigger({
  children,
  className = "owners-cta",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      className={className}
      href="#confier-mon-bien"
      onClick={(e) => {
        e.preventDefault();
        openPropertyLeadModal();
      }}
    >
      {children}
    </a>
  );
}
