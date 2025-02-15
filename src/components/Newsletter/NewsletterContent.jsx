import { useState } from 'react';
import { articleSectionData, articleLinks } from '../../constants/Newsletter';
import NewsletterContentLeftSidebar from './NewsletterContentLeftSidebar';
import NewsletterCard from './NewsletterCard';
import ScrollToTop from '../ScrollToTop';

const NewsletterContent = () => {
  const sections = articleSectionData;
  const firstSection = sections[0].sectionName;

  const [activeSection, setActiveSection] = useState(firstSection || '');

  const activeSectionData = sections?.find(({ sectionName }) => sectionName === activeSection);

  const handleSectionChange = (sectionName) => {
    setActiveSection(sectionName);

    document.getElementById('newsletter-content')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section id="newsletter-content" className="flex flex-col">
      <div className="sticky top-0 z-10 flex h-12 flex-nowrap items-center gap-1 overflow-x-auto border-[3px] border-black bg-black px-1">
        <ScrollToTop arrowStyles={'size-[30px]'} />

        {sections?.map(({ id, sectionName }) => (
          <button
            key={id}
            type="button"
            onClick={() => handleSectionChange(sectionName)}
            className={` ${
              sectionName == activeSection ? 'bg-secondary' : 'bg-white'
            } flex w-fit shrink-0 items-center justify-center rounded-[10px] text-black hover:bg-secondary`}
          >
            <p className="px-3 py-1 text-base capitalize">{sectionName}</p>
          </button>
        ))}
      </div>

      <div className="flex h-full w-full flex-col xl:h-[80vh] xl:flex-row 2xlc:h-[70vh]">
        <NewsletterContentLeftSidebar links={articleLinks} />

        <div className="flex h-[100vh] w-full flex-col gap-6 overflow-hidden bg-black xl:h-full">
          <p className="w-full pt-4 text-center text-xl capitalize leading-5 text-white">
            {activeSection}
          </p>

          <div className="flex h-full flex-col items-center gap-8 overflow-y-auto pb-6">
            {activeSectionData?.articleListings?.map((listing) => (
              <NewsletterCard key={listing.id} {...listing} />
            ))}
          </div>
        </div>

        <div className="flex w-full shrink-0 justify-center bg-header p-4 xl:w-[320px]">
          <img
            src="/manzashops/assets/ad/gttt1.png"
            alt="ad"
            className="h-[598.4px] w-[288px] xl:h-full xl:w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default NewsletterContent;
