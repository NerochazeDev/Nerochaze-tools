import { useState, useEffect } from "react";
import { TOOLS } from "./data";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";

type View = { type: "home" } | { type: "detail"; id: string };

function parseHash(): View {
  const hash = window.location.hash;
  const match = hash.match(/^#\/tool\/(.+)$/);
  if (match) return { type: "detail", id: match[1] };
  return { type: "home" };
}

/* ─────────────────────────────────────────────────────────────
   ADSTERRA SOCIAL BAR
   Replace the contents of this component with your Adsterra
   Social Bar script tag once you have your placement code.
   The Social Bar floats at the bottom of every page.
───────────────────────────────────────────────────────────── */
function SocialBar() {
  return (
    <div
      className="ncl-social-bar"
      aria-label="Advertisement"
      role="complementary"
    >
      {/* ADSTERRA SOCIAL BAR — paste your script tag here */}
      <span className="ncl-social-bar-label">[ Adsterra Social Bar ]</span>
    </div>
  );
}

export default function App() {
  const [view, setView] = useState<View>(parseHash);

  useEffect(() => {
    const onHashChange = () => setView(parseHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const navigateTo = (id: string) => {
    window.location.hash = `/tool/${id}`;
  };

  const navigateHome = () => {
    window.location.hash = "/";
  };

  if (view.type === "detail") {
    const tool = TOOLS.find((t) => t.id === view.id);
    if (!tool) {
      navigateHome();
      return null;
    }
    return (
      <>
        <DetailPage tool={tool} onBack={navigateHome} />
        <SocialBar />
      </>
    );
  }

  return (
    <>
      <HomePage onSelectTool={navigateTo} />
      <SocialBar />
    </>
  );
}
