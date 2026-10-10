"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { openPropertyLeadModal } from "@/components/property-lead/lead-modal-events";
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
      className={`fixed inset-x-3 top-3 z-50 rounded-[22px] transition-all duration-300 sm:inset-x-5 sm:top-4 ${
        scrolled
          ? "bg-white/90 shadow-[0_1px_0_0_rgba(16,18,15,0.06)] backdrop-blur-md"
          : "bg-white/95 shadow-[0_2px_14px_rgba(16,18,15,0.08)]"
      }`}
    >
      <Container className="flex h-14 max-w-none items-center justify-between gap-2 sm:h-20">
        <div className="flex min-w-0 items-center gap-2 sm:gap-6">
          <a href="#accueil" className="flex shrink-0 items-center" aria-label={SITE_NAME}>
            <span className="relative block h-11 w-[122px] shrink-0 sm:h-14 sm:w-44">
              <Image
                src="/images/logo-transparent.png"
                alt={SITE_NAME}
                width={2142}
                height={734}
                className="h-full w-full object-contain"
                preload
              />
            </span>
          </a>

          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 min-w-11 justify-center items-center gap-1.5 whitespace-nowrap text-xs font-bold text-brand-forest sm:text-sm xl:hidden"
            aria-label={`Contacter ImmoZen Groupe sur WhatsApp au ${CONTACT.phoneDisplay}`}
          >
            <WhatsAppIcon />
            <span className="hidden min-[400px]:inline">{CONTACT.phoneDisplay}</span>
          </a>
        </div>
        <nav className="hidden items-center gap-4 min-[1450px]:gap-6 xl:flex" aria-label="Navigation principale">
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

        <div className="hidden items-center gap-3 xl:flex">
          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-[#f6f6ef] px-5 py-4 items-center gap-2 whitespace-nowrap text-sm font-semibold text-brand-forest transition-colors hover:text-brand-forest-dark xl:inline-flex"
            aria-label={`Contacter ImmoZen Groupe sur WhatsApp au ${CONTACT.phoneDisplay}`}
          >
            <WhatsAppIcon />
            {CONTACT.phoneDisplay}
          </a>
          <Button onClick={() => openPropertyLeadModal()} size="md">
            Confier mon bien
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-brand-ink xl:hidden"
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
          className="max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain rounded-b-[22px] border-t border-brand-ink/10 bg-white px-4 pb-6 pt-3 xl:hidden [padding-bottom:max(1.5rem,env(safe-area-inset-bottom))]"
        >
          <nav className="flex flex-col gap-1" aria-label="Navigation mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center rounded-lg px-3 py-2.5 text-base font-medium text-brand-ink/80 hover:bg-brand-beige"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Contacter ImmoZen Groupe sur WhatsApp au ${CONTACT.phoneDisplay}`}
            onClick={() => setOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 rounded-full border border-brand-forest/25 px-5 py-3 text-sm font-semibold text-brand-forest"
          >
            <WhatsAppIcon />
            {CONTACT.phoneDisplay}
          </a>
          <Button
            className="mt-4 w-full"
            onClick={() => {
              setOpen(false);
              openPropertyLeadModal();
            }}
          >
            Confier mon bien
          </Button>
        </div>
      ) : null}
    </header>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="shrink-0">
      <path d="M17.5 14.4c-.3-.1-1.6-.8-1.9-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-1.5-.7-2.5-1.3-3.5-3-.3-.5.3-.4.8-1.4.1-.2 0-.4 0-.5C11 9.6 10.6 8.5 10.4 8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9 1-.9 2.3 0 1.3 1 2.6 1.1 2.8.1.2 2 3 4.8 4.2.7.2 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.1.2-1.3-.1-.1-.3-.2-.6-.3z" />
      <path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.6 1.4 5.1L2 22l5-1.3c1.5.8 3.2 1.3 5 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.3c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3C4.2 15.1 3.7 13.6 3.7 12c0-4.6 3.7-8.3 8.3-8.3s8.3 3.7 8.3 8.3-3.7 8.3-8.3 8.3z" />
    </svg>
  );
}
