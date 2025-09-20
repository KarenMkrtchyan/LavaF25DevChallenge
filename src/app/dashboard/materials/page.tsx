"use client";
import { useState } from "react";
import producitListings from "./products.json"; // TODO: Load this from DB
import MaterialListing from "@/components/materials/material_listing/MaterialListing";
import SearchBar from "@/components/materials/material_header/SearchBar";
import CardTitle from "@/components/materials/material_header/cardTitle";
import AddNewButton from "@/components/materials/material_header/AddNewButton";
import "./page.css";
import Material from "@/types/Material";

import { useAppDispatch, useAppSelector } from "@/store";
import { addItem, updateQuantity, setAll } from "@/store/itemsSlice";

export default function Materials() {
  const [searchTerm, setSearchTerm] = useState("");
  const [tab, setTab] = useState<"inventory" | "queue">("inventory");
  const items = useAppSelector((state) => state.items);
  const dispatch = useAppDispatch();

  const handleAddItem = (newItem: Material) => {
    dispatch(addItem(newItem));
  };

  return (
    <div className="material_div">
      <CardTitle title="Blanks" tab={tab} setTab={setTab} />

      <div className="material_list_container">
        {/* Search tools Component */}
        <div className="flex flex-row justify-between items-center h-[60px] px-[8px]">
          <SearchBar searchText={searchTerm} setSearchText={setSearchTerm} />
          <AddNewButton onAdd={handleAddItem} />
        </div>

        {/* Materials List Component */}
        {tab === "inventory" ? (
          <div>
            {items.map((product: Material) => {
              if (
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return <MaterialListing key={product.id} item={product} />;
              }
            })}
          </div>
        ) : (
          <div>In dha wurks</div>
        )}
      </div>
    </div>
  );
}
