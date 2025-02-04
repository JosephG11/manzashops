const NewsletterCard = ({
  image: { src, alt },
  date: { month, day, year },
  author,
  type,
  title,
  description,
  source,
  time,
  href,
}) => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start w-[90%] md:w-fit  gap-2 lg:gap-0">
      <div className="flex lg:flex-col flex-row w-full lg:w-16 leading-5 items-baseline lg:items-stretch gap-2 lg:gap-0 pb-2 md:pb-0">
        <p className="text-3xl font-bold text-red-400 capitalize">{month}</p>
        <p className="text-center text-2xl text-white">{day}</p>
        <p className="text-center text-sm text-white">{year}</p>
      </div>

      <div className="flex flex-col gap-4">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col bg-header rounded-[10px] h-fit md:h-[340px] w-full md:w-[700px] border-[1px] border-white hover:border-secondary"
        >
          <div className="w-full flex flex-col md:flex-row">
            <div className="flex md:justify-start justify-center">
              <img
                src={src}
                alt={alt}
                className="h-[240px] md:h-[180px] md:min-w-[280px] md:w-[200px] w-full rounded-tl-[10px] rounded-tr-[10px]  md:rounded-tr-[0px]"
                loading="lazy"
              />
            </div>

            <div className="w-full text-white p-4">
              <div className="w-full flex md:justify-center justify-start">
                <p className="text-xl md:text-2xl border-b-[1px] border-white leading-5">
                  Title: <span className="capitalize">{title}</span>
                </p>
              </div>

              <div className="flex flex-col w-full md:flex-row h-full pt-5 md:pt-10 pl-0 md:pl-4 gap-3 md:gap-0 text-lg md:text-xl">
                <p className="w-full">
                  Type:{" "}
                  <span className="capitalize text-green-500">{type}</span>
                </p>
                <p className="w-full">
                  By: <span className="capitalize">{author}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="w-full overflow-y-auto pt-1 pb-2 px-4">
            <p className="text-white">{description}</p>
          </div>
        </a>

        <div className="flex justify-end pr-6">
          <div className="bg-header text-white text-lg flex justify-between px-2 w-64">
            <p className="underline">{source}</p>
            <p className="">{time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterCard;
