import { useEffect, useState, useRef } from "react";
import ScrollToTop from "../ScrollToTop";
import { listingSectionData } from "../../constants/Listings";
import ListingsCard from "./ListingsCard";

const ListingsContent = () => {
  const sections = listingSectionData.sections;
  const firstSection = sections[0].sectionName;

  const [activeSection, setActiveSection] = useState(firstSection || "");
  const [localSections, setLocalSections] = useState(sections || []);

  const activeSectionData = localSections?.filter(
    ({ sectionName }) => sectionName === activeSection
  )[0];

  const categoryRefs = useRef({});

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

    Object.values(categoryRefs.current).forEach((div) => {
      if (div) {
        div.scrollLeft = 0;
      }
    });
  };

  return (
    <div id="listings-content" className={"flex flex-col h-[90%] bg-black"}>
      <div className="flex items-center gap-4 justify-between bg-[#141414] border-[3px] border-black flex-nowrap sticky px-3 top-0 z-10 overflow-x-auto h-24">
        <ScrollToTop />

        {sections?.map(({ id, sectionName }) => (
          <button
            key={id}
            type="button"
            onClick={() => handleSectionChange(sectionName)}
            className={` ${
              sectionName == activeSection
                ? "text-secondary border-secondary"
                : "text-white border-white"
            } border-[1px] rounded-[10px] flex w-fit justify-center items-center hover:border-secondary hover:text-secondary shrink-0`}
          >
            <p className="capitalize text-2xl px-5 py-2">{sectionName}</p>
          </button>
        ))}
      </div>

      <div className="flex size-full items-center flex-col overflow-y-hidden">
        <p className="text-white py-2 text-xl capitalize">{activeSection}</p>

        <div className="w-full items-center flex flex-col pt-4 overflow-y-auto ">
          {activeSectionData.categories.map(({ categoryTitle, listings }) => {
            return (
              <div
                key={categoryTitle}
                ref={(el) => (categoryRefs.current[categoryTitle] = el)}
                className="w-full pb-10 pt-8 flex size-full justify-between lg:gap-14 gap-6 overflow-x-auto lg:px-14 px-1"
              >
                {listings?.map(
                  ({ img, name, rate, links, rating, profession, id }) => (
                    <ListingsCard
                      rate={rate}
                      links={links}
                      img={img}
                      name={name}
                      key={id}
                      rating={rating}
                      profession={profession}
                    />
                  )
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ListingsContent;
