const ArticleAd = ({ href = '#', src = '', alt = 'Advertisement' }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Advertisement link"
    className="h-[430px] w-[310px] shrink-0 cursor-pointer rounded-[10px] border-[2px] border-black bg-black hover:border-secondary"
  >
    <img src={src} alt={alt} className="object-fit size-full rounded-[8px]" loading="lazy" />
  </a>
);

export default ArticleAd;
