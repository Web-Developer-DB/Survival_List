import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RecipesSection } from "../sections/Recipes.jsx";
import { MealPlanSection } from "../sections/MealPlan.jsx";
import { recipeGroups } from "../data/recipes.js";
import { mealPlan } from "../data/mealPlan.js";

describe("RecipesSection", () => {
  it("zeigt Tabs für Kategorien und wechselt den aktiven Inhalt", async () => {
    const user = userEvent.setup();
    render(<RecipesSection />);

    const tabs = screen.getAllByRole("tab");
    expect(tabs).toHaveLength(recipeGroups.length);
    expect(tabs[0]).toHaveAttribute("aria-selected", "true");
    expect(
      screen.getByRole("heading", { level: 3, name: recipeGroups[0].title })
    ).toBeInTheDocument();

    await user.click(tabs[1]);

    expect(tabs[1]).toHaveAttribute("aria-selected", "true");
    expect(
      screen.getByRole("heading", { level: 3, name: recipeGroups[1].title })
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("heading", { level: 4 }).length
    ).toBe(recipeGroups[1].items.length);
  });
});

describe("MealPlanSection", () => {
  it("zeigt alle 10 Tage des Plans", () => {
    render(<MealPlanSection />);
    const headings = screen.getAllByRole("heading", { level: 3 });
    expect(headings).toHaveLength(mealPlan.length);
    expect(
      screen.getByText(/Kartoffelpüree \+ Fischkonserve/i)
    ).toBeInTheDocument();
  });
});
