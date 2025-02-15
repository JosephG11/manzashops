const ArticleHero = ({ heroImage, adImage }) => {
  return (
    <div className="flex w-full px-12">
      <div className="flex h-[430px] w-3/4 justify-center">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={heroImage.href}
          className="w-full flex-shrink-0"
        >
          <img
            src={heroImage.src}
            className={`object-fit h-full w-[171vh] rounded-[10px] shadow-[10px_10px_10px_black]`}
            loading="lazy"
          />
        </a>
      </div>

      <div className="flex h-[430px] w-1/4 justify-end pt-2">
        <a
          href={adImage.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`h-[430px] w-[310px] shrink-0 cursor-pointer rounded-[10px] border-[2px] border-black bg-black hover:border-secondary`}
        >
          <img
            src={adImage.src}
            alt={adImage.alt}
            className="object-fit size-full rounded-[8px]"
            loading="lazy"
          />
        </a>
      </div>
    </div>
  );
};

export default ArticleHero;
