import { useState, useMemo } from "react";
import { TOOLS, ALL_TAGS, type Tool } from "../data";

/* ── Icons ─────────────────────────────────────────────────── */
function IconCPU({ size = 16, stroke = "currentColor" }: { size?: number; stroke?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
    </svg>
  );
}
function IconSearch() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
    </svg>
  );
}

/* ── Logo mark ──────────────────────────────────────────────── */
function LogoMark({ size = 34 }: { size?: number }) {
  return (
    <svg className="ncl-logomark" width={size} height={size} viewBox="0 0 34 34" fill="none">
      <defs>
        <linearGradient id="ncl-logo-grad" x1="0" y1="0" x2="34" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#B57BFF" />
          <stop offset="50%"  stopColor="#8C52FF" />
          <stop offset="100%" stopColor="#5B1FCC" />
        </linearGradient>
        <linearGradient id="ncl-logo-n" x1="10" y1="9" x2="24" y2="25" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="rgba(255,255,255,0.98)" />
          <stop offset="100%" stopColor="rgba(220,195,255,0.85)" />
        </linearGradient>
      </defs>
      <rect width="34" height="34" rx="9.5" fill="url(#ncl-logo-grad)" />
      <rect width="34" height="17" rx="9.5" fill="url(#ncl-logo-grad)" opacity="0.3" />
      <path
        d="M10 25V9L24 25V9"
        stroke="url(#ncl-logo-n)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── Content card ───────────────────────────────────────────── */
function ContentCard({ tool, onClick }: { tool: Tool; onClick: () => void }) {
  const [showTags, setShowTags] = useState(false);

  return (
    <button className="ncl-card" onClick={onClick} aria-label={`View ${tool.title}`}>
      <div className="ncl-card-header">
        <div className="ncl-card-icon prompt" aria-hidden>
          <IconCPU />
        </div>
        <span className="ncl-type-badge prompt">Prompt Matrix</span>
        <span className="ncl-card-arrow" aria-hidden>→</span>
      </div>
      <div className="ncl-card-title">{tool.title}</div>
      <div className="ncl-card-desc">{tool.description}</div>
      <div className="ncl-tag-row">
        <button
          className="ncl-tag-toggle-chip"
          onClick={(e) => { e.stopPropagation(); setShowTags((v) => !v); }}
          aria-label={showTags ? "Hide hashtags" : "Show hashtags"}
          aria-expanded={showTags}
        >
          <span>#</span>
          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ transition: "transform 0.2s", transform: showTags ? "rotate(180deg)" : "rotate(0deg)" }}>
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
        {showTags && tool.tags.slice(0, 4).map((tag) => (
          <span key={tag} className="ncl-tag">{tag}</span>
        ))}
      </div>
    </button>
  );
}

