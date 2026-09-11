import { SavingsCalculator } from "@/components/interactive/SavingsCalculator";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SavingsSection() {
  return (
    <section id="simulateur" className="bg-brand-beige/50 py-10 sm:py-14">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Votre économie"
          title="Calculez votre économie en 10 secondes."
          description="Votre bien vaut cher. Sa vente ne devrait rien coûter aux propriétaires à Tanger."
          className="mx-auto"
        />

        <Reveal className="mt-6" delay={100}>
          <SavingsCalculator />
        </Reveal>

        <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-brand-ink/60">
          Exemple illustratif : pour un bien vendu à 1 500 000 DH, une
          commission d&rsquo;agence traditionnelle de 2,5 % représente 37 500
          DH. Avec ImmoZen Tanger, cette commission n&rsquo;est pas facturée
          au propriétaire.* Le taux réel d&rsquo;une agence traditionnelle
          peut varier.
        </p>
      </Container>
    </section>
  );
}
