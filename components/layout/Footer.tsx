import { Container } from "@/components/ui/Container";
import {
  CONTACT,
  GROUP_URL,
  NAV_LINKS,
  NETWORK_SITES,
  SITE_NAME,
  SOCIAL_LINKS,
} from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-ink text-white/80">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <a
            href={GROUP_URL}
            className="w-fit font-display text-2xl font-semibold text-white transition-colors hover:text-brand-pistachio"
          >
            {SITE_NAME}
          </a>
          <p className="max-w-xs text-sm leading-relaxed text-white/60">
            Agence immobilière nouvelle génération à Tanger. IA, digital et
            accompagnement humain au service des propriétaires.
          </p>
          <ul className="mt-2 flex gap-4 text-sm">
            {SOCIAL_LINKS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 transition-colors hover:text-brand-pistachio"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Navigation footer">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
            Navigation
          </p>
          <ul className="flex flex-col gap-3 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-white/70 hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
            Coordonnées
          </p>
          <ul className="flex flex-col gap-3 text-sm text-white/70">
            <li>
              <a href={CONTACT.phoneHref} className="hover:text-white">
                {CONTACT.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className="hover:text-white">
                {CONTACT.email}
              </a>
            </li>
            <li>{CONTACT.city}</li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
            Informations légales
          </p>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <a href="/mentions-legales" className="text-white/70 hover:text-white">
                Mentions légales
              </a>
            </li>
            <li>
              <a
                href="/politique-de-confidentialite"
                className="text-white/70 hover:text-white"
              >
                Politique de confidentialité
              </a>
            </li>
            <li>
              <a href="/cookies" className="text-white/70 hover:text-white">
                Cookies
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            ImmoZen — Réseau immobilier du groupe{" "}
            <a href={GROUP_URL} className="text-white/60 hover:text-brand-pistachio">
              ImmoZen Groupe
            </a>
          </p>
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>ImmoZen au Maroc :</span>
            {NETWORK_SITES.map((site, index) => (
              <span key={site.href} className="flex items-center gap-2">
                <a href={site.href} className="text-white/60 hover:text-brand-pistachio">
                  {site.label}
                </a>
                {index < NETWORK_SITES.length - 1 ? (
                  <span aria-hidden="true">·</span>
                ) : null}
              </span>
            ))}
          </p>
        </Container>
      </div>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE_NAME}. Tous droits réservés.
          </p>
          <p>Fait avec soin au Maroc.</p>
        </Container>
      </div>
    </footer>
  );
}
