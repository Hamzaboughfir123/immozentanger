import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import Image from "next/image";

const BENEFITS = [
  {
    icon: ZeroIcon,
    title: "0 DH propriétaire",
    text: "Notre réussite, c'est de vendre votre bien, pas de vous facturer. 0 DH de commission ImmoZen Groupe, selon les conditions applicables.*",
    highlight: true,
  },
  {
    icon: DiamondIcon,
    title: "Votre bien en lumière",
    text: "Une présentation qui donne envie et met en valeur chaque atout de votre bien dès le premier regard.",
    highlight: false,
  },
  {
    icon: PeopleIcon,
    title: "Les bons acheteurs",
    text: "Votre annonce gagne en visibilité auprès de personnes réellement prêtes à acheter ou à louer.",
    highlight: false,
  },
  {
    icon: HandshakeIcon,
    title: "À vos côtés",
    text: "Un accompagnement simple et humain, de la première visite jusqu'à la signature finale.",
    highlight: false,
  },
];

export function BenefitsSection() {
  return (
    <section id="pourquoi-immozen" className="relative overflow-hidden bg-white">
      <div className="absolute right-0 top-0 hidden h-[43%] w-[42%] lg:block">
        <Image
          src="/images/hero-tanger.jpg"
          alt="Le phare du Cap Spartel entouré de palmiers, à Tanger"
          fill
          sizes="42vw"
          className="object-cover object-[62%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/35 to-transparent" />
      </div>

      <Container className="relative flex min-h-[calc(100svh-5rem)] flex-col justify-between py-4 sm:py-6 lg:py-7">
        <div className="grid items-start gap-3 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-brand-pistachio px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.12em] text-brand-ink shadow-[0_8px_24px_rgba(165,210,50,0.28)]">
              Propriétaires à Tanger
            </span>
            <h2 className="mt-3 max-w-3xl text-balance font-display text-[clamp(2.1rem,4.5vw,4rem)] font-semibold leading-[0.9] text-brand-ink">
              Votre bien mérite
              <span className="block text-brand-forest">une meilleure histoire.</span>
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-ink/75 sm:text-base">
              Nous faisons tout pour que votre bien se démarque, trouve le bon acquéreur et vous rapporte davantage, <strong className="text-brand-forest">sans commission pour vous, propriétaire.</strong>
            </p>
          </div>

          <div className="hidden items-center justify-center lg:flex">
            <div className="flex h-44 w-44 rotate-[-5deg] flex-col items-center justify-center rounded-full border-[3px] border-brand-forest bg-white/90 text-center shadow-[0_15px_45px_rgba(6,115,61,0.18)]">
              <strong className="font-display text-6xl leading-none text-brand-forest">0 DH</strong>
              <span className="mt-1 text-base font-black uppercase leading-tight text-brand-ink">de commission</span>
              <span className="mt-1 bg-brand-pistachio px-2.5 py-1 text-xs font-black uppercase text-brand-ink">propriétaire</span>
            </div>
          </div>
        </div>

        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.title}
              className={`relative min-h-[136px] rounded-2xl border p-4 ${
                benefit.highlight
                  ? "border-brand-forest bg-brand-forest text-white shadow-[0_18px_40px_-18px_rgba(6,115,61,0.7)]"
                  : "border-brand-beige-dark bg-brand-beige/35 text-brand-ink shadow-[0_12px_30px_-22px_rgba(16,18,15,0.5)]"
              }`}
            >
              {benefit.highlight ? (
                <span className="absolute -right-2 -top-4 flex h-14 w-14 rotate-12 items-center justify-center rounded-full border-2 border-dashed border-brand-pistachio bg-brand-pistachio text-center text-[9px] font-black uppercase leading-tight text-brand-ink">
                  100%
                  <br /> garanti
                </span>
              ) : null}
              <div className={`mb-2 flex h-9 w-9 items-center justify-center rounded-full ${benefit.highlight ? "bg-brand-pistachio text-brand-ink" : "bg-brand-forest text-white"}`}>
                <benefit.icon />
              </div>
              <h3 className="font-display text-lg font-semibold">{benefit.title}</h3>
              <p className={`mt-1 text-xs leading-snug ${benefit.highlight ? "text-white/85" : "text-brand-ink/70"}`}>{benefit.text}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-3">
          <Button href="#confier-mon-bien" size="md" className="w-full sm:w-auto">
            Je confie mon bien à ImmoZen Groupe <span aria-hidden="true">→</span>
          </Button>
        </div>
      </Container>
    </section>
  );
}

function DiamondIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m3 8 4-5h10l4 5-9 12L3 8Z M3 8h18 M7 3l5 17 5-17"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M3 20c.5-3.3 2.5-5 6-5s5.5 1.7 6 5M15 15c3 0 5 1.5 6 4"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 11l4-4 4 3 4-3 4 4M7 10l4 5 4-5M5 12l-2 3 3 3M19 12l2 3-3 3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ZeroIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 16L16 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
