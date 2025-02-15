import MovieContent from '../components/Movies/MovieContent';
import MovieHero from '../components/Movies/MovieHero';

const Movies = () => {
  return (
    <section className="w-full bg-white">
      <MovieHero />
      <MovieContent />
    </section>
  );
};

export default Movies;
