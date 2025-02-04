import { useState } from "react";
import { articleSectionData, articleLinks } from "../../constants/Newsletter";
import NewsletterContentLeftSidebar from "./NewsletterContentLeftSidebar";
import NewsletterCard from "./NewsletterCard";
import ScrollToTop from "../ScrollToTop";

const NewsletterContent = () => {
  const sections = articleSectionData;
  const firstSection = sections[0].sectionName;

  const [activeSection, setActiveSection] = useState(firstSection || "");

  const activeSectionData = sections?.find(
    ({ sectionName }) => sectionName === activeSection
  );

  const handleSectionChange = (sectionName) => {
    setActiveSection(sectionName);

    document.getElementById("newsletter-content")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section id="newsletter-content" className="flex flex-col">
      <div className="flex items-center gap-1 bg-black border-[3px] border-black flex-nowrap sticky px-1 top-0 z-10 overflow-x-auto h-12">
        <ScrollToTop arrowStyles={"size-[30px]"} />

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
        <NewsletterContentLeftSidebar links={articleLinks} />

        <div className="h-[100vh] xl:h-full w-full flex flex-col bg-black gap-6 overflow-hidden">
          <p className="text-white text-xl capitalize w-full leading-5 text-center pt-4">
            {activeSection}
          </p>

          <div className="flex flex-col items-center gap-8 h-full pb-6 overflow-y-auto">
            {activeSectionData?.articleListings?.map((listing) => (
              <NewsletterCard key={listing.id} {...listing} />
            ))}
          </div>
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

export default NewsletterContent;
