import { useState } from "react";
import { type Tool } from "../data";

const PROMPT_FEATURES = [
  "Complete prompt framework (all variations)",
  "Extended use-case examples",
  "Platform-specific adaptations",
  "Lifetime updates included",
];
const SCRIPT_FEATURES = [
  "Full production-ready source code",
  "Advanced error handling & logging",
  "Config file for easy customization",
  "Step-by-step deployment guide",
];

/* ── Copy button ─────────────────────────────────────────────── */
function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = code;
      ta.style.cssText = "position:fixed;opacity:0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button className={`ncl-copy-btn${copied ? " copied" : ""}`} onClick={handleCopy} aria-label="Copy code">
      {copied ? (
        <>
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Copied!
        </>
      ) : (
        <>
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
          Copy
        </>
      )}
    </button>
  );
}

/* ── Type icon ───────────────────────────────────────────────── */
function TypeIcon({ type }: { type: Tool["type"] }) {
  if (type === "prompt") {
    return (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" />
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  );
}

/* ── Ad zone component ───────────────────────────────────────── */
function AdZone({ label, comment }: { label: string; comment: string }) {
  return (
    <div className="ncl-ad-zone" aria-label="Advertisement">
      {/* {comment} */}
      {label}
    </div>
  );
}

/* ── Detail page ─────────────────────────────────────────────── */
export default function DetailPage({ tool, onBack }: { tool: Tool; onBack: () => void }) {
  const isPrompt = tool.type === "prompt";
  const features = isPrompt ? PROMPT_FEATURES : SCRIPT_FEATURES;
  const sampleLang = isPrompt ? "PROMPT" : "PYTHON";

  /* Split instructions: first half → ad → second half */
  const midpoint = Math.ceil(tool.instructions.length / 2);
  const stepsTop    = tool.instructions.slice(0, midpoint);
  const stepsBottom = tool.instructions.slice(midpoint);

  return (
    <div className="ncl-page">

      {/* ── Sticky nav ─────────────────────────────────────────── */}
      <header className="ncl-detail-header">
        <div className="ncl-container">
          <div className="ncl-detail-header-inner">
            <button className="ncl-back-btn" onClick={onBack} aria-label="Back to home">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back
            </button>
            <span className="ncl-detail-crumb">{tool.category}</span>
          </div>
        </div>
      </header>

      <main className="ncl-detail-content">

        {/* ── Hero ───────────────────────────────────────────────── */}
        <div className="ncl-hero-block">
          <div className="ncl-hero-icon-row">
            <div className={`ncl-hero-icon ${tool.type}`} aria-hidden>
              <TypeIcon type={tool.type} />
            </div>
            <span className={`ncl-type-badge ${tool.type}`} style={{ padding: "4px 13px", borderRadius: "20px", fontSize: "0.72rem" }}>
              {isPrompt ? "AI Prompt Matrix" : "Automation Bot Script"}
            </span>
          </div>
          <h1 className="ncl-hero-title">{tool.title}</h1>
          <p className="ncl-hero-desc">{tool.description}</p>
          <div className="ncl-hero-tags">
            {tool.tags.map((tag) => (
              <span key={tag} className="ncl-hero-tag">{tag}</span>
            ))}
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════
            SECTION A — Technical Guide
        ════════════════════════════════════════════════════════ */}
        <section aria-labelledby="section-a-heading">
          <div className="ncl-section-label">
            <span className="ncl-section-badge a">Section A</span>
            <h2 id="section-a-heading" className="ncl-section-title">Technical Guide</h2>
          </div>

          {/* ADSTERRA NATIVE BANNER — TOP */}
          <AdZone label="[ Ad Zone — Top Banner ]" comment="ADSTERRA NATIVE BANNER TOP" />

          {/* Steps — first half */}
          <div className="ncl-instructions-card">
            <ol className="ncl-step-list" aria-label="Step-by-step instructions (part 1)">
              {stepsTop.map((step, i) => (
                <li key={i} className="ncl-step">
                  <span className="ncl-step-num" aria-hidden>{i + 1}</span>
                  <span className="ncl-step-text">{step.replace(/^Step\s+\d+:\s*/i, "")}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* ADSTERRA NATIVE BANNER — MID STEPS (shown between step halves) */}
          <AdZone label="[ Ad Zone — Mid-Steps Banner ]" comment="ADSTERRA NATIVE BANNER MID STEPS" />

          {/* Steps — second half */}
          {stepsBottom.length > 0 && (
            <div className="ncl-instructions-card">
              <ol className="ncl-step-list" aria-label="Step-by-step instructions (part 2)" start={midpoint + 1}>
                {stepsBottom.map((step, i) => (
                  <li key={i} className="ncl-step">
                    <span className="ncl-step-num" aria-hidden>{midpoint + i + 1}</span>
                    <span className="ncl-step-text">{step.replace(/^Step\s+\d+:\s*/i, "")}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* ADSTERRA NATIVE BANNER — MIDDLE (after all steps) */}
          <AdZone label="[ Ad Zone — Middle Banner ]" comment="ADSTERRA NATIVE BANNER MIDDLE" />
        </section>

        {/* ════════════════════════════════════════════════════════
            SECTION B — Free Sample
        ════════════════════════════════════════════════════════ */}
        <section aria-labelledby="section-b-heading">
          <div className="ncl-section-label">
            <span className="ncl-section-badge b">Section B</span>
            <h2 id="section-b-heading" className="ncl-section-title">Free Sample</h2>
          </div>
          <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.65, marginBottom: "14px" }}>
            Fully usable sample — copy and use immediately, no account required.
          </p>

          <div className="ncl-code-block">
            <div className="ncl-code-chrome">
              <div className="ncl-chrome-dots" aria-hidden>
                <div className="ncl-chrome-dot" style={{ background: "#FF5F57" }} />
                <div className="ncl-chrome-dot" style={{ background: "#FFBD2E" }} />
                <div className="ncl-chrome-dot" style={{ background: "#28C840" }} />
              </div>
              <span className="ncl-lang-tag">{sampleLang}</span>
              <CopyButton code={tool.sampleCode} />
            </div>
            <div className="ncl-code-body">
              <pre>{tool.sampleCode}</pre>
            </div>
          </div>
        </section>

        <hr className="ncl-divider" />

        {/* ════════════════════════════════════════════════════════
            SECTION C — Premium Download
        ════════════════════════════════════════════════════════ */}
        <section aria-labelledby="section-c-heading">
          <div className="ncl-section-label">
            <span className="ncl-section-badge c">Section C</span>
            <h2 id="section-c-heading" className="ncl-section-title">Premium Full Release</h2>
          </div>

          <div className="ncl-premium-card">
            <div className="ncl-premium-bar" aria-hidden />
            <div className="ncl-premium-body">
              <div className="ncl-premium-head">
                <div className="ncl-premium-icon" aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <div>
                  <p className="ncl-premium-eyebrow">Full Version</p>
                  <h3 className="ncl-premium-title">{tool.title}</h3>
                </div>
              </div>

              <p className="ncl-premium-desc">
                {isPrompt
                  ? "Unlock the complete prompt matrix — all variations, edge cases, platform adaptations, and extended examples in one download."
                  : "Get the full production-ready script with advanced features, error handling, config file, and complete step-by-step deployment documentation."}
              </p>

              <div className="ncl-premium-features" aria-label="What's included">
                {features.map((feat) => (
                  <div key={feat} className="ncl-premium-feat">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {feat}
                  </div>
                ))}
              </div>

              <a
                href={tool.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ncl-download-btn"
                aria-label={`${tool.downloadLabel} — opens external link`}
              >
                {tool.downloadLabel}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
              <p className="ncl-download-hint">Redirects via secure link · Free via ShrinkMe</p>
            </div>
          </div>
        </section>

        {/* ADSTERRA NATIVE BANNER — BOTTOM */}
        <AdZone label="[ Ad Zone — Bottom Banner ]" comment="ADSTERRA NATIVE BANNER BOTTOM" />

      </main>

      <footer className="ncl-footer">
        <p>Nerochaze Creative Labs — AI Prompts & Automation Scripts</p>
      </footer>

    </div>
  );
}
