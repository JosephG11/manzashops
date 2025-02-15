import ServicesSection from '../components/Services/ServicesSection';
import ServicesSuggestions from '../components/Services/ServicesSuggestions';
import ServicesHero from '../components/Services/ServicesHero';
import {
  adSectionData01,
  adSectionData02,
  adSectionData03,
  adSectionData04,
  adSectionData05,
  adSectionData06,
} from '../constants/Deals';

const Services = () => {
  return (
    <section className="w-full bg-white">
      <ServicesHero />

      <ServicesSuggestions />

      <div className="flex w-full flex-col items-center gap-10 bg-[#121212] px-0 pb-24 pt-2 md:px-12">
        <ServicesSection data={adSectionData01} />

        <ServicesSection data={adSectionData02} />

        <ServicesSection data={adSectionData03} />

        <ServicesSection data={adSectionData04} />

        <ServicesSection data={adSectionData05} />

        <ServicesSection data={adSectionData06} />
      </div>
    </section>
  );
};

export default Services;
