export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://www.immozen.ma";

export const SITE_NAME = "ImmoZen Groupe";

export const CONTACT = {
  phone: "+212775918796",
  phoneHref: "tel:+212775918796",
  whatsappHref: "https://wa.me/212775918796",
  email: "contact@immozengroupe.com",
  city: "Casablanca, Maroc",
};

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/immozen.groupe" },
  { label: "LinkedIn", href: "https://linkedin.com/company/immozen-groupe" },
  { label: "Facebook", href: "https://web.facebook.com/Immozengroupe" },
] as const;

export const NAV_LINKS = [
  { label: "Accueil", href: "#accueil" },
  { label: "Pourquoi ImmoZen Groupe", href: "#pourquoi-immozen" },
  { label: "Votre économie", href: "#simulateur" },
  { label: "Nos services", href: "#services" },
  { label: "Confier mon bien", href: "#confier-mon-bien" },
] as const;

export const DEFAULT_COMMISSION_RATE = 2.5;
