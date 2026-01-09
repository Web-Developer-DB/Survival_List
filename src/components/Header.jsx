import { useEffect, useState } from "react";

const getInitialTheme = () => {
  if (typeof window === "undefined") return "light";
  const saved = window.localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") return saved;
  if (typeof window.matchMedia === "function") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return "light";
};

export function Header() {
  const [theme, setTheme] = useState(getInitialTheme);
  const [installPrompt, setInstallPrompt] = useState(null);
  const [canInstall, setCanInstall] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setInstallPrompt(event);
      setCanInstall(true);
    };

    const handleAppInstalled = () => {
      setInstallPrompt(null);
      setCanInstall(false);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const handleInstall = async () => {
    if (!installPrompt) return;
    installPrompt.prompt();
    try {
      await installPrompt.userChoice;
    } catch (error) {
      console.error("Installation prompt failed:", error);
    } finally {
      setInstallPrompt(null);
      setCanInstall(false);
    }
  };

  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <header className="site-header">
      <a className="skip-link" href="#content">
        Zum Inhalt springen
      </a>
      <div className="brand wrap">
        <div className="brand-mark">
          <div className="logo" aria-hidden="true" />
          <div>
            <p className="eyebrow">Urban Survival · 10 Tage</p>
            <h1>Notfall-Vorräte &amp; Rezepte</h1>
          </div>
        </div>
        <nav className="nav">
          <a className="nav-link" href="#info">
            Überblick
          </a>
          <a className="nav-link" href="#liste">
            Vorräte
          </a>
          <a className="nav-link" href="#rezepte">
            Rezepte
          </a>
          <a className="nav-link" href="#plan">
            Plan
          </a>
          <a className="nav-link" href="#tipps">
            Tipps
          </a>
          <button
            type="button"
            className="btn tiny"
            onClick={() => window.print()}
          >
            PDF / Druck
          </button>
          {canInstall && (
            <button type="button" className="btn tiny" onClick={handleInstall}>
              App installieren
            </button>
          )}
          <button
            type="button"
            className="btn tiny ghost"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Hell aktivieren" : "Dunkel aktivieren"}
          >
            {theme === "dark" ? "☀️ Hell" : "🌙 Dunkel"}
          </button>
        </nav>
      </div>
    </header>
  );
}
