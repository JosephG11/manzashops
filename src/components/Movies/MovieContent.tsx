import React from "react";
import { useEffect, useState, useRef } from "react";
import { listingSectionData } from "../../constants/Listings";
import { movieLinks } from "../../constants/Movies";
import MovieContentLeftSidebar from "./MovieContentLeftSidebar";

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
      <div className="flex items-center gap-2 justify-between bg-black border-[3px] border-black flex-nowrap sticky px-1 top-0 z-10 overflow-x-auto h-16">
        {sections?.map(({ id, sectionName }) => (
          <button
            key={id}
            type="button"
            onClick={() => handleSectionChange(sectionName)}
            className={` ${
              sectionName == activeSection ? "bg-secondary" : "bg-white"
            } rounded-[10px] flex w-fit justify-center items-center text-black hover:bg-secondary shrink-0`}
          >
            <p className="capitalize text-xl px-3 py-1">{sectionName}</p>
          </button>
        ))}
      </div>

      <div className="flex flex-col xl:flex-row w-full 2xlc:h-[70vh] xl:h-[80vh] h-full">
        <MovieContentLeftSidebar
          title="Trending - 20 list"
          links={movieLinks}
        />

        <div className="w-full bg-black flex flex-col items-center">
          <div className="bg-secondary w-full p-4">
            <div className="bg-white rounded-[10px] h-[350px]"></div>
          </div>
        </div>

        <div className="w-[320px] bg-header shrink-0 p-4">
          <img
            src="/manzashops/assets/ad/gttt1.png"
            alt="ad"
            className="size-full "
          />
        </div>
      </div>
    </section>
  );
};

export default MovieContent;
