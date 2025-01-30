import MovieContent from "../components/Movies/MovieContent";
import MovieHero from "../components/Movies/MovieHero";

const Movies = () => {
  return (
    <section className="bg-white w-full">
      <MovieHero />
      <MovieContent />
    </section>
  );
};

export default Movies;
