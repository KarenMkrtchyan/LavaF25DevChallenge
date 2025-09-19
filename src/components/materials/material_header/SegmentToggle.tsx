"use client";

import { useState, useCallback } from "react";
import styles from "./SegmentToggle.module.css";

type Option = "inventory" | "queue";

export default function SegmentedToggle({
  value: controlledValue,
  onChange,
}: {
  value?: Option;
  onChange?: (val: Option) => void;
}) {
  const [uncontrolled, setUncontrolled] = useState<Option>("inventory");
  const value = controlledValue ?? uncontrolled;

  const setValue = useCallback(
    (v: Option) => {
      if (!controlledValue) setUncontrolled(v);
      onChange?.(v);
    },
    [controlledValue, onChange]
  );

  const index = value === "inventory" ? 0 : 1;

  return (
    <div
      role="tablist"
      aria-label="View"
      className={styles.container}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
          e.preventDefault();
          setValue(index === 0 ? "queue" : "inventory");
        }
      }}
    >
      {/* Highlight */}
      <div
        aria-hidden="true"
        className={styles.highlight}
        style={{ transform: `translateX(${index * 100}%)` }}
      />

      {/* Buttons */}
      <button
        role="tab"
        aria-selected={value === "inventory"}
        tabIndex={value === "inventory" ? 0 : -1}
        onClick={() => setValue("inventory")}
        className={`${styles.buttonBase} ${
          value === "inventory" ? styles.buttonActive : styles.buttonInactive
        }`}
      >
        Inventory
      </button>

      <button
        role="tab"
        aria-selected={value === "queue"}
        tabIndex={value === "queue" ? 0 : -1}
        onClick={() => setValue("queue")}
        className={`${styles.buttonBase} ${
          value === "queue" ? styles.buttonActive : styles.buttonInactive
        }`}
      >
        Order Queue
      </button>
    </div>
  );
}
