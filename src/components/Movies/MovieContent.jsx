import { useEffect, useState } from "react";
import { listingSectionData } from "../../constants/Listings";
import { movieLinks } from "../../constants/Movies";
import MovieContentLeftSidebar from "./MovieContentLeftSidebar";
import MovieCard from "./MovieCard";

const MovieContent = () => {
  const sections = listingSectionData.sections;
  const firstSection = sections[0].sectionName;

  const [activeSection, setActiveSection] = useState(firstSection || "");
  const [localSections, setLocalSections] = useState(sections || []);

  const activeSectionData = localSections?.filter(
    ({ sectionName }) => sectionName === activeSection
  )[0];

  useEffect(() => {
    if (sections) {
      setLocalSections(sections);
    }
  }, [sections]);

  const handleSectionChange = (sectionName) => {
    setActiveSection(sectionName);

    document.getElementById("listings-content")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="flex flex-col">
      <div className="flex items-center gap-1 justify-between bg-black border-[3px] border-black flex-nowrap sticky px-1 top-0 z-10 overflow-x-auto h-12">
        {sections?.map(({ id, sectionName }) => (
          <button
            key={id}
            type="button"
            onClick={() => handleSectionChange(sectionName)}
            className={` ${
              sectionName == activeSection ? "bg-secondary" : "bg-white"
            } rounded-[10px] flex w-fit justify-center items-center text-black hover:bg-secondary shrink-0`}
          >
            <p className="capitalize text-base px-3 py-1">{sectionName}</p>
          </button>
        ))}
      </div>

      <div className="flex flex-col xl:flex-row w-full 2xlc:h-[70vh] xl:h-[80vh] h-full">
        <MovieContentLeftSidebar links={movieLinks} />
        <div className="h-[100vh] xl:h-full w-full flex flex-col items-center bg-black p-4 gap-6 overflow-y-auto">
          <MovieCard />

          <MovieCard />

          <MovieCard />

          <MovieCard />
        </div>

        <div className="xl:w-[320px] w-full bg-header shrink-0 p-4 flex justify-center">
          <img
            src="/manzashops/assets/ad/gttt1.png"
            alt="ad"
            className="xl:w-full xl:h-full h-[598.4px] w-[288px]"
          />
        </div>
      </div>
    </section>
  );
};

export default MovieContent;
