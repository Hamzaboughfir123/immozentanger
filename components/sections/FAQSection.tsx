import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CONTACT, SITE_URL } from "@/lib/constants";

/**
 * Source unique des questions/réponses : sert à la fois au contenu visible
 * (accessible, indexable, sans JS) et au JSON-LD FAQPage, pour garantir que
 * les données structurées correspondent exactement à ce que voit l'utilisateur.
 */
const FAQ_ITEMS = [
  {
    question: "Comment vendre son bien immobilier à Tanger ?",
    answer:
      "Contactez ImmoZen Tanger via le formulaire « Confier mon bien » ou par téléphone. Nous évaluons votre bien, préparons sa mise en valeur (photos, description, diffusion) puis le proposons à notre réseau d'acquéreurs, sans commission à votre charge en tant que propriétaire.",
  },
  {
    question: "Le propriétaire paie-t-il une commission avec ImmoZen ?",
    answer:
      "Non. ImmoZen Tanger applique 0 DH de commission pour le propriétaire vendeur ou bailleur, selon les conditions précisées avec votre conseiller au moment de la prise de mandat.",
  },
  {
    question: "Comment confier mon appartement à ImmoZen Tanger ?",
    answer:
      "Remplissez le formulaire « Confier mon bien » avec les informations de votre appartement (adresse, surface, état), ou contactez-nous directement par téléphone ou WhatsApp. Un conseiller vous recontacte pour organiser une visite.",
  },
  {
    question: "Comment vendre une villa à Tanger avec ImmoZen ?",
    answer:
      "Le principe est le même que pour tout type de bien : estimation, mise en valeur, diffusion auprès de notre réseau de 300+ agences partenaires, puis accompagnement jusqu'à la signature, sans commission pour vous, propriétaire.",
  },
  {
    question: "ImmoZen s'occupe-t-il également de la location ?",
    answer:
      "Oui. ImmoZen Tanger accompagne aussi bien la vente que la location de biens résidentiels et commerciaux à Tanger.",
  },
  {
    question: "Quels types de biens immobiliers sont pris en charge ?",
    answer:
      "Appartements, villas, riads, terrains, commerces et immeubles, à Tanger et dans sa région.",
  },
  {
    question: "Comment fonctionne l'offre 0 DH de commission propriétaire ?",
    answer:
      "ImmoZen Tanger ne facture aucune commission au propriétaire vendeur ou bailleur lors de la transaction, selon les conditions applicables précisées avec votre conseiller au moment de la prise de mandat.",
  },
  {
    question: "Comment proposer mon bien immobilier à ImmoZen Tanger ?",
    answer: `Via le formulaire « Confier mon bien » sur ce site, par téléphone au ${CONTACT.phoneDisplay}, ou par WhatsApp.`,
  },
] as const;

function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function FAQSection() {
  return (
    <section id="faq" className="bg-white py-14 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
      />
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Questions fréquentes"
          title="Vendre ou louer à Tanger, vos questions de propriétaire."
          description="Les réponses aux questions les plus posées par les propriétaires avant de confier leur bien à ImmoZen Tanger."
          className="mx-auto"
        />

        <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-brand-ink/60">
          ImmoZen Tanger est l&rsquo;antenne à Tanger du réseau ImmoZen
          Groupe. Elle accompagne les propriétaires de biens situés à Tanger
          et dans sa région pour la vente et la location d&rsquo;appartements,
          villas, riads, terrains, commerces et immeubles, avec 0 DH de
          commission facturée au propriétaire.*
        </p>

        <div className="mx-auto mt-8 flex max-w-3xl flex-col gap-3">
          {FAQ_ITEMS.map((item, index) => (
            <Reveal key={item.question} delay={index * 50}>
              <details className="group rounded-2xl border border-brand-beige-dark bg-brand-beige/25 p-5 open:bg-white open:shadow-[0_12px_30px_-22px_rgba(16,18,15,0.5)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold text-brand-ink marker:content-none">
                  {item.question}
                  <span
                    className="shrink-0 text-brand-forest transition-transform duration-200 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    <PlusIcon />
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink/70">
                  {item.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function PlusIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
