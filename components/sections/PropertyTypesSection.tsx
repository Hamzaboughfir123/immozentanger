import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Image from "next/image";

const PROPERTY_TYPES = [
  {
    name: "Villa",
    image: "/images/property-types/villa.jpg",
    alt: "Villa avec piscine et pergola en bois, région de Tanger",
  },
  {
    name: "Appartement",
    image: "/images/property-types/appartement.jpg",
    alt: "Séjour et salle à manger d'un appartement moderne à Tanger",
  },
  {
    name: "Riad",
    image: "/images/property-types/riad.jpg",
    alt: "Cour intérieure d'un riad traditionnel marocain avec piscine en zellige",
  },
  {
    name: "Terrain",
    image: "/images/property-types/terrain.jpg",
    alt: "Terrain vu du ciel dans un quartier de Tanger",
  },
  {
    name: "Commerce",
    image: "https://images.unsplash.com/photo-1716146755954-4f197a5b6031?w=1200&q=80&auto=format&fit=crop",
    alt: "Échoppe colorée dans une médina marocaine, emplacement commercial typique",
  },
  {
    name: "Immeuble",
    image: "/images/property-types/immeuble.jpg",
    alt: "Toits blancs et bleus de la médina de Tanger surplombant le détroit de Gibraltar",
  },
];

export function PropertyTypesSection() {
  return (
    <section id="services" className="bg-white py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Nos services"
          title={
            <>
              Un bien à vendre ou à louer ?
              <br className="hidden sm:block" /> ImmoZen Groupe s&rsquo;occupe du reste.
            </>
          }
          description="Vendez. Louez. Sans commission, sans stress, sans perdre de temps."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROPERTY_TYPES.map((type, index) => (
            <Reveal key={type.name} delay={index * 60}>
              <div className="group relative aspect-[16/9] overflow-hidden rounded-3xl ring-1 ring-transparent transition-all duration-300 hover:ring-2 hover:ring-brand-pistachio hover:shadow-[0_20px_55px_-20px_rgba(165,210,50,0.55)]">
                <Image
                  src={type.image}
                  alt={type.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/80 via-brand-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5">
                  <span className="font-display text-xl font-medium text-white">
                    {type.name}
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-brand-pistachio group-hover:text-brand-ink">
                    <ArrowIcon />
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 17L17 7M17 7H9M17 7v8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
