const links = [
  { id: "liste", label: "🛒 Zur Vorratsliste" },
  { id: "rezepte", label: "🍲 Zu den Rezepten" },
  { id: "plan", label: "📅 Zum Wochenplan" }
];

export function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-copy">
          <span className="kicker">Deutschland · Urban Survival</span>
          <h2 className="title">
            Alles, was du für <strong>10 Tage Autarkie</strong> brauchst – klar
            und druckbar.
          </h2>
          <p className="subtitle">
            Orientiert an den BBK-/DGE-Empfehlungen für Deutschland. Discounter
            Einkaufsliste, einfache Rezepte und ein 10-Tage-Plan – mobil
            optimiert und bereit für den PDF-Druck.
          </p>
          <div className="hero-actions">
            <button className="btn primary" onClick={() => window.print()}>
              🖨️ Als PDF speichern
            </button>
            {links.map((link) => (
              <a
                key={link.id}
                className="btn ghost"
                href={`#${link.id}`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="hero-meta">
            <div className="pill glow">🕒 15 Min Setup</div>
            <div className="pill glow">🥫 10-Tage-Plan</div>
            <div className="pill subtle">🇩🇪 Druck- &amp; Offline-tauglich</div>
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
              Kompakte Boards für Einkauf, Rezepte und Ablauf –{" "}
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
