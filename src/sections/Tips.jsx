import { survivalTips } from "../data/tips.js";

export function TipsSection() {
  return (
    <section id="tipps" className="card section-gap">
      <div className="section-head">
        <div>
          <h2>Kochen &amp; Wasser: Spartipps</h2>
        </div>
      </div>
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
