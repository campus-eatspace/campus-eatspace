import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type OrderItem = {
  name: string;
  price: number;
  quantity: number;
};

type OrderContextType = {
  orders: OrderItem[];
  addOrder: (item: { name: string; price: number }) => void;
};

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export function OrderProvider({ children }: { children: ReactNode }) {
  const [orders, setOrders] = useState<OrderItem[]>([]);

  const addOrder = (item: { name: string; price: number }) => {
    setOrders((prev) => {
      const existing = prev.find((order) => order.name === item.name);
      if (existing) {
        return prev.map((order) =>
          order.name === item.name
            ? { ...order, quantity: order.quantity + 1 }
            : order
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrder() {
  const context = useContext(OrderContext);
  if (!context) throw new Error("useOrder must be used inside OrderProvider");
  return context;
}
