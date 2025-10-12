import { mealPlan } from "../data/mealPlan.js";

export function MealPlanSection() {
  return (
    <section id="plan" className="card section-gap">
      <h2>Wochenplan (x8 für 2 Monate)</h2>
      <p className="muted">
        Sieben Tage rotierend. Mit Gewürzen variieren, Konserven durchtauschen.
      </p>

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
