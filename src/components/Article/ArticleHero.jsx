const ArticleHero = ({ heroImage }) => {
  return (
    <div className="mb-10 flex h-[430px] justify-center">
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
  );
};

export default ArticleHero;