/* ── HomePage ───────────────────────────────────────────────── */
export default function HomePage({ onSelectTool }: { onSelectTool: (id: string) => void }) {
  const [search, setSearch]               = useState("");
  const [activeTag, setActiveTag]         = useState<string | null>(null);
  const [showTagFilters, setShowTagFilters] = useState(false);

  const filtered = useMemo(() => {
    let items = TOOLS;
    if (activeTag) items = items.filter((t) => t.tags.includes(activeTag));
    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.tags.some((tag) => tag.toLowerCase().includes(q)) ||
          t.category.toLowerCase().includes(q),
      );
    }
    return items;
  }, [search, activeTag]);

  const totalPrompts = TOOLS.length;

  return (
    <div className="ncl-page">

      {/* ══════════════════════════════════════
          STICKY HEADER
      ══════════════════════════════════════ */}
      <header className="ncl-header">
        <div className="ncl-container">
          <div className="ncl-header-inner">
            <a href="#/" className="ncl-brand" aria-label="Nerochaze Creative Labs home">
              <LogoMark size={34} />
              <div className="ncl-brand-text">
                <span className="ncl-brand-name">NEROCHAZE</span>
                <div className="ncl-brand-sub-row">
                  <span className="ncl-brand-dot" aria-hidden />
                  <span className="ncl-brand-sub">Creative Labs</span>
                </div>
              </div>
            </a>

            <div className="ncl-search-wrap">
              <span className="ncl-search-icon" aria-hidden><IconSearch /></span>
              <input
                type="search"
                className="ncl-search"
                placeholder="Search prompts, tags..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search content"
              />
            </div>
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════
          HERO — premium brand statement
      ══════════════════════════════════════ */}
      <section className="ncl-hero" aria-label="Nerochaze Creative Labs">
        <div className="ncl-container">
          <div className="ncl-hero-inner">

            <div className="ncl-hero-badge" aria-hidden>
              <span className="ncl-hero-badge-dot" />
              AI Tools Platform
            </div>

            <div className="ncl-wordmark-wrap">
              <span className="ncl-wordmark-main" aria-label="NEROCHAZE">NEROCHAZE</span>
              <div className="ncl-wordmark-sub-wrap">
                <span className="ncl-wordmark-rule-left" aria-hidden />
                <span className="ncl-wordmark-sub">Creative&nbsp;Labs</span>
                <span className="ncl-wordmark-rule-right" aria-hidden />
              </div>
            </div>

            <hr className="ncl-hero-rule" aria-hidden />

            <p className="ncl-hero-tagline">
              <strong>Premium AI Prompt Matrices</strong> for builders,
              creators, and operators.
            </p>

            <div className="ncl-stat-pills" role="region" aria-label="Release counts">
              <div className="ncl-stat-pill">
                <div className="ncl-stat-pill-val">{totalPrompts}</div>
                <div className="ncl-stat-pill-label">Prompt Matrices</div>
              </div>
              <div className="ncl-stat-pill">
                <div className="ncl-stat-pill-val">{totalPrompts}</div>
                <div className="ncl-stat-pill-label">Total Releases</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="ncl-hero-fade" aria-hidden />

      {/* ══════════════════════════════════════
          CONTENT
      ══════════════════════════════════════ */}
      <main className="ncl-content">
        <div className="ncl-container">

          <div className="ncl-filters" role="group" aria-label="Filter content">
            {ALL_TAGS.length > 0 && (
              <>
                <button
                  className={`ncl-filter-btn ncl-hashtag-toggle${showTagFilters ? " active" : ""}`}
                  onClick={() => { setShowTagFilters((v) => !v); if (showTagFilters) setActiveTag(null); }}
                  aria-expanded={showTagFilters}
                  aria-label="Toggle hashtag filters"
                >
                  <span># Tags</span>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ transition: "transform 0.2s", transform: showTagFilters ? "rotate(180deg)" : "rotate(0deg)" }}>
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {showTagFilters && ALL_TAGS.map((tag) => (
                  <button
                    key={tag}
                    className={`ncl-filter-btn${activeTag === tag ? " active" : ""}`}
                    onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                    aria-pressed={activeTag === tag}
                  >
                    {tag}
                  </button>
                ))}
              </>
            )}
          </div>

          {filtered.length > 0 && (
            <>
              <div className="ncl-section-head">
                <span className="ncl-section-head-icon" aria-hidden>
                  <IconCPU size={15} stroke="#8C52FF" />
                </span>
                <h2>AI Prompt Matrices</h2>
                <span className="ncl-count-badge">{filtered.length}</span>
              </div>
              <div className="ncl-grid">
                {filtered.map((tool) => (
                  <ContentCard key={tool.id} tool={tool} onClick={() => onSelectTool(tool.id)} />
                ))}
              </div>
            </>
          )}

          {filtered.length === 0 && (
            <div className="ncl-empty">
              <div style={{ fontSize: "2.5rem", marginBottom: "14px" }}>🔍</div>
              <h3>No results found</h3>
              <p>Try a different search term or clear the active filters.</p>
            </div>
          )}
        </div>
      </main>

      <footer className="ncl-footer">
        <div className="ncl-container">
          <div className="ncl-footer-brand">
            <LogoMark size={20} />
            <span className="ncl-footer-name">NEROCHAZE</span>
            <span className="ncl-footer-sep" aria-hidden>·</span>
            <span className="ncl-footer-sub">Creative Labs</span>
          </div>
          <p>Premium AI Prompt Matrices</p>
        </div>
      </footer>
    </div>
  );
}
