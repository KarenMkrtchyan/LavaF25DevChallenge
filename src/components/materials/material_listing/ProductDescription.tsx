interface MyComponentProps {
  name: string;
  pic: string;
}

export default function ProductDescription({ name, pic }: MyComponentProps) {
  return (
    <div className="flex flex-row justify-center items-center">
      <div className="product_image_container">
        <img className="w-[34px] h-[34px]" src={pic} />
      </div>
      <div>
        <h2>{name}</h2>
      </div>
    </div>
  );
}
