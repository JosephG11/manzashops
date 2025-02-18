const ArticleHero = ({ href, src, alt }) => {
  return (
    <div className="mb-10 flex h-[430px] justify-center">
      <a target="_blank" rel="noopener noreferrer" href={href} className="w-full flex-shrink-0">
        <img
          src={src}
          alt={alt}
          className={`object-fit h-full w-[171vh] rounded-[10px] shadow-[10px_10px_10px_black]`}
          loading="eager"
        />
      </a>
    </div>
  );
};

export default ArticleHero;
