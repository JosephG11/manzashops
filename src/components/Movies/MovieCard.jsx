import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

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

  const toggleById = (id) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="flex">
      <div className="w-16 leading-5">
        <p className="text-3xl font-bold text-red-400 capitalize">{month}</p>
        <p className="text-center text-2xl text-white">{day}</p>
        <p className="text-center text-sm text-white">{year}</p>
      </div>

      <div className="flex bg-black rounded-[10px] h-[350px] w-[700px] border-[1px] border-white">
        <img
          src={src}
          alt={alt}
          className="h-full min-w-[234.5px] rounded-l-[10px] bg-header"
        />

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
                <a
                  href={ticketsLink}
                  className="bg-red-500 text-white rounded-[10px] px-4 py-2 w-48 h-10 text-center"
                >
                  Tickets
                </a>
              </div>
            </div>

            <div className="overflow-y-auto">
              <p className="text-white">{movieDescription}</p>
            </div>
          </div>

          <div className="bg-black w-full h-14 p-2 flex justify-around rounded-br-[10px]">
            {buttons.map(({ title, links }) => (
              <div key={title}>
                <button
                  type="button"
                  onClick={() => toggleById(title)}
                  className="bg-white text-black rounded-[10px] px-4 py-2 w-32 h-10 text-center capitalize"
                >
                  {title}
                </button>

                {activeId === title && (
                  <div
                    id={title}
                    className="flex flex-col bg-white items-center rounded-[10px] relative top-1 pb-2 pt-6 px-3"
                  >
                    <button
                      type="button"
                      onClick={() => toggleById(title)}
                      className="absolute right-2 top-2"
                    >
                      <RxCross1 />
                    </button>
                    {links.map(({ title, href }) => (
                      <a
                        key={title}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="capitalize"
                      >
                        {title}
                      </a>
                    ))}
                  </div>
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
