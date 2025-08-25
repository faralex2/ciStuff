// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

async function prepare() {
  if (import.meta.env.VITE_MOCK_ENABLED === "true") {
    const { worker } = await import("./shared/mocks/browser");
    await worker.start({
      serviceWorker: { url: "/mockServiceWorker.js" },
      onUnhandledRequest: "bypass",
    });
    console.log("✅ MSW is running with mocks");
  } else {
    console.log("🚀 MSW is disabled, using real API");
  }
}

prepare().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
