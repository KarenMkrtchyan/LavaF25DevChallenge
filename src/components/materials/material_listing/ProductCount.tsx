"use client";
import { useState } from "react";
import "./materials.css";
import Material from "../../../types/Material";
import { useAppDispatch, useAppSelector } from "@/store";
import { updateQuantity } from "@/store/itemsSlice";

export default function ProductCount({ item }: { item: Material }) {
  const [selectedCount, setSelectedCount] = useState(item.current);
  const dispatch = useAppDispatch();

  const handleMinusClick = () => {
    setSelectedCount(Math.max(0, selectedCount - 1));
    dispatch(
      updateQuantity({ id: item.id, quantity: Math.max(0, selectedCount - 1) })
    );
  };

  const handlePlusClick = () => {
    setSelectedCount(selectedCount + 1);
    dispatch(updateQuantity({ id: item.id, quantity: selectedCount + 1 }));
  };

  return (
    <div className="flex flex-row justify-center items-center">
      <button className="count_button left_button" onClick={handleMinusClick}>
        -
      </button>
      <div
        className={`center_text ${
          selectedCount > item.required
            ? "center_text_invalid"
            : "center_text_valid"
        }`}
      >
        <p className="center_text_count">{selectedCount}</p>
        <p
          className={`center_text_inventory ${
            selectedCount > item.required ? "center_text_inventory_invalid" : ""
          }`}
        >
          {item.required} PCS
        </p>
      </div>
      <button className="count_button right_button" onClick={handlePlusClick}>
        +
      </button>
    </div>
  );
}
