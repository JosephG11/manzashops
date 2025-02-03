import ListingsContent from "../components/Listings/ListingsContent";
import ListingsHero from "../components/Listings/ListingsHero";

const Listings = () => {
  return (
    <section className="bg-white w-full">
      <ListingsHero />

      <ListingsContent />
    </section>
  );
};

export default Listings;
