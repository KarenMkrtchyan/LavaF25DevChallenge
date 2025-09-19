"use client";
import { useState } from "react";
import "./materials.css";

interface MyComponentProps {
  inventoryCount: number;
}

export default function ProductCount({ inventoryCount }: MyComponentProps) {
  const [selectedCount, setSelectedCount] = useState(0);

  const handleMinusClick = () => {
    setSelectedCount(Math.max(0, selectedCount - 1));
  };

  const handlePlusClick = () => {
    setSelectedCount(selectedCount + 1);
  };

  return (
    <div className="flex flex-row justify-center items-center">
      <button className="count_button left_button" onClick={handleMinusClick}>
        -
      </button>
      <div
        className={`center_text ${
          selectedCount > inventoryCount
            ? "center_text_invalid"
            : "center_text_valid"
        }`}
      >
        <p className="center_text_count">{selectedCount}</p>
        <p
          className={`center_text_inventory ${
            selectedCount > inventoryCount
              ? "center_text_inventory_invalid"
              : ""
          }`}
        >
          {inventoryCount} PCS
        </p>
      </div>
      <button className="count_button right_button" onClick={handlePlusClick}>
        +
      </button>
    </div>
  );
}
