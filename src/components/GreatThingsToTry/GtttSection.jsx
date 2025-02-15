const GtttSection = ({ data }) => {
  const { id, title, subTitle, adRow1, adRow2 } = data;
  return (
    <div id={id} className="flex w-full flex-col gap-4">
      <div className="flex h-14 items-center bg-black px-4 shadow-[5px_5px_10px_black]">
        <p className="text-white">
          <span className="uppercase">{title}</span> {subTitle}
        </p>
      </div>

      <div className="w-full px-0 md:px-10">
        <div className="flex flex-col gap-1 overflow-x-auto border-[1px] border-black px-14 py-8 shadow-[5px_5px_10px_black] md:px-28">
          <div className="flex w-fit gap-1">
            {adRow1.map(({ id, href, src, alt }) => (
              <div
                key={id}
                className="h-56 w-96 shrink-0 border-[2px] border-white hover:border-secondary"
              >
                <a href={href}>
                  <img src={src} alt={alt} className="object-fit size-full" />
                </a>
              </div>
            ))}
          </div>

          <div className="flex w-fit gap-1">
            {adRow2.map(({ id, href, src, alt }) => (
              <div
                key={id}
                className="h-56 w-96 shrink-0 border-[2px] border-white hover:border-secondary"
              >
                <a href={href}>
                  <img src={src} alt={alt} className="object-fit size-full" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GtttSection;
