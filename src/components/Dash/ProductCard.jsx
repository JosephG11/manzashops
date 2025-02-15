const ProductCard = ({ title, href, img, name, price, description }) => {
  return (
    <a
      href={href}
      className="flex h-fit min-h-[420px] w-[250px] min-w-[250px] flex-col rounded-[10px] border-[1px] border-white bg-header pb-4 shadow-[2px_2px_5px_white]"
    >
      <p className="w-full py-1 text-center text-base capitalize text-white">{title}</p>

      <img src={img} alt="product-image" className="object-fit h-48 w-full bg-slate-600" />

      <div className="w-full flex-col gap-3 p-4 text-white">
        <p className="capitalize">
          name: <span>{name}</span>
        </p>

        <p className="capitalize">
          price: <span className="text-lg text-green-500">${price}</span>
        </p>

        <div className="flex h-full flex-col gap-[1px]">
          <p className="capitalize">description:</p>

          <p className="h-36 overflow-y-auto pl-2 pr-[2px] text-sm">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default ProductCard;
