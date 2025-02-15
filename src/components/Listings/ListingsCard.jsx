const ListingsCard = ({ img, name, rate, links, rating, profession }) => {
  return (
    <div className="flex h-fit min-h-[420px] w-[250px] min-w-[250px] flex-col rounded-[10px] border-[1px] border-white bg-header pb-8 shadow-[2px_2px_5px_white]">
      <img src={img} alt="product-image" className="object-fit mt-6 h-48 w-full bg-slate-600" />

      <div className="flex w-full flex-col gap-3 p-4 text-white">
        <p className="capitalize">
          name: <span>{name}</span>
        </p>

        <p className="capitalize">
          profession: <span>{profession}</span>
        </p>

        <p className="capitalize">
          Hourly: <span className="text-lg text-green-500">${rate}</span>
        </p>

        <p className="capitalize">
          Manza Rated: <span>{rating}</span>
        </p>

        <div className="flex w-full justify-between gap-[1px]">
          {links.map(({ href, id, img, alt }) => (
            <a
              key={id}
              href={href}
              className="size-10 rounded-lg border-2 border-white hover:border-secondary"
            >
              <img src={img} alt={alt} className="size-full rounded-md" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListingsCard;
