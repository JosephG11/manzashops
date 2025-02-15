import MenusSection from '../components/Menus/MenusSection';
import MenusSuggestions from '../components/Menus/MenusSuggestions';
import MenusHero from '../components/Menus/MenusHero';
import {
  adSectionData01,
  adSectionData02,
  adSectionData03,
  adSectionData04,
  adSectionData05,
  adSectionData06,
} from '../constants/Menus';

const Menus = () => {
  return (
    <section className="w-full bg-white">
      <MenusHero />

      <MenusSuggestions />

      <div className="flex w-full flex-col items-center gap-10 bg-[#121212] px-0 pb-24 pt-2 md:px-12">
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
