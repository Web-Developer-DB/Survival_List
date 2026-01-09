import { useState } from "react";
import { checklistItems } from "../data/checklist.jsx";
import { inventoryRows } from "../data/inventory.js";

export function InventorySection() {
  const [checked, setChecked] = useState(() => new Set());
  const totalItems = checklistItems.length;
  const completedItems = checked.size;
  const progressPercent = totalItems
    ? Math.round((completedItems / totalItems) * 100)
    : 0;

  const toggleItem = (itemId) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(itemId)) {
        next.delete(itemId);
      } else {
        next.add(itemId);
      }
      return next;
    });
  };

  return (
    <section id="liste" className="card section-gap">
      <div className="section-head">
        <div>
          <h2>Vorratsliste (10 Tage · 1 Person)</h2>
          <p className="muted">
            Hake Positionen ab, während du durch den Discounter gehst. Mengen
            sind Richtwerte – passe sie deinem Haushalt an.
          </p>
        </div>
        <div className="progress-card">
          <span className="progress-title">Fortschritt</span>
          <div className="progress-inline">
            <strong>{completedItems}</strong>
            <span className="muted">/ {totalItems} abgehakt</span>
          </div>
          <div
            className="progress-track compact"
            role="progressbar"
            aria-valuenow={progressPercent}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <span
              className="progress-bar"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      <div className="checklist checklist-spacing">
        {checklistItems.map((item) => (
          <label className="checkitem" key={item.id} htmlFor={`item-${item.id}`}>
            <input
              id={`item-${item.id}`}
              type="checkbox"
              checked={checked.has(item.id)}
              onChange={() => toggleItem(item.id)}
            />
            <span>{item.content}</span>
          </label>
        ))}
      </div>

      <div className="table-container">
        <table className="table" aria-label="Ausführliche Vorratsliste">
          <thead>
            <tr>
              <th>Kategorie</th>
              <th>Produkt</th>
              <th>Menge</th>
              <th>Hinweise</th>
            </tr>
          </thead>
          <tbody>
            {inventoryRows.map((row, index) => (
              <tr key={`${row.category}-${row.product}-${index}`}>
                <td data-label="Kategorie">{row.category}</td>
                <td data-label="Produkt">{row.product}</td>
                <td data-label="Menge">{row.amount}</td>
                <td data-label="Hinweise">{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="small">
        Kalorien grob summiert: ~20.000–22.000 kcal → ausreichend für 2.000
        kcal/Tag × 10 Tage.
      </p>
    </section>
  );
}
