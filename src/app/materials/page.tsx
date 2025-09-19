"use client";
import { useState } from "react";
import producitListings from "./products.json"; // TODO: Load this from DB
import MaterialListing from "@/components/materials/material_listing/MaterialListing";
import SearchBar from "@/components/materials/material_search/SearchBar";
import { PlusSmall } from "@/components/icons/Icons";
import "./page.css";

interface Material {
  id: number;
  name: string;
  image: string;
  required: number;
}

export default function Materials() {
  const [searchTerm, setSearchTerm] = useState("");
  console.log(producitListings);
  return (
    <div>
      {/* Header component */}
      <h1>Materials / Blanks</h1>

      <div>
        <div className="flex flex-row justify-between items-center h-[60px] px-[8px]">
          <SearchBar searchText={searchTerm} setSearchText={setSearchTerm} />
          <button className="add_new flex flex-row justify-center items-center gap-[8px]">
            <PlusSmall />
            <p>Add New</p>
          </button>
        </div>
        {/* Materials List Component */}
        <div>
          {producitListings.map((product: Material) => {
            if (product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
              return (
                <MaterialListing
                  key={product.id}
                  name={product.name}
                  pic={product.image}
                  inventoryCount={product.required}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
