"use client";

import { Button } from "@/components/ui/Button";
import type { ComponentProps } from "react";
import { openPropertyLeadModal } from "./lead-modal-events";

type ButtonProps = ComponentProps<typeof Button>;

/**
 * Wrapper client autour de <Button> qui ouvre la modale "Confier mon bien"
 * au clic, au lieu d'un lien ancre. Existe pour que des Server Components
 * (HeroSection, MobileStickyCta...) puissent déclencher la modale sans
 * qu'on leur fasse passer une closure en prop (impossible en RSC) : tout le
 * comportement interactif vit ici, dans ce module client.
 */
export function OpenPropertyLeadButton({ children, ...props }: Omit<ButtonProps, "href" | "onClick">) {
  return (
    <Button {...(props as ButtonProps)} onClick={() => openPropertyLeadModal()}>
      {children}
    </Button>
  );
}
