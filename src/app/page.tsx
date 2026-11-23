import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "/", current: true },
  { label: "Learn", href: "https://nextjs.org/learn" },
  { label: "Examples", href: "https://vercel.com/templates?framework=next.js" },
  { label: "Docs", href: "https://nextjs.org/docs" },
];

const DEPLOY_URL = "https://vercel.com/new";
const DOCS_URL = "https://nextjs.org/docs";

// Icons: 24px grid, 2px stroke, square caps, currentColor; always paired with a word.
const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "square",
  strokeLinejoin: "miter",
  "aria-hidden": true,
} as const;

function external(href: string) {
  return href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {};
}

export default function Home() {
  return (
    <div style={{ minHeight: "calc(100vh - var(--stroke-bar))", display: "flex", flexDirection: "column" }}>
      <header className="m-header">
        <div className="m-container m-header__inner">
          <Link className="m-product" href="/">
            Next.js app
          </Link>
          <nav className="m-nav" aria-label="Primary">
            {NAV_LINKS.map((l) =>
              l.href.startsWith("/") ? (
                <Link
                  key={l.label}
                  className="m-link"
                  href={l.href}
                  aria-current={l.current ? "page" : undefined}
                >
                  {l.label}
                </Link>
              ) : (
                <a key={l.label} className="m-link" href={l.href} {...external(l.href)}>
                  {l.label}
                </a>
              ),
            )}
          </nav>
        </div>
      </header>

      <main
        className="m-container"
        style={{
          flexGrow: 1,
          width: "100%",
          boxSizing: "border-box",
          paddingBlock: "var(--space-8) var(--space-7)",
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-7)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", maxWidth: 880 }}>
          <p className="m-label">Local development</p>
          <h1 className="m-display">Your Next.js app is ready</h1>
          <p className="m-lede">
            Two steps to your first change. Then deploy it, or read how routing, data and rendering work.
          </p>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-6) var(--grid-gutter)" }}>
          <section className="m-section" aria-labelledby="get-started">
            <h2 id="get-started" className="m-heading-2">
              Get started
            </h2>
            <ol className="m-steps">
              <li>
                <span className="m-steps__num" aria-hidden="true">
                  1
                </span>
                <span>
                  Edit <code className="m-code">src/app/page.tsx</code>.
                </span>
              </li>
              <li>
                <span className="m-steps__num" aria-hidden="true">
                  2
                </span>
                <span>Save. Changes show up instantly.</span>
              </li>
            </ol>
          </section>

          <section className="m-section" aria-labelledby="ship-it">
            <h2 id="ship-it" className="m-heading-2">
              Ship it
            </h2>
            <p style={{ margin: 0, paddingBlock: "var(--space-3) var(--space-2)", color: "var(--ink-2)" }}>
              Deploy to production in about a minute.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-3)" }}>
              <a className="m-btn m-btn--primary" href={DEPLOY_URL} {...external(DEPLOY_URL)}>
                Deploy now
              </a>
              <a className="m-btn" href={DOCS_URL} {...external(DOCS_URL)}>
                Read the docs
              </a>
            </div>
          </section>
        </div>
      </main>

      <footer className="m-footer">
        <div className="m-container m-footer__inner">
          <a className="m-link" href="https://nextjs.org/learn" target="_blank" rel="noopener noreferrer">
            <svg {...iconProps}>
              <path d="M14 2H5v20h14V7z" />
              <path d="M14 2v5h5" />
            </svg>
            Learn
          </a>
          <a className="m-link" href="https://vercel.com/templates?framework=next.js" target="_blank" rel="noopener noreferrer">
            <svg {...iconProps}>
              <rect x="3" y="3" width="18" height="18" />
              <path d="M3 9h18" />
            </svg>
            Examples
          </a>
          <a className="m-link" href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
            <svg {...iconProps}>
              <path d="M7 17 17 7" />
              <path d="M8 7h9v9" />
            </svg>
            Go to nextjs.org
          </a>
          <p className="m-label m-footer__note">Set in Modernist</p>
        </div>
      </footer>
    </div>
  );
}
