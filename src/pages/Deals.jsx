import DealsSection from '../components/Deals/DealsSection';
import DealsSuggestions from '../components/Deals/DealsSuggestions';
import DealsHero from '../components/Deals/DealsHero';
import {
  adSectionData01,
  adSectionData02,
  adSectionData03,
  adSectionData04,
  adSectionData05,
  adSectionData06,
} from '../constants/Deals';

const Deals = () => {
  return (
    <section className="w-full bg-white">
      <DealsHero />

      <DealsSuggestions />

      <div className="flex w-full flex-col items-center gap-10 bg-[#121212] px-0 pb-24 pt-2 md:px-12">
        <DealsSection data={adSectionData01} />

        <DealsSection data={adSectionData02} />

        <DealsSection data={adSectionData03} />

        <DealsSection data={adSectionData04} />

        <DealsSection data={adSectionData05} />

        <DealsSection data={adSectionData06} />
      </div>
    </section>
  );
};

export default Deals;
