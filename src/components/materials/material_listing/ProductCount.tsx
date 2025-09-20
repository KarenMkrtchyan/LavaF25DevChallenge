"use client";
import "./materials.css";
import Material from "../../../types/Material";
import { useAppDispatch, useAppSelector } from "@/store";
import { updateQuantity } from "@/store/itemsSlice";

export default function ProductCount({ item }: { item: Material }) {
  const dispatch = useAppDispatch();

  const handleMinusClick = () => {
    dispatch(
      updateQuantity({ id: item.id, quantity: Math.max(0, item.current - 1) })
    );
  };

  const handlePlusClick = () => {
    dispatch(updateQuantity({ id: item.id, quantity: item.current + 1 }));
  };

  return (
    <div className="flex flex-row justify-center items-center">
      <button className="count_button left_button" onClick={handleMinusClick}>
        -
      </button>
      <div
        className={`center_text ${
          item.current > item.required
            ? "center_text_invalid"
            : "center_text_valid"
        }`}
      >
        <p className="center_text_count">{item.current}</p>
        <p
          className={`center_text_inventory ${
            item.current > item.required ? "center_text_inventory_invalid" : ""
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
