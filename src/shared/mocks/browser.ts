// src/shared/mocks/browser.ts
import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

// setupWorker запускает сервис-воркер, который будет перехватывать fetch-запросы
export const worker = setupWorker(...handlers);
