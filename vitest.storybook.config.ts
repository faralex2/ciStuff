/// <reference types="vitest/config" />
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";

const dirname =
  typeof __dirname !== "undefined" ? __dirname : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    // 👇 сторибук сам подтянет stories
    plugins: [
      storybookTest({
        configDir: path.join(dirname, ".storybook"),
      }),
    ],
  },
});
