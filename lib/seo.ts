import type { Metadata } from "next";
import { CONTACT, SITE_NAME, SITE_URL, SOCIAL_LINKS } from "@/lib/constants";

export const DEFAULT_TITLE =
  "ImmoZen Tanger | Agence immobilière sans commission propriétaire";

export const DEFAULT_DESCRIPTION =
  "ImmoZen Tanger accompagne les propriétaires pour vendre ou louer leur appartement, villa, terrain ou commerce à Tanger. 0 DH de commission propriétaire, accompagnement complet.";

export function buildMetadata(overrides: Partial<Metadata> = {}): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: DEFAULT_TITLE,
      template: "%s | ImmoZen Tanger",
    },
    description: DEFAULT_DESCRIPTION,
    keywords: [
      "agence immobilière Tanger",
      "agence immobilière Tanger propriétaire",
      "vendre appartement Tanger",
      "vendre villa Tanger",
      "vendre maison Tanger",
      "louer appartement Tanger",
      "confier bien immobilier Tanger",
      "agence immobilière sans commission propriétaire Tanger",
      "0 DH commission propriétaire Tanger",
      "ImmoZen Tanger",
    ],
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: "fr_MA",
      url: SITE_URL,
      siteName: SITE_NAME,
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
      // L'image Open Graph est fournie par app/opengraph-image.tsx
      // (convention de fichier Next.js) afin d'éviter toute duplication.
    },
    twitter: {
      card: "summary_large_image",
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
      // Idem : image fournie par app/twitter-image.tsx.
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    ...overrides,
  };
}

/**
 * JSON-LD Schema.org — RealEstateAgent, ciblé sur Tanger.
 * Rendu dans le <head> via <script type="application/ld+json"> (app/layout.tsx).
 *
 * N'invente aucune donnée non fournie par le projet : pas d'adresse postale
 * précise, pas de note/avis, pas de statistiques. `sameAs` ne reprend que les
 * réseaux sociaux réels déclarés dans lib/constants.ts.
 */
export function realEstateAgentJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${SITE_URL}/#organization`,
    name: "ImmoZen Tanger",
    alternateName: "ImmoZen Groupe",
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    image: `${SITE_URL}/images/logo.png`,
    logo: `${SITE_URL}/images/logo.png`,
    areaServed: {
      "@type": "City",
      name: "Tanger",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tanger",
      addressCountry: "MA",
    },
    knowsLanguage: ["fr", "ar"],
    sameAs: SOCIAL_LINKS.map((social) => social.href),
  };
}

/**
 * JSON-LD Schema.org — WebSite, relié à l'organisation via `publisher`.
 * Pas de `potentialAction` SearchAction : le site n'a pas de moteur de
 * recherche interne, ce serait une donnée structurée trompeuse.
 */
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: "fr-MA",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}
