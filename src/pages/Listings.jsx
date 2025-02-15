import ListingsContent from '../components/Listings/ListingsContent';
import ListingsHero from '../components/Listings/ListingsHero';

const Listings = () => {
  return (
    <section className="w-full bg-white">
      <ListingsHero />

      <ListingsContent />
    </section>
  );
};

export default Listings;
