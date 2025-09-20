import { useState } from "react";
import { PlusSmall } from "@/components/icons/Icons";
import Material from "@/types/Material";

interface AddNewButtonProps {
  onAdd: (newItem: Material) => void;
}

export default function AddNewButton({ onAdd }: AddNewButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOpen(false);
    setName("");
    setQuantity("");

    const newItem: Material = {
      id: Date.now(),
      name,
      image: "/red_shirt.png",
      required: Number(quantity),
      current: 0,
    };

    onAdd(newItem);
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="add_new flex flex-row justify-center items-center gap-[8px] px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        <PlusSmall />
        <p>Add New</p>
      </button>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80">
            <h2 className="text-lg font-semibold mb-4">Add New Item</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border px-3 py-2 rounded"
                required
              />
              <input
                type="number"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="border px-3 py-2 rounded"
                required
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex flex-row justify-center items-center h-[36px] gap-[8px] px-4 py-2 rounded-md cursor-pointer border border-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="add_new flex flex-row justify-center items-center gap-[8px] px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
