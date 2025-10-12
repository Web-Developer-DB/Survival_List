import { Header } from "./components/Header.jsx";
import { FloatingActions } from "./components/FloatingActions.jsx";
import { Footer } from "./components/Footer.jsx";
import { HeroSection } from "./sections/Hero.jsx";
import { InfoCardsSection } from "./sections/InfoCards.jsx";
import { InventorySection } from "./sections/Inventory.jsx";
import { RecipesSection } from "./sections/Recipes.jsx";
import { MealPlanSection } from "./sections/MealPlan.jsx";
import { TipsSection } from "./sections/Tips.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main className="wrap">
        <HeroSection />
        <InfoCardsSection />
        <InventorySection />
        <RecipesSection />
        <MealPlanSection />
        <TipsSection />
      </main>
      <FloatingActions />
      <Footer />
    </>
  );
}
