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
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-copy">
          <span className="kicker">Deutschland · Urban Survival</span>
          <h2 className="title">
            Alles, was du für <strong>60 Tage Autarkie</strong> brauchst – als
            klare, druckbare Übersicht.
          </h2>
          <p className="subtitle">
            Moderne Checkliste, Rezept-Sets und Wochenplan für 1 Person. Von
            Discounter-Vorräten bis Brennstofftipps – mobil optimiert und ready
            für den PDF-Druck.
          </p>
          <div className="hero-actions">
            <button className="btn primary" onClick={() => window.print()}>
              🖨️ Als PDF speichern
            </button>
            {links.map((link) => (
              <button
                key={link.id}
                className="btn ghost"
                type="button"
                onClick={() => handleScroll(link.id)}
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="hero-meta">
            <div className="pill glow">🕒 15 Min Setup</div>
            <div className="pill glow">🥫 120+ Vorrats-Teile</div>
            <div className="pill subtle">📦 Druck- &amp; Offline-tauglich</div>
          </div>
        </div>

        <div className="hero-panel">
          <div className="panel-shell">
            <div className="panel-top">
              <span className="pill soft">Status</span>
              <span className="live-dot">
                <span className="live-pulse" />
                Bereit
              </span>
            </div>
            <p>
              Kompakte Survival-Boards für Einkauf, Rezepte und Ablauf –{" "}
              <em>ohne App-Lärm</em>, dafür mit klaren Schritten.
            </p>
            <div className="progress">
              <span className="progress-label">Abgedeckte Kalorien</span>
              <div className="progress-track">
                <span className="progress-bar" style={{ width: "86%" }} />
              </div>
            </div>
            <div className="tag-row">
              <span className="tag">Wasser &amp; Energie</span>
              <span className="tag">One-Pot Rezepte</span>
              <span className="tag">Druckfreundlich</span>
            </div>
          </div>
          <div className="orbit" aria-hidden="true">
            <span className="orb orb-1" />
            <span className="orb orb-2" />
            <span className="orb orb-3" />
          </div>
        </div>
      </div>
    </section>
  );
}
