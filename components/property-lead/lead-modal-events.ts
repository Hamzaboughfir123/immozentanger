/**
 * Petit bus d'événements DOM pour ouvrir la modale "Confier mon bien" depuis
 * n'importe quel bouton du site, y compris des Server Components (Hero,
 * Benefits...) qui ne peuvent pas recevoir de closure définie ailleurs comme
 * prop. Évite d'avoir à faire remonter un contexte React jusqu'à la racine
 * pour un besoin aussi simple.
 */
const OPEN_EVENT = "immozen:open-property-lead";

export function openPropertyLeadModal() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export function onPropertyLeadModalOpen(handler: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener(OPEN_EVENT, handler);
  return () => window.removeEventListener(OPEN_EVENT, handler);
}
