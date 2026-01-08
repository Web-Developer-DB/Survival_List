export function FloatingActions() {
  return (
    <div className="floating" aria-label="Schnellaktionen">
      <button
        type="button"
        className="btn"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ⬆️ Nach oben
      </button>
      <button type="button" className="btn" onClick={() => window.print()}>
        🖨️ Drucken
      </button>
    </div>
  );
}
