import { infoCards } from "../data/infoCards.jsx";

export function InfoCardsSection() {
  return (
    <section className="grid grid-3 section-gap-sm">
      {infoCards.map((card) => (
        <div className="card" key={card.title}>
          <h3>{card.title}</h3>
          <p>{card.content}</p>
        </div>
      ))}
    </section>
  );
}
