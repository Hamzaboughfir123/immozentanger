import { OpenPropertyLeadButton } from "@/components/property-lead/OpenPropertyLeadButton";

/**
 * Barre CTA discrète, visible uniquement sur mobile, au-dessus du contenu
 * mais sous la navbar (pas de conflit de z-index grâce à un z-40).
 */
export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-brand-ink/10 bg-white/95 px-4 py-3 backdrop-blur-md lg:hidden [padding-bottom:max(0.75rem,env(safe-area-inset-bottom))]">
      <OpenPropertyLeadButton className="w-full" size="md">
        Confier mon bien
      </OpenPropertyLeadButton>
    </div>
  );
}
