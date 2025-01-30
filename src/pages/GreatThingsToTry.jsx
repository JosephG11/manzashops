import GtttSection from "../components/GreatThingsToTry/GtttSection";
import GtttSuggestions from "../components/GreatThingsToTry/GtttSuggestions";
import {
  adSectionData01,
  adSectionData02,
  adSectionData03,
  adSectionData04,
  adSectionData05,
  adSectionData06,
} from "../constants/GreatThingsToTry";

const GreatThingsToTry = () => {
  return (
    <section className="bg-white w-full">
      <GtttSuggestions />

      <div className="flex flex-col items-center gap-10 w-full md:px-12 px-0 pt-2 pb-24 bg-[#121212]">
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
