import { useMemo, useState } from "react";
import { recipeGroups } from "../data/recipes.js";

export function RecipesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeGroup = useMemo(
    () => recipeGroups[activeIndex] ?? recipeGroups[0],
    [activeIndex]
  );

  return (
    <section id="rezepte" className="card section-gap">
      <div className="section-head">
        <div>
          <h2>Rezepte (einfach &amp; brennstoffsparend)</h2>
          <p className="muted">
            Alle Rezepte basieren auf den obigen Vorräten. Mengen für 1 Person;
            skaliere nach Bedarf. Wenig Schritte, wenig Brennstoff.
          </p>
        </div>
        <div className="pill soft">⚡ 10-Min-Einstieg</div>
      </div>

      <div className="recipes-shell">
        <div className="recipe-nav" role="tablist" aria-label="Rezeptkategorien">
          {recipeGroups.map((group, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={group.title}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`recipe-tab ${isActive ? "is-active" : ""}`}
                onClick={() => setActiveIndex(index)}
              >
                <span className="chev">▸</span>
                <div className="recipe-tab-text">
                  <strong>{group.title}</strong>
                  <span className="muted">{group.items.length} Rezepte</span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="recipe-panel" role="tabpanel">
          <div className="recipe-panel-head">
            <div>
              <p className="eyebrow">Aktiv</p>
              <h3>{activeGroup.title}</h3>
            </div>
            <div className="pill subtle">
              🔥 Brennstoff-Sparmodus · Deckel &amp; Ziehzeit
            </div>
          </div>
          <div className="grid recipe-cards">
            {activeGroup.items.map((item) => (
              <div className="recipe-card" key={item.name}>
                <div className="recipe-card-head">
                  <h4>{item.name}</h4>
                </div>
                <p>{item.description}</p>
                {item.hint && (
                  <p className="muted recipe-hint">
                    <em>{item.hint}</em>
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
