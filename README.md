# Survival List

Interaktive React-Anwendung für eine 10-tägige Notfall-Vorratshaltung in Deutschland. Die Seite kombiniert Einkaufsliste, Rezepte, 10-Tage-Plan und praktische Spartipps in einem modernen, hellen Layout.

## Highlights
- Checklisten, Tabelle und Daten bleiben komplett offline nutzbar.
- Installierbar als PWA nach dem ersten Besuch; funktioniert danach auch ohne Netz.
- Druck- und Scroll-Shortcuts (`Drucken`, `Nach oben`) für mobiles Shopping.
- Rezepte als aufklappbare Kategorien mit Fokus auf Brennstoff- und Wassersparen.
- 10-Tage-Plan mit Mahlzeiten pro Person, beliebig skalierbar.
- Mobile-first Layout mit responsiven Tabellen, Details und Print-Stilen.

## Tech-Stack
- [Vite](https://vitejs.dev/) + [React 18](https://react.dev/)
- Styling über eine zentrale Datei `src/styles/global.css` im hellen Natur-Look.
- State-Management ausschließlich mit React Hooks (`useState`, `useCallback`).

## Schnellstart
```bash
npm install
npm run dev      # Entwicklungsserver (Standard: http://localhost:5173)
npm run build    # Produktions-Build in dist/
npm run preview  # Vorschau eines Production-Builds
npm run lint     # Optional: ESLint gegen src/
```

## Projektstruktur
```text
src/
├── App.jsx                 # Layout der Seite, orchestriert alle Sektionen
├── main.jsx                # React-Vite Einstiegspunkt
├── components/             # Wiederverwendbare UI-Elemente (Header, Footer, Buttons)
├── sections/               # Inhaltliche Blöcke (Hero, Vorräte, Rezepte, Plan, Tipps)
├── data/                   # Statische Daten für Checkliste, Tabelle, Rezepte, Plan, Tipps
└── styles/
    └── global.css          # Light/Dark-Theme, Responsive- und Print-Styles
```

## Inhalte & Datenquellen
- `data/checklist.jsx`: Kurze Einkaufsliste mit interaktiven Checkboxen.
- `data/inventory.js`: Ausführliche Vorratstabelle (Kategorie, Menge, Hinweise).
- `data/recipes.js`: Rezeptgruppen (Frühstück, Hauptgerichte, Abend).
- `data/mealPlan.js`: 10-Tage-Plan.
- `data/infoCards.jsx` & `data/tips.js`: Kontextkarten und Spartipps rund um Wasser, Brennstoff und Rotation.

## Bedienung & Offline-Nutzung
- PWA aktiv: Manifest + Service Worker, installierbar und offline nutzbar nach dem ersten Online-Ladevorgang.
- Wenn die Installation möglich ist, erscheint oben im Header ein Button „App installieren“.
- `🖨️ Drucken` in Hero und Floating Actions erzeugt eine optimierte PDF/Print-Version.
- Checkboxen werden im Browser-Speicher nicht persistiert; beim Reload beginnt die Liste leer.
- Die Anwendung nutzt keine Cookies und ruft keine externen APIs ab; Google Fonts werden beim ersten Besuch geladen und gecached.

## Weiterentwicklungsideen
1. Checkbox-Status im `localStorage` sichern, um Abhaken über Sitzungen zu behalten.
2. Schriftarten komplett mitliefern oder precachen, um den ersten Offline-Start zu beschleunigen.
3. Zusätzliche Tabellen (z. B. Wasser-/Energiebedarf pro Haushalt) oder Export als CSV/PDF.
