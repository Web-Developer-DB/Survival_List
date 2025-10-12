import { useState } from "react";
import { checklistItems } from "../data/checklist.jsx";
import { inventoryRows } from "../data/inventory.js";

export function InventorySection() {
  const [checked, setChecked] = useState(() => new Set());

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
      <h2>Vorratsliste (2 Monate · 1 Person)</h2>
      <p className="muted">
        Hake Positionen ab, während du durch den Discounter gehst. Mengen sind
        Richtwerte – passe sie deinem Haushalt an.
      </p>

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
        Kalorien grob summiert: 225.000–240.000 kcal → ausreichend für 2.000
        kcal/Tag × 60 Tage.
      </p>
    </section>
  );
}
