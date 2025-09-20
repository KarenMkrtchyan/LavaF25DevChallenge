import Material from "@/types/Material";
import ProductCount from "./ProductCount";
import ProductDescription from "./ProductDescription";

export default function MaterialListing({ item }: { item: Material }) {
  return (
    <div className="flex flex-row justify-between items-center p-4">
      <ProductDescription name={item.name} pic={item.image} />
      <ProductCount item={item} />
    </div>
  );
}
