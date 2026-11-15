// React primitives for the ACME Design System (v5.1.0), ported from the
// system's components/*.jsx. Styles live in src/styles/acme/bundle.css.
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
type ButtonSize = "sm" | "lg";

function buttonClass(variant: ButtonVariant, size?: ButtonSize, className = "") {
  return ["acme-btn", `acme-btn--${variant}`, size ? `acme-btn--${size}` : "", className]
    .filter(Boolean)
    .join(" ");
}

export function Wordmark({ href = "/", onDark = false }: { href?: string; onDark?: boolean }) {
  return (
    <a className={"acme-wordmark" + (onDark ? " acme-wordmark--on-dark" : "")} href={href}>
      <span className="acme-wordmark__mark" aria-hidden="true">
        A
      </span>
      ACME
    </a>
  );
}

export function Button({
  variant = "secondary",
  size,
  className,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ButtonVariant; size?: ButtonSize }) {
  return <button type="button" className={buttonClass(variant, size, className)} {...rest} />;
}

/** A link styled as a Button: use it when the action navigates. */
export function ButtonLink({
  variant = "secondary",
  size,
  className,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: ButtonVariant; size?: ButtonSize }) {
  return <a className={buttonClass(variant, size, className)} {...rest} />;
}

export type TopbarLink = { label: string; href: string };

export function Topbar({
  links = [],
  current,
  children,
}: {
  links?: TopbarLink[];
  current?: string;
  children?: ReactNode;
}) {
  return (
    <header className="acme-topbar">
      <Wordmark />
      <nav className="acme-topbar__nav" aria-label="Primary">
        {links.map((l) => (
          <a
            key={l.label}
            className="acme-topbar__link"
            href={l.href}
            aria-current={l.label === current ? "page" : undefined}
          >
            {l.label}
          </a>
        ))}
      </nav>
      {children && <div className="acme-topbar__actions">{children}</div>}
    </header>
  );
}

export function Card({
  title,
  footer,
  interactive = false,
  children,
}: {
  title?: ReactNode;
  footer?: ReactNode;
  interactive?: boolean;
  children?: ReactNode;
}) {
  return (
    <article className={"acme-card" + (interactive ? " acme-card--interactive" : "")}>
      <div className="acme-card__body">
        {title && <h3 className="acme-card__title">{title}</h3>}
        {children}
      </div>
      {footer && <div className="acme-card__footer">{footer}</div>}
    </article>
  );
}

// Status glyphs on a 24px grid, 2px stroke: status stays legible without colour.
const STATUS_PATHS = {
  success: ["M20 6 9 17l-5-5"],
  warning: ["M12 3 2 20h20L12 3z", "M12 10v4", "M12 17h.01"],
  danger: ["M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z", "M15 9l-6 6", "M9 9l6 6"],
  info: ["M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z", "M12 16v-4", "M12 8h.01"],
} as const;

type Status = keyof typeof STATUS_PATHS;

export function Badge({
  variant = "neutral",
  icon = true,
  children,
}: {
  variant?: Status | "neutral";
  icon?: boolean;
  children: ReactNode;
}) {
  const status = variant === "neutral" ? null : variant;
  return (
    <span className={"acme-badge" + (status ? ` acme-badge--${status}` : "")}>
      {icon && status && (
        <svg
          className="acme-status-icon"
          width={12}
          height={12}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          focusable="false"
        >
          {STATUS_PATHS[status].map((d) => (
            <path key={d} d={d} />
          ))}
        </svg>
      )}
      {children}
    </span>
  );
}
