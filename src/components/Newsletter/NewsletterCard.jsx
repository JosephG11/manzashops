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
    <div className="flex w-[90%] flex-col items-center gap-2 md:w-fit lg:flex-row lg:items-start lg:gap-0">
      <div className="flex w-full flex-row items-baseline gap-2 pb-2 leading-5 md:pb-0 lg:w-16 lg:flex-col lg:items-stretch lg:gap-0">
        <p className="text-3xl font-bold capitalize text-red-400">{month}</p>
        <p className="text-center text-2xl text-white">{day}</p>
        <p className="text-center text-sm text-white">{year}</p>
      </div>

      <div className="flex flex-col gap-4">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-fit w-full flex-col rounded-[10px] border-[1px] border-white bg-header hover:border-secondary md:h-[340px] md:w-[700px]"
        >
          <div className="flex w-full flex-col md:flex-row">
            <div className="flex justify-center md:justify-start">
              <img
                src={src}
                alt={alt}
                className="h-[240px] w-full rounded-tl-[10px] rounded-tr-[10px] md:h-[180px] md:w-[200px] md:min-w-[280px] md:rounded-tr-[0px]"
                loading="lazy"
              />
            </div>

            <div className="w-full p-4 text-white">
              <div className="flex w-full justify-start md:justify-center">
                <p className="border-b-[1px] border-white text-xl leading-5 md:text-2xl">
                  Title: <span className="capitalize">{title}</span>
                </p>
              </div>

              <div className="flex h-full w-full flex-col gap-3 pl-0 pt-5 text-lg md:flex-row md:gap-0 md:pl-4 md:pt-10 md:text-xl">
                <p className="w-full">
                  Type: <span className="capitalize text-green-500">{type}</span>
                </p>
                <p className="w-full">
                  By: <span className="capitalize">{author}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="w-full overflow-y-auto px-4 pb-2 pt-1">
            <p className="text-white">{description}</p>
          </div>
        </a>

        <div className="flex justify-end pr-6">
          <div className="flex w-64 justify-between bg-header px-2 text-lg text-white">
            <p className="underline">{source}</p>
            <p className="">{time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterCard;
