import { survivalTips } from "../data/tips.js";

export function TipsSection() {
  return (
    <section className="card section-gap">
      <h2>Kochen &amp; Wasser: Spartipps</h2>
      <ul>
        {survivalTips.map((tip) => (
          <li key={tip.title}>
            <strong>{tip.title}:</strong> {tip.text}
          </li>
        ))}
      </ul>
    </section>
  );
}
