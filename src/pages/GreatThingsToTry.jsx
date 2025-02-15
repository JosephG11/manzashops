import GtttSection from '../components/GreatThingsToTry/GtttSection';
import GtttSuggestions from '../components/GreatThingsToTry/GtttSuggestions';
import GtttHero from '../components/GreatThingsToTry/GtttHero';
import {
  adSectionData01,
  adSectionData02,
  adSectionData03,
  adSectionData04,
  adSectionData05,
  adSectionData06,
} from '../constants/GreatThingsToTry';

const GreatThingsToTry = () => {
  return (
    <section className="w-full bg-white">
      <GtttHero />

      <GtttSuggestions />

      <div className="flex w-full flex-col items-center gap-10 bg-[#121212] px-0 pb-24 pt-2 md:px-12">
        <GtttSection data={adSectionData01} />

        <GtttSection data={adSectionData02} />

        <GtttSection data={adSectionData03} />

        <GtttSection data={adSectionData04} />

        <GtttSection data={adSectionData05} />

        <GtttSection data={adSectionData06} />
      </div>
    </section>
  );
};

export default GreatThingsToTry;
