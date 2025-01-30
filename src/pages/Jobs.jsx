import JobsSection from "../components/Jobs/JobsSection";
import JobsSuggestions from "../components/Jobs/JobsSuggestions";
import {
  adSectionData01,
  adSectionData02,
  adSectionData03,
  adSectionData04,
  adSectionData05,
  adSectionData06,
} from "../constants/Jobs";

const Jobs = () => {
  return (
    <section className="bg-white w-full">
      <JobsSuggestions />

      <div className="flex flex-col items-center gap-10 w-full md:px-12 px-0 pt-2 pb-24 bg-[#121212]">
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
