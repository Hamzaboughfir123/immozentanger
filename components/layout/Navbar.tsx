"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CONTACT, NAV_LINKS, SITE_NAME } from "@/lib/constants";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-[0_1px_0_0_rgba(16,18,15,0.06)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <Container className="flex h-14 items-center justify-between gap-2 sm:h-20">
        <div className="flex min-w-0 items-center gap-5 sm:gap-6">
          <a href="#accueil" className="flex shrink-0 items-center" aria-label={SITE_NAME}>
            <Image
              src="/images/logo.png"
              alt={SITE_NAME}
              width={175}
              height={60}
              priority
              className="h-9 w-auto rounded-lg sm:h-10"
            />
          </a>

          <a
            href={CONTACT.phoneHref}
            className="inline-flex min-h-11 items-center gap-1.5 whitespace-nowrap text-xs font-bold text-brand-forest sm:text-sm lg:hidden"
            aria-label={`Appeler ImmoZen Groupe au ${CONTACT.phone}`}
          >
            <PhoneIcon />
            {CONTACT.phone}
          </a>
        </div>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navigation principale">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-ink/75 transition-colors hover:text-brand-forest"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={CONTACT.phoneHref}
            className="hidden items-center gap-2 whitespace-nowrap text-sm font-semibold text-brand-forest transition-colors hover:text-brand-forest-dark xl:inline-flex"
            aria-label={`Appeler ImmoZen Groupe au ${CONTACT.phone}`}
          >
            <PhoneIcon />
            {CONTACT.phone}
          </a>
          <Button href="#confier-mon-bien" size="md">
            Confier mon bien
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-brand-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </Container>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-brand-ink/10 bg-white px-4 pb-6 pt-3 lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Navigation mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-brand-ink/80 hover:bg-brand-beige"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={CONTACT.phoneHref}
            onClick={() => setOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 rounded-full border border-brand-forest/25 px-5 py-3 text-sm font-semibold text-brand-forest"
          >
            <PhoneIcon />
            {CONTACT.phone}
          </a>
          <Button href="#confier-mon-bien" className="mt-4 w-full" onClick={() => setOpen(false)}>
            Confier mon bien
          </Button>
        </div>
      ) : null}
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.6 3h3l1.5 4.2-2 1.7a15.5 15.5 0 006 6l1.7-2L21 14.4v3c0 2-1.6 3.6-3.6 3.6C9.4 21 3 14.6 3 6.6 3 4.6 4.6 3 6.6 3z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
