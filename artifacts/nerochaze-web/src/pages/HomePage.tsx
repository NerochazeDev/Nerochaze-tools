import { useState, useMemo } from "react";
import { TOOLS, ALL_TAGS, type Tool } from "../data";

const CPU_ICON = (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" />
    <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
  </svg>
);
const TERMINAL_ICON = (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" />
  </svg>
);
const SEARCH_ICON = (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
  </svg>
);

function cardIcon(type: Tool["type"]) {
  if (type === "prompt") return CPU_ICON;
  return TERMINAL_ICON;
}

function ContentCard({ tool, onClick }: { tool: Tool; onClick: () => void }) {
  return (
    <button className="ncl-card" onClick={onClick} aria-label={`View ${tool.title}`}>
      <div className="ncl-card-header">
        <div className={`ncl-card-icon ${tool.type}`}>{cardIcon(tool.type)}</div>
        <span className={`ncl-type-badge ${tool.type}`}>
          {tool.type === "prompt" ? "Prompt Matrix" : "Bot Script"}
        </span>
        <span className="ncl-arrow">→</span>
      </div>
      <div className="ncl-card-title">{tool.title}</div>
      <div className="ncl-card-desc">{tool.description}</div>
      <div className="ncl-tag-row">
        {tool.tags.slice(0, 4).map((tag) => (
          <span key={tag} className="ncl-tag">{tag}</span>
        ))}
      </div>
    </button>
  );
}

export default function HomePage({ onSelectTool }: { onSelectTool: (id: string) => void }) {
  const [search, setSearch] = useState("");
  const [activeType, setActiveType] = useState<"all" | "prompt" | "script">("all");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let items = TOOLS;
    if (activeType !== "all") items = items.filter((t) => t.type === activeType);
    if (activeTag) items = items.filter((t) => t.tags.includes(activeTag));
    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.tags.some((tag) => tag.toLowerCase().includes(q)) ||
          t.category.toLowerCase().includes(q)
      );
    }
    return items;
  }, [search, activeType, activeTag]);

  const prompts = filtered.filter((t) => t.type === "prompt");
  const scripts = filtered.filter((t) => t.type === "script");
  const totalPrompts = TOOLS.filter((t) => t.type === "prompt").length;
  const totalScripts = TOOLS.filter((t) => t.type === "script").length;

  return (
    <div className="ncl-page">
      {/* ── Sticky header ── */}
      <header className="ncl-header">
        <div className="ncl-container">
          <div className="ncl-header-inner">
            <a href="#/" className="ncl-brand" aria-label="Nerochaze Creative Labs home">
              <div className="ncl-brand-icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" />
                  <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
                </svg>
              </div>
              <div>
                <div className="ncl-brand-name">Nerochaze Creative Labs</div>
                <div className="ncl-brand-sub">AI Prompts & Automation Scripts</div>
              </div>
            </a>

            <div className="ncl-search-wrap">
              <span className="ncl-search-icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:15,height:15,display:'block'}}>
                  <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                </svg>
              </span>
              <input
                type="search"
                className="ncl-search"
                placeholder="Search prompts, scripts, tags..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search content"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="ncl-container">
        {/* Stats bar */}
        <div className="ncl-stats-bar" role="region" aria-label="Content statistics">
          <div className="ncl-stat">
            <div className="ncl-stat-val">{totalPrompts}</div>
            <div className="ncl-stat-label">Prompt Matrices</div>
          </div>
          <div className="ncl-stat">
            <div className="ncl-stat-val">{totalScripts}</div>
            <div className="ncl-stat-label">Bot Scripts</div>
          </div>
          <div className="ncl-stat">
            <div className="ncl-stat-val">{TOOLS.length}</div>
            <div className="ncl-stat-label">Total Releases</div>
          </div>
        </div>

        {/* Type filters */}
        <div className="ncl-filters" role="group" aria-label="Filter by type">
          {(["all", "prompt", "script"] as const).map((f) => (
            <button
              key={f}
              className={`ncl-filter-btn${activeType === f ? " active" : ""}`}
              onClick={() => setActiveType(f)}
              aria-pressed={activeType === f}
            >
              {f === "all" ? "All" : f === "prompt" ? "Prompt Matrices" : "Bot Scripts"}
            </button>
          ))}

          <div className="ncl-filter-divider" aria-hidden />

          {/* Tag filters */}
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              className={`ncl-filter-btn${activeTag === tag ? " active" : ""}`}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              aria-pressed={activeTag === tag}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* ── AI Prompt Matrices ── */}
        {prompts.length > 0 && (
          <>
            <div className="ncl-section-head">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8C52FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" />
                <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
              </svg>
              <h2>AI Prompt Matrices</h2>
              <span className="ncl-count-badge">{prompts.length}</span>
            </div>
            <div className="ncl-grid">
              {prompts.map((tool) => (
                <ContentCard key={tool.id} tool={tool} onClick={() => onSelectTool(tool.id)} />
              ))}
            </div>
          </>
        )}

        {/* ── Automation Bot Scripts ── */}
        {scripts.length > 0 && (
          <>
            <div className="ncl-section-head">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00C2A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" />
              </svg>
              <h2>Automation Bot Scripts</h2>
              <span className="ncl-count-badge">{scripts.length}</span>
            </div>
            <div className="ncl-grid">
              {scripts.map((tool) => (
                <ContentCard key={tool.id} tool={tool} onClick={() => onSelectTool(tool.id)} />
              ))}
            </div>
          </>
        )}

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="ncl-empty">
            <div style={{ fontSize: "2.5rem", marginBottom: "12px" }}>🔍</div>
            <h3>No results found</h3>
            <p>Try a different search term or clear the active filters</p>
          </div>
        )}
      </main>

      <footer className="ncl-footer">
        <div className="ncl-container">
          <p>Nerochaze Creative Labs © 2024 — AI Prompts & Automation Scripts</p>
        </div>
      </footer>
    </div>
  );
}
