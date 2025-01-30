const MoviePoster = ({ href, src, alt, styles }) => (
  <a
    href={href}
    className={`bg-black border-[2px] border-white hover:border-secondary w-[310px] rounded-[10px] shrink-0 h-[55vh] 2xlc:h-[45vh] cursor-pointer ${styles}`}
  >
    <img src={src} alt={alt} className="object-fit size-full rounded-[8px]" />
  </a>
);

export default MoviePoster;
