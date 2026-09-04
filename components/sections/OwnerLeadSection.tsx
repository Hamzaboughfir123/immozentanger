import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CONTACT } from "@/lib/constants";
import Image from "next/image";

export function OwnerLeadSection() {
  return (
    <section
      id="confier-mon-bien"
      className="relative overflow-hidden bg-brand-ink py-10 sm:py-14"
    >
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1582919534700-acf2374f10d3?w=2400&q=80&auto=format&fit=crop"
          alt="Vue aérienne de la médina de Tanger et de sa baie au crépuscule, avec le détroit de Gibraltar en arrière-plan"
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-ink/85" />
      </div>

      <Container className="relative flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-pistachio/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-pistachio ring-1 ring-brand-pistachio/30">
          Vous êtes propriétaire ?
        </span>

        <h2 className="mt-4 max-w-3xl text-balance font-display text-3xl font-medium leading-[1.08] text-white sm:text-4xl">
          Vous avez le bien.
          <br /> Nous avons le client.
        </h2>

        <p className="mt-3 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
          Vente ou location : parlez-en à un expert ImmoZen Groupe dès
          maintenant, sans détour ni engagement.
        </p>

        <Reveal className="mt-6 w-full max-w-2xl" delay={80}>
          <div className="flex flex-col gap-3 rounded-3xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur-sm sm:flex-row sm:p-6">
            <Button href={CONTACT.whatsappHref} size="lg" className="flex-1">
              <WhatsAppIcon />
              Discuter sur WhatsApp
            </Button>
            <Button
              href={CONTACT.phoneHref}
              variant="outline"
              size="lg"
              className="flex-1"
            >
              <PhoneIcon />
              Appeler ImmoZen Groupe
            </Button>
          </div>
        </Reveal>

        <p className="mt-4 text-sm text-white/50">
          100 % gratuit. Zéro engagement. Réponse rapide.
        </p>

        <Reveal className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-2" delay={160}>
          {[
            "300+ agences partenaires",
            "0 DH de commission",
            "Maroc & International",
          ].map((label) => (
            <span
              key={label}
              className="flex items-center gap-2 text-sm font-medium text-white/70"
            >
              <CheckIcon />
              {label}
            </span>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.5 14.4c-.3-.1-1.6-.8-1.9-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-1.5-.7-2.5-1.3-3.5-3-.3-.5.3-.4.8-1.4.1-.2 0-.4 0-.5C11 9.6 10.6 8.5 10.4 8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9 1-.9 2.3 0 1.3 1 2.6 1.1 2.8.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.1.2-1.3-.1-.1-.3-.2-.6-.3z" />
      <path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.6 1.4 5.1L2 22l5-1.3c1.5.8 3.2 1.3 5 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.3c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3C4.2 15.1 3.7 13.6 3.7 12c0-4.6 3.7-8.3 8.3-8.3s8.3 3.7 8.3 8.3-3.7 8.3-8.3 8.3z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="shrink-0 text-brand-pistachio"
    >
      <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.15" />
      <path
        d="M8 12.5l2.5 2.5L16 9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}
