/// <reference types="vitest/config" />
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    include: ["src/**/*.test.{ts,tsx}"], // ✅ ищем только юнит-тесты
    exclude: ["node_modules", "dist", "**/*.stories.{ts,tsx}", "**/*.mdx"],
    coverage: {
      provider: "v8",
      reporter: ["text", "lcov"],
    },
  },
});
