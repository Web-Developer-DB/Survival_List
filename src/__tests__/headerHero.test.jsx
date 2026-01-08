import { render, screen } from "@testing-library/react";
import { Header } from "../components/Header.jsx";
import { HeroSection } from "../sections/Hero.jsx";

describe("Header", () => {
  it("zeigt Marke, Skip-Link und Anker-Navigation", () => {
    render(<Header />);
    expect(
      screen.getByRole("heading", { name: /Notfall-Vorräte & Rezepte/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Zum Inhalt springen/i })
    ).toHaveAttribute("href", "#content");
    expect(screen.getByRole("link", { name: /Überblick/i })).toHaveAttribute(
      "href",
      "#info"
    );
    expect(screen.getByRole("link", { name: /Vorräte/i })).toHaveAttribute(
      "href",
      "#liste"
    );
  });
});

describe("HeroSection", () => {
  it("kommuniziert den 10-Tage-Fokus und bietet direkte Aktionen", () => {
    render(<HeroSection />);
    expect(screen.getByText(/10 Tage Autarkie/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Als PDF speichern/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Zur Vorratsliste/i })
    ).toHaveAttribute("href", "#liste");
  });
});
