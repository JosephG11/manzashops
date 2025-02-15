import { posters, sliderData } from '../../constants/Movies';
import MoviePoster from './MoviePoster';
import MovieImageSlider from './MovieImageSlider';

const {
  poster01: { src: poster01Src, alt: poster01alt },
  poster02: { src: poster02Src, alt: poster02alt },
} = posters;

const MovieHero = () => (
  <div className="flex w-full flex-col rounded-t-[10px] bg-black lgc:flex-row">
    <MoviePoster src={poster01Src} alt={poster01alt} styles="lgc:flex hidden" />

    <MovieImageSlider data={sliderData} />

    <div className="flex flex-col items-center justify-around gap-6 py-6 md:flex-row">
      <MoviePoster src={poster01Src} alt={poster01alt} styles="flex lgc:hidden" />

      <MoviePoster src={poster02Src} alt={poster02alt} styles="flex lgc:hidden " />
    </div>

    <MoviePoster src={poster02Src} alt={poster02alt} styles="lgc:flex hidden" />
  </div>
);

export default MovieHero;
