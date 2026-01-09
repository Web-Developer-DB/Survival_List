import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if ("serviceWorker" in navigator && import.meta.env.PROD) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        navigator.serviceWorker.ready.then((readyRegistration) => {
          const resources = new Set(
            performance
              .getEntriesByType("resource")
              .map((entry) => entry.name)
              .filter((url) => /^https?:\/\//.test(url))
          );

          resources.add(`${window.location.origin}${window.location.pathname}`);
          resources.add(`${window.location.origin}/manifest.webmanifest`);

          if (readyRegistration.active && resources.size > 0) {
            readyRegistration.active.postMessage({
              type: "CACHE_URLS",
              payload: Array.from(resources)
            });
          }
        });
        return registration;
      })
      .catch((error) => {
        console.error("Service worker registration failed:", error);
      });
  });
}
