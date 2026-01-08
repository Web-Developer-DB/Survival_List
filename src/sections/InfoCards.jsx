import { infoCards } from "../data/infoCards.jsx";

export function InfoCardsSection() {
  return (
    <section id="info" className="section-gap-sm section-block">
      <div className="section-head">
        <div>
          <h2>Überblick in 3 Punkten</h2>
          <p className="muted">
            Die wichtigsten Eckdaten als schnelle Orientierung.
          </p>
        </div>
      </div>
      <div className="grid grid-3">
        {infoCards.map((card) => (
          <div className="card" key={card.title}>
            <h3>{card.title}</h3>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
