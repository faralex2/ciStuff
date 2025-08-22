import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    // берём baseUrl из переменной окружения, а если её нет → дефолт 5173
    baseUrl: process.env.CYPRESS_BASE_URL || "http://localhost:5173",
  },
});
