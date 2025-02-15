import { useEffect, useState } from 'react';
import MovieLinksCard from './MovieLinksCard';

const MovieCard = ({
  image: { src, alt },
  listingDate: { month, day, year },
  movieTitle,
  movieDate,
  movieDescription,
  buttons,
}) => {
  const [activeId, setActiveId] = useState(null);

  const ticketButton = buttons.find((button) => button.title == 'tickets');

  const toggleById = (id) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  useEffect(() => {
    const handleScrollLock = () => {
      if (activeId) {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

        // Disable scrolling
        document.body.style.overflow = 'hidden';

        // Compensate for scrollbar disappearance to avoid layout shift
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      } else {
        // Re-enable scrolling
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
      }
    };

    handleScrollLock();

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [activeId]);

  return (
    <div className="flex flex-col items-center gap-2 lg:flex-row lg:items-start lg:gap-0">
      <div className="flex w-[90%] flex-row items-baseline gap-2 leading-5 md:w-full lg:w-16 lg:flex-col lg:items-stretch lg:gap-0">
        <p className="text-3xl font-bold capitalize text-red-400">{month}</p>
        <p className="text-center text-2xl text-white">{day}</p>
        <p className="text-center text-sm text-white">{year}</p>
      </div>

      <div className="flex h-fit w-[90%] flex-col rounded-[10px] border-[1px] border-white bg-black hover:border-secondary md:h-[350px] md:w-[700px] md:flex-row">
        <div className="flex justify-center">
          <img
            src={src}
            alt={alt}
            className="rounded-l-0 h-[300px] w-[200px] bg-header md:h-full md:min-w-[234.5px] md:rounded-l-[10px]"
            loading="lazy"
          />
        </div>

        <div className="flex w-full flex-col justify-between">
          <div className="flex size-full flex-col gap-6 rounded-tr-[10px] bg-header p-4">
            <div className="flex w-full">
              <div className="w-full text-white">
                <p>
                  Date: <span className="capitalize">{movieDate}</span>
                </p>
                <p>
                  Title: <span className="capitalize">{movieTitle}</span>
                </p>
              </div>

              <div className="flex w-full items-center justify-center">
                <button
                  type="button"
                  onClick={() => toggleById(ticketButton.title)}
                  className="flex h-10 w-28 items-center justify-center rounded-[10px] bg-red-500 px-4 py-2 text-lg text-white hover:bg-red-600 xs:w-36 sm:w-48"
                >
                  Tickets
                </button>

                {activeId === ticketButton.title && (
                  <MovieLinksCard
                    title={ticketButton.title}
                    links={ticketButton.links}
                    toggleById={toggleById}
                  />
                )}
              </div>
            </div>

            <div className="overflow-y-auto">
              <p className="text-white">{movieDescription}</p>
            </div>
          </div>

          <div className="flex h-14 w-full justify-around rounded-b-[10px] bg-black p-2 lg:rounded-br-[10px]">
            {buttons.map(({ title, links }) => (
              <div key={title}>
                <button
                  type="button"
                  onClick={() => toggleById(title)}
                  className="h-10 w-24 rounded-[10px] bg-white px-4 py-2 text-center text-sm capitalize text-black hover:bg-gray-300 sm:w-32 sm:text-base"
                >
                  {title}
                </button>

                {activeId === title && (
                  <MovieLinksCard title={title} links={links} toggleById={toggleById} />
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
