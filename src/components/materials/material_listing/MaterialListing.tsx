import ProductCount from "./ProductCount";
import ProductDescription from "./ProductDescription";

interface MaterialListingProps {
  name: string;
  pic: string;
  inventoryCount: number;
}

export default function MaterialListing({
  name,
  pic,
  inventoryCount,
}: MaterialListingProps) {
  return (
    <div className="flex flex-row justify-between items-center p-4">
      <ProductDescription name={name} pic={pic} />
      <ProductCount inventoryCount={inventoryCount} />
    </div>
  );
}
