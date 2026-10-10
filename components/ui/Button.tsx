import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex min-h-11 min-w-0 items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none whitespace-normal text-center leading-snug sm:whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-pistachio text-brand-ink hover:bg-brand-pistachio-dark shadow-[0_8px_30px_-8px_rgba(165,210,50,0.6)] hover:shadow-[0_10px_36px_-6px_rgba(165,210,50,0.75)] hover:-translate-y-0.5",
  secondary:
    "bg-brand-forest text-white hover:bg-brand-forest-dark shadow-[0_8px_30px_-10px_rgba(6,115,61,0.7)] hover:-translate-y-0.5",
  outline:
    "border border-white/40 text-white hover:bg-white/10 backdrop-blur-sm",
  ghost: "text-brand-ink hover:bg-brand-ink/5",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-3 text-sm",
  lg: "px-5 py-3 text-sm sm:px-7 sm:py-4 sm:text-base",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

type AsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type AsLink = CommonProps & {
  href: string;
  onClick?: () => void;
};

export function Button(props: AsButton | AsLink) {
  const { children, variant = "primary", size = "md", className } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href) {
    const { href } = props;
    const isInternal = href.startsWith("#") || href.startsWith("/");

    if (!isInternal) {
      // Liens externes (WhatsApp, tel:, mailto:, réseaux sociaux…) : balise
      // <a> native pour éviter le comportement de routing de next/link et
      // ouvrir dans un nouvel onglet quand c'est pertinent (http/https).
      const isHttp = href.startsWith("http");
      return (
        <a
          href={href}
          onClick={props.onClick}
          target={isHttp ? "_blank" : undefined}
          rel={isHttp ? "noopener noreferrer" : undefined}
          className={classes}
        >
          {children}
        </a>
      );
    }

    if (href.startsWith("#")) {
      return (
        <a href={href} onClick={props.onClick} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} onClick={props.onClick} className={classes}>
        {children}
      </Link>
    );
  }

  const { href: _href, variant: _v, size: _s, className: _c, ...buttonProps } =
    props as AsButton;

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
