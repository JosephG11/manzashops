const MovieContentLeftSidebar = ({ title, links }) => (
  <div className="flex flex-col items-center w-[320px] bg-black p-2 shrink-0 gap-4">
    <div className="bg-header rounded-[10px] w-full px-8 py-4">
      <p className="text-white">{title}</p>
    </div>

    <div className="flex flex-col gap-2 w-full px-8 overflow-auto">
      {links.map(({ href, label }, i) => (
        <a
          key={i}
          href={href}
          className="bg-header rounded-[10px] w-full px-8 py-4 flex justify-center items-center border-[1px] border-white hover:border-secondary text-white"
        >
          {label}
        </a>
      ))}
    </div>
  </div>
);

export default MovieContentLeftSidebar;
