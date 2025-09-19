"use client";

import { useState } from "react";

import styles from "./cardTitle.module.css";
import SegmentedToggle from "./SegmentToggle";

interface CardTitleProps {
  title: string;
  tab: "inventory" | "queue";
  setTab: (tab: "inventory" | "queue") => void;
}

export default function CardTitle({ title, tab, setTab }: CardTitleProps) {
  return (
    <div className="flex flex-row justify-between items-center h-[60px] px-[8px] mb-[24px]">
      <div className="flex flex-row gap-[8px]">
        <h1 className={styles.main_title}>Materials</h1>{" "}
        <h1 className={styles.secondary_title}> / {title}</h1>
      </div>
      <SegmentedToggle value={tab} onChange={setTab} />
    </div>
  );
}
