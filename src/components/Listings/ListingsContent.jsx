import { useEffect, useState, useRef } from 'react';
import ScrollToTop from '../ScrollToTop';
import { listingSectionData } from '../../constants/Listings';
import ListingsCard from './ListingsCard';

const ListingsContent = () => {
  const sections = listingSectionData.sections;
  const firstSection = sections[0].sectionName;

  const [activeSection, setActiveSection] = useState(firstSection || '');
  const [localSections, setLocalSections] = useState(sections || []);

  const activeSectionData = localSections?.filter(
    ({ sectionName }) => sectionName === activeSection,
  )[0];

  const categoryRefs = useRef({});

  useEffect(() => {
    if (sections) {
      setLocalSections(sections);
    }
  }, [sections]);

  const handleSectionChange = (sectionName) => {
    setActiveSection(sectionName);

    document.getElementById('listings-content')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    Object.values(categoryRefs.current).forEach((div) => {
      if (div) {
        div.scrollLeft = 0;
      }
    });
  };

  return (
    <div id="listings-content" className={'flex h-[90%] flex-col bg-black'}>
      <div className="sticky top-0 z-10 flex h-24 flex-nowrap items-center justify-between gap-4 overflow-x-auto border-[3px] border-black bg-[#141414] px-3">
        <ScrollToTop />

        {sections?.map(({ id, sectionName }) => (
          <button
            key={id}
            type="button"
            onClick={() => handleSectionChange(sectionName)}
            className={` ${
              sectionName == activeSection
                ? 'border-secondary text-secondary'
                : 'border-white text-white'
            } flex w-fit shrink-0 items-center justify-center rounded-[10px] border-[1px] hover:border-secondary hover:text-secondary`}
          >
            <p className="px-5 py-2 text-2xl capitalize">{sectionName}</p>
          </button>
        ))}
      </div>

      <div className="flex size-full flex-col items-center overflow-y-hidden">
        <p className="py-2 text-xl capitalize text-white">{activeSection}</p>

        <div className="flex w-full flex-col items-center overflow-y-auto pt-4">
          {activeSectionData.categories.map(({ categoryTitle, listings }) => {
            return (
              <div
                key={categoryTitle}
                ref={(el) => (categoryRefs.current[categoryTitle] = el)}
                className="flex size-full w-full justify-between gap-6 overflow-x-auto px-1 pb-10 pt-8 lg:gap-14 lg:px-14"
              >
                {listings?.map(({ img, name, rate, links, rating, profession, id }) => (
                  <ListingsCard
                    rate={rate}
                    links={links}
                    img={img}
                    name={name}
                    key={id}
                    rating={rating}
                    profession={profession}
                  />
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ListingsContent;
