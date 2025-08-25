import { http, HttpResponse } from "msw";

export const handlers = [
  // Список заказов
  http.get("/api/orders", () => {
    return HttpResponse.json([
      { id: 1, product: "iPhone 15", status: "delivered" },
      { id: 2, product: "MacBook Pro", status: "in_progress" },
      { id: 3, product: "AirPods", status: "cancelled" },
    ]);
  }),

  // Детали заказа
  http.get("/api/orders/:id", ({ params }) => {
    const { id } = params;
    return HttpResponse.json({
      id,
      product: "iPhone 15",
      status: "delivered",
      price: 999,
    });
  }),
];
