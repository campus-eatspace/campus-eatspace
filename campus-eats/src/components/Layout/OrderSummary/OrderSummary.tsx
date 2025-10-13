import { useState } from "react";
import { useOrder } from "../../../context/OrderContext";

export default function OrderSummary() {
  const { orders } = useOrder();
  const [paymentMethod, setPaymentMethod] = useState("debit");

  // Calculate total
  const total = orders.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="font-semibold text-lg mb-4">Order Summary</h2>

      {orders.length > 0 ? (
        <ul className="mb-4">
          {orders.map((item, i) => (
            <li key={i} className="flex justify-between text-sm py-1">
              <span>
                {item.name} × {item.quantity}
              </span>
              <span>${item.price * item.quantity}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-sm mb-4">No items in your order yet.</p>
      )}

      <div className="border-t pt-2 mt-2 mb-4 text-sm space-y-1">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${total}</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Fee</span>
          <span>$2</span>
        </div>
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>${total + 2}</span>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="font-medium mb-2">Payment Method</h3>
        <div className="space-y-2">
          {/* Debit Card Option */}
          <label
            className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer transition ${
              paymentMethod === "debit"
                ? "bg-orange-100 border border-orange-500 text-orange-600"
                : "bg-gray-50 border border-gray-300"
            }`}
          >
            <input
              type="radio"
              name="payment"
              value="debit"
              checked={paymentMethod === "debit"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Debit Card
          </label>

         
          <label
            className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer transition ${
              paymentMethod === "credit"
                ? "bg-orange-100 border border-orange-500 text-orange-600"
                : "bg-gray-50 border border-gray-300"
            }`}
          >
            <input
              type="radio"
              name="payment"
              value="credit"
              checked={paymentMethod === "credit"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Credit Card
          </label>

        
          <label
            className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer transition ${
              paymentMethod === "cash"
                ? "bg-orange-100 border border-orange-500 text-orange-600"
                : "bg-gray-50 border border-gray-300"
            }`}
          >
            <input
              type="radio"
              name="payment"
              value="cash"
              checked={paymentMethod === "cash"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Cash on Delivery
          </label>
        </div>
      </div>

      <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600">
        Continue to Payment
      </button>
    </div>
  );
}
