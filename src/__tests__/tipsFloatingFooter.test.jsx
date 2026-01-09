import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { TipsSection } from "../sections/Tips.jsx";
import { FloatingActions } from "../components/FloatingActions.jsx";
import { Footer } from "../components/Footer.jsx";
import { survivalTips } from "../data/tips.js";

describe("TipsSection", () => {
  it("listet alle Tipps und enthält Wasserhinweis", () => {
    render(<TipsSection />);
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(survivalTips.length);
    expect(
      screen.getByText(/Leitungswasser jetzt abfüllen/i)
    ).toBeInTheDocument();
  });
});

describe("FloatingActions", () => {
  it("ruft Scroll- und Druck-Handler auf", async () => {
    const user = userEvent.setup();
    if (!window.scrollTo) {
      // jsdom shim
      window.scrollTo = () => {};
    }
    if (!window.print) {
      window.print = () => {};
    }

    const scrollSpy = vi.spyOn(window, "scrollTo").mockImplementation(() => {});
    const printSpy = vi.spyOn(window, "print").mockImplementation(() => {});

    render(<FloatingActions />);
    await user.click(screen.getByRole("button", { name: /Nach oben/i }));
    await user.click(screen.getByRole("button", { name: /Drucken/i }));

    expect(scrollSpy).toHaveBeenCalled();
    expect(printSpy).toHaveBeenCalled();

    scrollSpy.mockRestore();
    printSpy.mockRestore();
  });
});

describe("Footer", () => {
  it("zeigt das aktuelle Jahr an", () => {
    render(<Footer />);
    const year = String(new Date().getFullYear());
    expect(screen.getByText(year)).toBeInTheDocument();
  });
});
