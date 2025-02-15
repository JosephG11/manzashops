import JobsSection from '../components/Jobs/JobsSection';
import JobsSuggestions from '../components/Jobs/JobsSuggestions';
import JobsHero from '../components/Jobs/JobsHero';
import {
  adSectionData01,
  adSectionData02,
  adSectionData03,
  adSectionData04,
  adSectionData05,
  adSectionData06,
} from '../constants/Jobs';

const Jobs = () => {
  return (
    <section className="w-full bg-white">
      <JobsHero />

      <JobsSuggestions />

      <div className="flex w-full flex-col items-center gap-10 bg-[#121212] px-0 pb-24 pt-2 md:px-12">
        <JobsSection data={adSectionData01} />

        <JobsSection data={adSectionData02} />

        <JobsSection data={adSectionData03} />

        <JobsSection data={adSectionData04} />

        <JobsSection data={adSectionData05} />

        <JobsSection data={adSectionData06} />
      </div>
    </section>
  );
};

export default Jobs;
