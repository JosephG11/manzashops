import DealsSection from "../components/Deals/DealsSection";
import DealsSuggestions from "../components/Deals/DealsSuggestions";
import DealsHero from "../components/Deals/DealsHero";
import {
  adSectionData01,
  adSectionData02,
  adSectionData03,
  adSectionData04,
  adSectionData05,
  adSectionData06,
} from "../constants/Deals";

const Deals = () => {
  return (
    <section className="bg-white w-full">
      <DealsHero />

      <DealsSuggestions />

      <div className="flex flex-col items-center gap-10 w-full md:px-12 px-0 pt-2 pb-24 bg-[#121212]">
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
