const NewsletterPoster = ({ href, src, alt, styles }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`h-[430px] w-[310px] shrink-0 cursor-pointer rounded-[10px] border-[2px] border-white bg-black hover:border-secondary xl:h-[55vh] 2xlc:h-[45vh] ${styles}`}
  >
    <img src={src} alt={alt} className="object-fit size-full rounded-[8px]" />
  </a>
);

export default NewsletterPoster;
