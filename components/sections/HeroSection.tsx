import Image from "next/image";
import { OpenPropertyLeadButton } from "@/components/property-lead/OpenPropertyLeadButton";
import styles from "./HeroSection.module.css";

export function HeroSection() {
  return (
    <section id="accueil" className={styles.hero}>
      <Image src="/images/tanger.jpeg" alt="Vue de Tanger, de ses maisons color?es et de son port au bord de la mer" fill preload sizes="100vw" className={styles.photo} />
      <div className={styles.veil} />
      <div className={styles.content}>
        <p className={styles.eyebrow}>Agence immobilière nouvelle génération · Tanger · Maroc</p>
        <h1 className={styles.title}>Votre bien.<span>Notre mission.</span></h1>
        <div className={styles.offer}><strong>0 DH</strong><p>De commission<br />propriétaire*</p></div>
        <div className={styles.description}><p className={styles.kicker}>Vente et location</p><p>Confiez-nous votre appartement, villa,<br className={styles.desktopBreak} /> riad, terrain ou commerce.</p></div>
        <div className={styles.actions}>
          <OpenPropertyLeadButton variant="secondary" className={styles.primary}>Confier mon bien <span aria-hidden="true">→</span></OpenPropertyLeadButton>
          <a href="#simulateur" className={styles.secondary}>Estimer mon économie <span aria-hidden="true">→</span></a>
        </div>
      </div>
      <div className={styles.proofs}>
        <ProofItem kind="network"><strong className={styles.number}>300+</strong><b>agences partenaires</b><span>au Maroc et à l’international</span></ProofItem>
        <ProofItem kind="shield"><b>Accompagnement<br />personnalisé de A à Z</b><span>jusqu’à la transaction</span></ProofItem>
        <ProofItem kind="handshake"><b>Transaction<br />sécurisée et transparente</b></ProofItem>
      </div>
      <span className={styles.location}><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a8 8 0 0 0-8 8c0 6 8 12 8 12s8-6 8-12a8 8 0 0 0-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" /></svg>Tanger, Maroc</span>
    </section>
  );
}

function ProofItem({ kind, children }: { kind: "network" | "shield" | "handshake"; children: React.ReactNode }) {
  return <div className={styles.card}><span className={styles.icon}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{kind === "network" ? <><circle cx="12" cy="7" r="3" /><path d="M6 21v-3a6 6 0 0 1 12 0v3H6ZM5 5a3 3 0 0 0 0 6M19 5a3 3 0 0 1 0 6M4 13a5 5 0 0 0-3 5v3h3M20 13a5 5 0 0 1 3 5v3h-3" /></> : kind === "shield" ? <><path d="m12 2 9 4v6c0 5-9 10-9 10S3 17 3 12V6l9-4Z" /><path d="m7 12 3 3 7-7" /></> : <><path d="m2 10 4-6 5 2 3-2 4 2 4 5-4 7-3 2-4-2-3 1-6-9Z" /><path d="m6 6 4 3 4-3M10 9l-3 4 3 2 4-4 6 5M10 15l5 5" /></>}</svg></span><div>{children}</div></div>;
}
