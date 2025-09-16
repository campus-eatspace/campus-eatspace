export default function OrderSummary() {
  return (
    <div className="bg-gray-100 p-4 rounded-lg h-fit">
      <h2 className="font-semibold mb-4">Order Summary</h2>

      <div className="text-sm text-gray-600 mb-4 space-y-1">
        <p>Subtotal: $0</p>
        <p>Delivery Fee: $0</p>
        <p className="font-semibold">Total: $0</p>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">Payment Method</h3>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg w-full">
          Debit
        </button>
      </div>

      <button className="bg-orange-600 text-white px-4 py-2 rounded-lg w-full">
        Continue to Payment
      </button>
    </div>
  );
}
