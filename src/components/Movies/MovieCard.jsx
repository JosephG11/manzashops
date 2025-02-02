import { useEffect, useState } from "react";
import MovieLinksCard from "./MovieLinksCard";

const MovieCard = ({
  image: { src, alt },
  listingDate: { month, day, year },
  movieTitle,
  movieDate,
  movieDescription,
  ticketsLink,
  buttons,
}) => {
  const [activeId, setActiveId] = useState(null);

  const ticketsData = buttons.find((button) => button.title == "tickets");

  const toggleById = (id) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  useEffect(() => {
    const handleScrollLock = () => {
      if (activeId) {
        const scrollbarWidth =
          window.innerWidth - document.documentElement.clientWidth;

        // Disable scrolling
        document.body.style.overflow = "hidden";

        // Compensate for scrollbar disappearance to avoid layout shift
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      } else {
        // Re-enable scrolling
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
      }
    };

    handleScrollLock();

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [activeId]);

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-2 lg:gap-0">
      <div className="flex lg:flex-col flex-row w-[90%] md:w-full lg:w-16 leading-5 items-baseline lg:items-stretch gap-2 lg:gap-0">
        <p className="text-3xl font-bold text-red-400 capitalize">{month}</p>
        <p className="text-center text-2xl text-white">{day}</p>
        <p className="text-center text-sm text-white">{year}</p>
      </div>

      <div className="flex flex-col md:flex-row bg-black rounded-[10px] h-fit md:h-[350px] w-[90%] md:w-[700px] border-[1px] border-white">
        <div className="flex justify-center">
          <img
            src={src}
            alt={alt}
            className="md:h-full h-[300px] md:min-w-[234.5px] w-[200px] rounded-l-0 md:rounded-l-[10px] bg-header"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col justify-between w-full">
          <div className="bg-header rounded-tr-[10px] flex flex-col gap-6 size-full p-4">
            <div className="flex w-full">
              <div className="w-full text-white">
                <p>
                  Date: <span className="capitalize">{movieDate}</span>
                </p>
                <p>
                  Title: <span className="capitalize">{movieTitle}</span>
                </p>
              </div>

              <div className="flex w-full justify-center items-center">
                <button
                  type="button"
                  onClick={() => toggleById(ticketsData.title)}
                  className="bg-red-500 text-white rounded-[10px] px-4 py-2 w-28 sm:w-48 xs:w-36 h-10 text-center"
                >
                  Tickets
                </button>

                {activeId === ticketsData.title && (
                  <MovieLinksCard
                    title={ticketsData.title}
                    links={ticketsData.links}
                    toggleById={toggleById}
                  />
                )}
              </div>
            </div>

            <div className="overflow-y-auto">
              <p className="text-white">{movieDescription}</p>
            </div>
          </div>

          <div className="bg-black w-full h-14 p-2 flex justify-around rounded-b-[10px] lg:rounded-br-[10px]">
            {buttons.map(({ title, links }) => (
              <div key={title}>
                <button
                  type="button"
                  onClick={() => toggleById(title)}
                  className="bg-white text-black rounded-[10px] text-sm sm:text-base px-4 py-2 w-24 sm:w-32 h-10 text-center capitalize"
                >
                  {title}
                </button>

                {activeId === title && (
                  <MovieLinksCard
                    title={title}
                    links={links}
                    toggleById={toggleById}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
