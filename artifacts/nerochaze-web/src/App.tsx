import { useState, useEffect } from "react";
import { TOOLS } from "./data";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";

type View = { type: "home" } | { type: "detail"; id: string };

function parseHash(): View {
  const hash  = window.location.hash;
  const match = hash.match(/^#\/tool\/(.+)$/);
  if (match) return { type: "detail", id: match[1] };
  return { type: "home" };
}

export default function App() {
  const [view, setView] = useState<View>(parseHash);

  useEffect(() => {
    const onChange = () => setView(parseHash());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  const navigateTo   = (id: string) => { window.location.hash = `/tool/${id}`; };
  const navigateHome = ()           => { window.location.hash = "/"; };

  if (view.type === "detail") {
    const tool = TOOLS.find((t) => t.id === view.id);
    if (!tool) { navigateHome(); return null; }
    return <DetailPage tool={tool} onBack={navigateHome} />;
  }

  return <HomePage onSelectTool={navigateTo} />;
}
