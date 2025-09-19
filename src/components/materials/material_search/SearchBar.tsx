"use clinet";

import { Filter, UpDownArrows } from "@/components/icons/Icons";

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
      <input
        type="text"
        placeholder="Search materials"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="border p-2 rounded w-[360px]"
      />
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
