const MovieImageSlider = ({ data }) => {
  return (
    <>
      <div className="relative h-[370px] w-full md:h-[426px] xl:h-[55vh] 2xlc:h-[45vh]">
        <div className="flex h-full w-full overflow-x-auto">
          {data.map(({ id, href, src, styles }) => (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex-shrink-0"
            >
              <img
                src={src}
                className={`object-fit h-full w-[171vh] rounded-[10px] shadow-[10px_10px_10px_black] ${styles}`}
                loading="eager"
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

export default MovieImageSlider;
