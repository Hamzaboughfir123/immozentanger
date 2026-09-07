import { Container } from "@/components/ui/Container";
import Image from "next/image";

export function HeroSection() {
  return (
    <section id="accueil" className="relative isolate overflow-hidden bg-brand-ink">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-tanger.jpg"
          alt="Le phare du Cap Spartel au coucher du soleil, entouré de palmiers, symbole de Tanger et du patrimoine immobilier haut de gamme"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center]"
        />
        <div className="absolute inset-0 bg-brand-ink/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-ink/75 via-brand-ink/30 to-brand-ink/90" />
      </div>

      <Container className="relative flex min-h-[calc(100svh-5rem)] flex-col justify-between py-2 sm:py-5 lg:py-6">
        <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center pb-20 text-center sm:pb-22">
          <span className="mb-2 inline-flex items-center gap-2 rounded-full border border-brand-pistachio/70 bg-brand-ink/75 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.13em] text-white shadow-[0_5px_22px_rgba(0,0,0,0.3)] backdrop-blur-sm sm:mb-3 sm:gap-3 sm:px-5 sm:py-2 sm:text-xs sm:tracking-[0.2em]">
            <span className="h-px w-5 bg-brand-pistachio sm:w-10" aria-hidden="true" />
            Agence immobilière nouvelle génération · Maroc
            <span className="h-px w-5 bg-brand-pistachio sm:w-10" aria-hidden="true" />
          </span>

          <h1 className="text-balance font-display text-[clamp(1.75rem,7vw,4.5rem)] font-semibold uppercase leading-[0.86] tracking-tight text-white drop-shadow-[0_5px_18px_rgba(0,0,0,0.4)] sm:text-[clamp(2.6rem,6.5vw,4.5rem)]">
            Votre bien vaut
            <span className="mt-1.5 block text-brand-pistachio sm:mt-2 sm:whitespace-nowrap">5 000 000 DH ?</span>
          </h1>

          <div className="mt-2 text-balance text-sm font-semibold leading-tight text-white sm:mt-3 sm:text-2xl lg:text-[1.8rem]">
            Une commission de <span className="text-brand-pistachio">2,5 %</span> représente
            <span className="mt-1 block text-base sm:text-3xl lg:text-[2.2rem]">
              <span className="relative inline-block text-white/95">
                125 000 DH
                <span className="absolute left-[-4%] right-[-4%] top-1/2 h-1 -rotate-6 bg-red-600 shadow-[0_1px_2px_rgba(0,0,0,0.35)]" />
              </span>
              <span className="mx-2 text-white/90">.</span> Avec ImmoZen :{" "}
              <strong className="text-brand-pistachio">0 DH*</strong>
            </span>
          </div>

          <div className="mt-2 flex flex-col items-center gap-1.5 sm:mt-4 sm:flex-row sm:items-end sm:gap-4">
            <div className="rounded-2xl border-2 border-brand-pistachio/70 bg-brand-ink/80 px-4 py-1.5 shadow-[0_12px_35px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:px-6 sm:py-2">
              <span className="block text-3xl font-black leading-none text-brand-pistachio sm:text-4xl">0 DH</span>
              <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.16em] text-white sm:text-xs">de commission propriétaire</span>
            </div>
            <span className="text-[10px] font-medium uppercase tracking-[0.1em] text-white/85 sm:max-w-[170px] sm:text-left sm:text-xs sm:tracking-[0.12em]">
              La vente de votre bien, sans frais d&rsquo;agence.
            </span>
          </div>
        </div>

        <div className="absolute inset-x-6 bottom-2 grid grid-cols-2 gap-x-2 gap-y-2 border-t border-white/25 pt-2 text-center text-[8px] font-semibold uppercase tracking-[0.04em] text-white/90 sm:inset-x-8 sm:bottom-3 sm:grid-cols-4 sm:gap-0 sm:pt-3 sm:text-[10px] sm:tracking-[0.06em] lg:inset-x-8">
          <ProofItem icon={<NetworkIcon />} value="300+" label="agences partenaires" />
          <ProofItem icon={<ShieldIcon />} value="0 DH" label="de commission" />
          <ProofItem icon={<HandshakeIcon />} value="100 %" label="accompagnement" />
          <ProofItem icon={<CheckIcon />} value="Sécurisé" label="et transparent" />
        </div>
      </Container>
    </section>
  );
}

function ProofItem({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="flex items-center justify-center gap-2 border-white/25 first:border-0 sm:border-l sm:px-4 lg:px-8">
      <span className="text-brand-pistachio">{icon}</span>
      <span className="text-left">
        <strong className="block text-sm text-brand-pistachio sm:text-base">{value}</strong>
        <span className="block text-[9px] leading-tight text-white/80 sm:text-[10px]">{label}</span>
      </span>
    </div>
  );
}

function NetworkIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.5" /><circle cx="5" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.5" /><circle cx="19" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.5" /><path d="M10.5 7 6.5 15M13.5 7l4 8M7.5 17h9" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function ShieldIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3 20 6v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3Z" stroke="currentColor" strokeWidth="1.5" /><path d="m8 12 2.5 2.5L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function HandshakeIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m4 12 3-3 4 1 2-2 3 1 4-3 2 3-3 3M4 12l3 5 3-2 3 3 2-2 3 1 2-4M9 10l3 3 3-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function CheckIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" /><path d="m8 12 2.5 2.5L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
