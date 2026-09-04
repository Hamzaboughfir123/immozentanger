import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import Image from "next/image";

const PROPERTY_KINDS = [
  "Appartement",
  "Villa",
  "Terrain",
  "Commerce",
  "Riad",
  "Immeuble",
];

export function HeroSection() {
  return (
    <section id="accueil" className="relative overflow-hidden bg-brand-ink">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-tanger.jpg"
          alt="Le phare du Cap Spartel au coucher du soleil, entouré de palmiers, symbole de Tanger et du patrimoine immobilier haut de gamme"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_center] sm:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/75 via-brand-ink/40 to-brand-ink/5" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-ink/55 via-brand-ink/5 to-transparent" />
      </div>

      <Container className="relative flex min-h-[calc(100svh-5rem)] flex-col justify-center gap-8 py-10">
        <div className="max-w-3xl lg:max-w-xl xl:max-w-2xl">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-pistachio/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-pistachio backdrop-blur-sm ring-1 ring-brand-pistachio/30">
            Agence immobilière nouvelle génération · Maroc
          </span>

          <h1 className="text-balance font-display text-4xl font-medium leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            Propriétaires,
            <br />
            ne payez plus de{" "}
            <span className="text-brand-pistachio">commission d&rsquo;agence.</span>
          </h1>

          <p className="mt-5 max-w-xl text-balance text-base leading-relaxed text-white/80 sm:text-lg">
            Confiez la vente ou la location de votre bien à ImmoZen Groupe.
            <br className="hidden sm:block" /> 0 DH de commission pour les
            propriétaires.*
            <span className="mt-2 flex items-center gap-2 text-sm font-medium text-white/90">
              <span className="text-brand-pistachio" aria-hidden="true">
                <LocationIcon />
              </span>
              <span>
                <strong className="text-brand-pistachio">Priorité Tanger</strong>
                {' · '}Marrakech · Rabat · Casablanca · Agadir
              </span>
            </span>
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="#confier-mon-bien" size="lg">
              Je confie mon bien à ImmoZen Groupe
            </Button>
            <Button href="#simulateur" variant="outline" size="lg">
              Estimer mon économie
            </Button>
          </div>
        </div>

        <div className="absolute right-[358px] top-[calc(38%-60px)] hidden w-56 -translate-y-1/2 items-center gap-2.5 rounded-2xl border border-brand-pistachio/35 bg-brand-ink/60 p-3 shadow-[0_22px_60px_-20px_rgba(165,210,50,0.75)] backdrop-blur-md lg:flex xl:right-[406px] xl:w-64">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-pistachio text-brand-ink shadow-[0_0_25px_rgba(165,210,50,0.35)]">
            <CrownIcon />
          </div>
          <div>
            <strong className="block font-display text-2xl leading-none text-brand-pistachio">
              300+
            </strong>
            <span className="mt-1 block text-[11px] font-medium leading-snug text-white/90">
              agences partenaires réunies dans un même réseau, au Maroc et à
              l&rsquo;international.
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-white/15 pt-6 text-sm text-white/60">
          {PROPERTY_KINDS.map((kind, i) => (
            <span key={kind} className="flex items-center gap-3">
              {kind}
              {i < PROPERTY_KINDS.length - 1 ? (
                <span className="h-1 w-1 rounded-full bg-white/30" aria-hidden="true" />
              ) : null}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}

function LocationIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function CrownIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 7l4.2 3.2L12 4l4.8 6.2L21 7l-2 10H5L3 7z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M6 20h12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}
