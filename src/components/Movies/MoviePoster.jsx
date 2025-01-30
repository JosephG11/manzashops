const MoviePoster = ({ src, alt, styles }) => (
  <div
    className={`bg-black border-[2px] border-white hover:border-secondary w-[310px] rounded-[10px] shrink-0 h-[50vh] 2xlc:h-[40vh] ${styles}`}
  >
    <img src={src} alt={alt} className="object-fit size-full rounded-[8px]" />
  </div>
);

export default MoviePoster;
