import { useState } from "react";
import { recipeGroups } from "../data/recipes.js";

export function RecipesSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section id="rezepte" className="card section-gap">
      <h2>Rezepte (einfach &amp; brennstoffsparend)</h2>
      <p className="muted">
        Alle Rezepte basieren auf den obigen Vorräten. Mengen für 1 Person;
        skaliere nach Bedarf.
      </p>

      <div className="recipe-grid">
        {recipeGroups.map((group, index) => (
          <details key={group.title} open={openIndex === index}>
            <summary
              onClick={(event) => {
                event.preventDefault();
                handleToggle(index);
              }}
            >
              <span className="chev">▸</span> {group.title}
            </summary>
            <div className="grid">
              {group.items.map((item) => (
                <div className="card" key={item.name}>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  {item.hint && <p><em>{item.hint}</em></p>}
                </div>
              ))}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
