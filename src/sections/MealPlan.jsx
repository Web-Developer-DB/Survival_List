import { mealPlan } from "../data/mealPlan.js";

export function MealPlanSection() {
  return (
    <section id="plan" className="card section-gap">
      <div className="section-head">
        <div>
          <h2>10-Tage-Plan (1 Person)</h2>
          <p className="muted">Rezepte lassen sich tauschen oder wiederholen.</p>
        </div>
      </div>

      <div className="grid grid-2">
        {mealPlan.map((day) => (
          <div className="card" key={day.day}>
            <h3>{day.day}</h3>
            <ul>
              {day.meals.map((meal) => (
                <li key={meal.label}>
                  <strong>{meal.label}:</strong> {meal.text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
