import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const NewsletterCard = ({
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
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-2 lg:gap-0">
      <div className="flex lg:flex-col flex-row w-[90%] md:w-full lg:w-16 leading-5 items-baseline lg:items-stretch gap-2 lg:gap-0">
        <p className="text-3xl font-bold text-red-400 capitalize">{month}</p>
        <p className="text-center text-2xl text-white">{day}</p>
        <p className="text-center text-sm text-white">{year}</p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col bg-header rounded-[10px] h-fit md:h-[340px] w-[90%] md:w-[700px]">
          <div className="w-full flex">
            <img
              src={src}
              alt={alt}
              className="h-[180px] md:min-w-[280px] w-[200px] rounded-l-0 md:rounded-l-[10px] bg-header"
            />

            <div className="w-full text-white p-4">
              <div className="w-full flex justify-center">
                <p className="text-2xl border-b-[1px] border-white leading-5">
                  Title: <span>Some Title</span>
                </p>
              </div>

              <div className="flex h-full pt-10 pl-4 gap-6 text-xl">
                <p>
                  Type:{" "}
                  <span className="capitalize text-green-500">{movieDate}</span>
                </p>
                <p>
                  By: <span className="capitalize">{movieTitle}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="w-full overflow-y-auto py-1 px-4">
            <p className="text-white">{movieDescription}</p>
          </div>
        </div>

        <div className="flex justify-end pr-6">
          <div className="bg-header text-white text-lg flex justify-between px-2 w-64">
            <p className="underline">The Guardian</p>
            <p className="">11:37 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterCard;
