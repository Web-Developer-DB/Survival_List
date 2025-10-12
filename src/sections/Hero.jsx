import { useCallback } from "react";

const links = [
  { id: "liste", label: "🛒 Zur Vorratsliste" },
  { id: "rezepte", label: "🍲 Zu den Rezepten" },
  { id: "plan", label: "📅 Zum Wochenplan" }
];

export function HeroSection() {
  const handleScroll = useCallback((targetId) => {
    const target = document.getElementById(targetId);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <section className="hero">
      <div className="hero-inner">
        <span className="kicker">Deutschland · Urban Survival</span>
        <h2 className="title">
          Komplette Einkaufsliste, Rezepte &amp; Wochenplan
          <br />
          für <strong>2 Monate Autarkie</strong>
        </h2>
        <p className="subtitle">
          Mobile-first, druckfreundlich, Dracula-Theme. Mengenangaben pro
          Person. Discounter-tauglich (Aldi, Lidl, Penny, Netto).
        </p>
        <div className="hero-actions">
          <button className="btn primary" onClick={() => window.print()}>
            🖨️ Als PDF drucken
          </button>
          {links.map((link) => (
            <button
              key={link.id}
              className="btn"
              type="button"
              onClick={() => handleScroll(link.id)}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
