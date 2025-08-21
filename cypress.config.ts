import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5174", // 👈 твой dev-сервер
    setupNodeEvents(on, config) {
      // event listeners
    },
  },
});
