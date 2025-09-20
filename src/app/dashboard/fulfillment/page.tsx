"use client";

const orders = [
  {
    id: "ORD-1001",
    buyer: "Alice Smith",
    status: "shipped",
    items: ["Gildan T-Shirt - Red / M", "Gildan T-Shirt - Red / L"],
  },
  {
    id: "ORD-1002",
    buyer: "Bob Johnson",
    status: "packing",
    items: [
      "Gildan T-Shirt - Black / M",
      "Gildan T-Shirt - Red / M",
      "Gildan T-Shirt - Red / L",
    ],
  },
  {
    id: "ORD-1003",
    buyer: "Charlie Lee",
    status: "new",
    items: ["Gildan T-Shirt - Black / M"],
  },
];

export default function FulfillmentPage() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 font-sans">
        Fulfillment Orders
      </h1>
      <div className="flex flex-col gap-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-lg shadow-md px-8 py-6 flex flex-row items-center justify-start"
            style={{ fontFamily: "Chivo Mono, monospace", minHeight: "96px" }}
          >
            <div className="flex flex-col mr-8 min-w-[120px]">
              <span className="text-lg font-bold text-indigo-700">
                {order.id}
              </span>
              <span className="text-base text-gray-700">{order.buyer}</span>
              <span className="text-sm text-gray-500 mt-1">
                Status: {order.status}
              </span>
            </div>
            <ul className="ml-4 list-disc">
              {order.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
