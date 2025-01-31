const MovieContentLeftSidebar = ({ links }) => (
  <div className="flex xl:flex-col flex-row items-center xl:w-[320px] w-full bg-black shrink-0 xl:gap-4 gap-2">
    <div className="xl:w-full w-fit xl:pr-4 pr-0 xl:pl-4 pl-2 xl:pb-0 pb-2">
      <p className="bg-header hidden lg:flex rounded-[10px] px-8 py-4 text-nowrap text-white">
        Trending - 20 list
      </p>
      <p className="bg-header lg:hidden flex rounded-[10px] px-8 py-4 text-nowrap text-white">
        Trending
      </p>
    </div>

    <div className="flex xl:flex-col flex-row gap-2 w-full xl:pl-8 pl-0 xl:pr-8 pr-2 xl:pb-0 pb-2 overflow-auto">
      {links.map(({ href, label }, i) => (
        <a
          key={i}
          href={href}
          className="bg-header rounded-[10px] w-full px-8 py-4 flex justify-center items-center border-[1px] border-white hover:border-secondary text-white text-nowrap"
        >
          {label}
        </a>
      ))}
    </div>
  </div>
);

export default MovieContentLeftSidebar;
