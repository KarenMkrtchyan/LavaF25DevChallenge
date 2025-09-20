"use client";
import "./page.css";

const products = [
  {
    id: 1,
    name: "Red Shirt",
    image: "/red_shirt.png",
  },
  {
    id: 2,
    name: "Black Shirt",
    image: "/black_shirt.png",
  },
  {
    id: 3,
    name: "White Shirt",
    image: "./white_shirt.png",
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 font-sans">
        Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-40 h-40 object-cover mb-4 rounded"
              style={{ fontFamily: "Chivo Mono, monospace" }}
            />
            <h2
              className="text-xl font-semibold text-gray-800 font-sans"
              style={{ fontFamily: "Chivo Mono, monospace" }}
            >
              {product.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
// ...existing code...
