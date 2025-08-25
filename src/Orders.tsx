import { useEffect, useState } from "react";

type Order = {
  id: number;
  product: string;
  status: string;
};

type OrderDetails = Order & {
  price: number;
};

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [details, setDetails] = useState<OrderDetails | null>(null);

  // Загружаем список заказов
  useEffect(() => {
    fetch("/api/orders")
      .then((res) => res.json())
      .then(setOrders)
      .catch(console.error);
  }, []);

  // Загружаем детали заказа
  useEffect(() => {
    if (selectedId !== null) {
      fetch(`/api/orders/${selectedId}`)
        .then((res) => res.json())
        .then(setDetails)
        .catch(console.error);
    }
  }, [selectedId]);

  return (
    <div>
      <h2>Orders</h2>
      <ul>
        {orders.map((o) => (
          <li key={o.id} onClick={() => setSelectedId(o.id)}>
            {o.product} — {o.status}
          </li>
        ))}
      </ul>

      {details && (
        <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "10px" }}>
          <h3>Order #{details.id}</h3>
          <p>Product: {details.product}</p>
          <p>Status: {details.status}</p>
          <p>Price: ${details.price}</p>
        </div>
      )}
    </div>
  );
}
