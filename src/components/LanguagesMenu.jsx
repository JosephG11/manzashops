const LanguagesMenu = ({ data }) => {
  return (
    <div className="flex h-full w-full flex-col rounded-[10px] bg-black lg:h-[60vh] lg:w-72">
      <p className="pl-2 text-[#f2f2f2] lg:mb-[10vh]">Choose Your Language</p>

      <div className="flex flex-row gap-6 px-6 py-6 sm:gap-4 lg:flex-col lg:py-0">
        {data.map(({ src, name, href }) => (
          <div key={name} className="group flex items-center gap-4">
            <img
              src={src}
              className="size-[5vh] rounded-full object-cover shadow-[2px_2px_5px_white] group-hover:shadow-[2px_2px_5px_#60b3d1]"
            />

            <div className="hidden flex-col gap-1 sm:flex">
              <div className="h-[1.5px] bg-white" />
              <a href={href} className="text-[25px] text-[#f2f2f2]">
                {name}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguagesMenu;
