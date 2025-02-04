const NewsletterPoster = ({ href, src, alt, styles }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`bg-black border-[2px] border-white hover:border-secondary w-[310px] rounded-[10px] shrink-0 h-[430px] xl:h-[55vh] 2xlc:h-[45vh] cursor-pointer ${styles}`}
  >
    <img src={src} alt={alt} className="object-fit size-full rounded-[8px]" />
  </a>
);

export default NewsletterPoster;
