const HeroImageSlider = ({ data }) => {
  return (
    <>
      <div className="relative flex-1">
        <div className="flex h-[40vh] w-full overflow-x-auto sm:h-full lg:h-[60vh]">
          {data.map(({ id, href, src, styles }) => (
            <a
              key={id}
              target="_blank"
              rel="noopener noreferrer"
              href={href}
              className="w-full flex-shrink-0"
            >
              <img
                src={src}
                className={`object-fit h-full w-[171vh] rounded-[10px] shadow-[10px_10px_10px_black] ${styles}`}
                loading="lazy"
              />
            </a>
          ))}
        </div>

        <div className="absolute bottom-10 right-20 h-[4vh] w-fit rounded-tl-[10px] rounded-tr-[10px] border-[1px] border-white bg-black pl-1 pr-3 text-white sm:right-96">
          <p>Hover & Scroll {'>>>'}</p>
        </div>
      </div>
    </>
  );
};

export default HeroImageSlider;
