"use client";

import { Filter, UpDownArrows, SearchIcon } from "@/components/icons/Icons";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
  searchText: string;
  setSearchText: (text: string) => void;
}

export default function SearchBar({
  searchText,
  setSearchText,
}: SearchBarProps) {
  return (
    <div className="flex flex-row justify-start items-center gap-[16px]">
      <div className={`${styles.search_bar}`}>
        <SearchIcon />
        <input
          id="search"
          type="text"
          placeholder="Search materials"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-[360px]"
        />
      </div>
      <div className="flex flex-row justify-start items-center gap-[8px]">
        <button className="cursor-pointer">
          <Filter />
        </button>
        <button className="cursor-pointer">
          <UpDownArrows />
        </button>
      </div>
    </div>
  );
}
