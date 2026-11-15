import { Badge, ButtonLink, Card, Topbar, type TopbarLink } from "@/components/acme";

const NAV_LINKS: TopbarLink[] = [
  { label: "Home", href: "/" },
  { label: "Learn", href: "https://nextjs.org/learn" },
  { label: "Examples", href: "https://vercel.com/templates?framework=next.js" },
  { label: "Docs", href: "https://nextjs.org/docs" },
];

const DEPLOY_URL = "https://vercel.com/new";
const DOCS_URL = "https://nextjs.org/docs";

const iconProps = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

const footerLinkStyle = {
  display: "flex",
  alignItems: "center",
  gap: "var(--acme-space-2)",
  minHeight: 44,
} as const;

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Topbar links={NAV_LINKS} current="Home">
        <ButtonLink variant="primary" size="sm" href={DEPLOY_URL} target="_blank" rel="noopener noreferrer">
          Deploy now
        </ButtonLink>
      </Topbar>

      <main
        style={{
          flexGrow: 1,
          width: "100%",
          maxWidth: 1200,
          margin: "0 auto",
          padding: "var(--acme-space-16) var(--acme-space-6)",
          display: "flex",
          flexDirection: "column",
          gap: "var(--acme-space-12)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "var(--acme-space-4)", maxWidth: 640 }}>
          <Badge variant="success">Dev server running</Badge>
          <h1 className="display" style={{ margin: 0 }}>
            Your Next.js app is ready
          </h1>
          <p className="body" style={{ margin: 0, fontSize: "var(--acme-text-lg)", color: "var(--acme-color-text-muted)" }}>
            Two steps to your first change. The rest of the catalog can wait.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            gap: "var(--acme-space-6)",
            alignItems: "start",
          }}
        >
          <Card title="Get started">
            <ol
              className="ui"
              style={{
                margin: "var(--acme-space-3) 0 0",
                paddingLeft: "var(--acme-space-5)",
                listStyle: "decimal",
                display: "flex",
                flexDirection: "column",
                gap: "var(--acme-space-3)",
                color: "var(--acme-color-text-muted)",
              }}
            >
              <li>
                Edit{" "}
                <code
                  style={{
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    color: "var(--acme-color-text)",
                    background: "var(--acme-color-surface-hover)",
                    border: "1px solid var(--acme-color-border)",
                    borderRadius: "var(--acme-radius-sm)",
                    padding: "1px 6px",
                  }}
                >
                  src/app/page.tsx
                </code>
                .
              </li>
              <li>Save. Changes show up instantly.</li>
            </ol>
          </Card>

          <Card title="Ship it">
            <p className="ui" style={{ margin: "var(--acme-space-3) 0 var(--acme-space-5)", color: "var(--acme-color-text-muted)" }}>
              Deploy to production in a minute, or read up on routing, data and rendering first.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--acme-space-3)" }}>
              <ButtonLink variant="primary" href={DEPLOY_URL} target="_blank" rel="noopener noreferrer">
                Deploy now
              </ButtonLink>
              <ButtonLink variant="secondary" href={DOCS_URL} target="_blank" rel="noopener noreferrer">
                Read the docs
              </ButtonLink>
            </div>
          </Card>
        </div>
      </main>

      <footer style={{ borderTop: "1px solid var(--acme-color-border)", background: "var(--acme-color-surface)" }}>
        <div
          className="ui"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "var(--acme-space-5) var(--acme-space-6)",
            display: "flex",
            flexWrap: "wrap",
            gap: "var(--acme-space-6)",
            alignItems: "center",
          }}
        >
          <a href="https://nextjs.org/learn" target="_blank" rel="noopener noreferrer" style={footerLinkStyle}>
            <svg {...iconProps}>
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <path d="M14 2v6h6" />
            </svg>
            Learn
          </a>
          <a href="https://vercel.com/templates?framework=next.js" target="_blank" rel="noopener noreferrer" style={footerLinkStyle}>
            <svg {...iconProps}>
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18" />
            </svg>
            Examples
          </a>
          <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" style={footerLinkStyle}>
            <svg {...iconProps}>
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            Go to nextjs.org
          </a>
          <span className="caption" style={{ marginLeft: "auto", color: "var(--acme-color-text-subtle)" }}>
            Built with ACME Design System v5.1
          </span>
        </div>
      </footer>
    </div>
  );
}
