/**
 * Élément visuel partagé par app/opengraph-image.tsx et app/twitter-image.tsx,
 * pour générer une seule image locale 1200×630 (pas d'URL externe, pas de
 * duplication de design entre les deux conventions de fichier Next.js).
 */
export const OG_IMAGE_SIZE = { width: 1200, height: 630 };
export const OG_IMAGE_CONTENT_TYPE = "image/png";

const BRAND_FOREST = "#06733d";
const BRAND_PISTACHIO = "#a5d232";
const BRAND_INK = "#10120f";

export function OgImageElement() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 72px",
        background: `linear-gradient(135deg, ${BRAND_FOREST} 0%, ${BRAND_INK} 100%)`,
        fontFamily: "Georgia, serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 56,
            height: 56,
            borderRadius: 14,
            background: BRAND_PISTACHIO,
            color: BRAND_FOREST,
            fontSize: 30,
            fontWeight: 700,
          }}
        >
          Z
        </div>
        <span style={{ fontSize: 30, fontWeight: 700, color: "#ffffff" }}>
          ImmoZen Tanger
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <span
          style={{
            fontSize: 54,
            fontWeight: 700,
            lineHeight: 1.15,
            color: "#ffffff",
            maxWidth: 920,
          }}
        >
          Vendez ou louez votre bien à Tanger
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "14px 28px",
              borderRadius: 16,
              border: `2px solid ${BRAND_PISTACHIO}`,
              background: "rgba(0,0,0,0.25)",
            }}
          >
            <span style={{ fontSize: 40, fontWeight: 700, color: BRAND_PISTACHIO }}>
              0 DH
            </span>
            <span
              style={{
                fontSize: 16,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 2,
                color: "#ffffff",
              }}
            >
              de commission propriétaire
            </span>
          </div>
          <span style={{ fontSize: 24, color: "rgba(255,255,255,0.75)" }}>
            Tanger · Maroc
          </span>
        </div>
      </div>
    </div>
  );
}
