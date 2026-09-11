import { CONTACT, SITE_URL } from "@/lib/constants";
import { DEFAULT_DESCRIPTION } from "@/lib/seo";

/**
 * /llms.txt — résumé factuel du site pour les agents et moteurs de réponse
 * IA (ChatGPT, Perplexity, Gemini, Copilot...). Convention non officielle,
 * sans garantie d'impact sur le classement : ne contient que des
 * informations déjà publiées ailleurs sur le site.
 */
export function GET() {
  const body = `# ImmoZen Tanger

> ${DEFAULT_DESCRIPTION}

## À propos
- ImmoZen Tanger est l'antenne à Tanger du réseau ImmoZen Groupe, agence immobilière nouvelle génération au Maroc.
- Zone d'intervention : Tanger et sa région.
- Site officiel : ${SITE_URL}

## Services
- Vente de biens immobiliers pour le compte de propriétaires à Tanger.
- Location de biens résidentiels et commerciaux à Tanger.
- Types de biens pris en charge : appartement, villa, riad, terrain, commerce, immeuble.
- Offre principale : 0 DH de commission facturée au propriétaire vendeur ou bailleur, selon les conditions applicables précisées lors de la prise de mandat.

## Comment confier un bien
- Formulaire « Confier mon bien » sur ${SITE_URL}/#confier-mon-bien
- Téléphone / WhatsApp : ${CONTACT.phoneDisplay}
- Email : ${CONTACT.email}

## Pages
- Accueil : ${SITE_URL}/
- Mentions légales : ${SITE_URL}/mentions-legales
- Politique de confidentialité : ${SITE_URL}/politique-de-confidentialite
- Cookies : ${SITE_URL}/cookies
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
