import MenusSection from "../components/Menus/MenusSection";
import MenusSuggestions from "../components/Menus/MenusSuggestions";
import MenusHero from "../components/Menus/MenusHero";
import {
  adSectionData01,
  adSectionData02,
  adSectionData03,
  adSectionData04,
  adSectionData05,
  adSectionData06,
} from "../constants/Menus";

const Menus = () => {
  return (
    <section className="bg-white w-full">
      <MenusHero />

      <MenusSuggestions />

      <div className="flex flex-col items-center gap-10 w-full md:px-12 px-0 pt-2 pb-24 bg-[#121212]">
        <MenusSection data={adSectionData01} />

        <MenusSection data={adSectionData02} />

        <MenusSection data={adSectionData03} />

        <MenusSection data={adSectionData04} />

        <MenusSection data={adSectionData05} />

        <MenusSection data={adSectionData06} />
      </div>
    </section>
  );
};

export default Menus;
