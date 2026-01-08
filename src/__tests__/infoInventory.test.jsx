import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { InfoCardsSection } from "../sections/InfoCards.jsx";
import { InventorySection } from "../sections/Inventory.jsx";
import { infoCards } from "../data/infoCards.jsx";
import { checklistItems } from "../data/checklist.jsx";

describe("InfoCardsSection", () => {
  it("rendert alle Infokarten aus den Daten", () => {
    render(<InfoCardsSection />);
    const cards = screen.getAllByRole("heading", { level: 3 });
    expect(cards).toHaveLength(infoCards.length);
  });
});

describe("InventorySection", () => {
  it("zeigt Fortschritt an und aktualisiert beim Abhaken", async () => {
    const user = userEvent.setup();
    render(<InventorySection />);

    const progressLabel = screen.getByText(/abgehakt/i);
    const progressInline = progressLabel.parentElement;
    const checkboxes = screen.getAllByRole("checkbox");
    const totalItems = checklistItems.length;

    expect(progressInline?.querySelector("strong")?.textContent).toBe("0");
    expect(progressLabel.textContent).toMatch(new RegExp(`${totalItems} abgehakt`));

    await user.click(checkboxes[0]);

    expect(progressInline?.querySelector("strong")?.textContent).toBe("1");
  });
});
