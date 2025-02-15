const NewsletterCardContent = ({ src, alt, title, type, author, description }) => {
  return (
    <>
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
    </>
  );
};

export default NewsletterCardContent;
