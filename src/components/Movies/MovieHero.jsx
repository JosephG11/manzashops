import { posters, sliderData } from "../../constants/Movies";
import MoviePoster from "./MoviePoster";
import MovieImageSlider from "./MovieImageSlider";

const {
  poster01: { src: poster01Src, alt: poster01alt },
  poster02: { src: poster02Src, alt: poster02alt },
} = posters;

const MovieHero = () => (
  <div className="flex flex-col lgc:flex-row w-full">
    <MoviePoster src={poster01Src} alt={poster01alt} styles="lgc:flex hidden" />

    <MovieImageSlider data={sliderData} />

    <div className="flex flex-col md:flex-row justify-around py-6 items-center gap-6">
      <MoviePoster
        src={poster01Src}
        alt={poster01alt}
        styles="flex lgc:hidden"
      />

      <MoviePoster
        src={poster02Src}
        alt={poster02alt}
        styles="flex lgc:hidden"
      />
    </div>

    <MoviePoster src={poster02Src} alt={poster02alt} styles="lgc:flex hidden" />
  </div>
);

export default MovieHero;
