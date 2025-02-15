import { RxCross1 } from 'react-icons/rx';
import ProductCard from './ProductCard';
import { useEffect, useState } from 'react';
import AdCard from './AdCard';

const QuickViewContainer = ({ handleCloseContainer, sections }) => {
  const firstSection = sections[0].sectionName;

  const [activeSection, setActiveSection] = useState(firstSection || '');
  const [localSections, setLocalSections] = useState(sections || []);

  const activeSectionData = localSections?.filter(
    ({ sectionName }) => sectionName === activeSection,
  )[0];

  useEffect(() => {
    if (sections) {
      setLocalSections(sections);
    }
  }, [sections]);

  return (
    <div
      className={
        'fixed inset-0 z-50 flex size-full items-center justify-center bg-black bg-opacity-50'
      }
    >
      <div className="relative flex h-[90%] w-[95%] flex-col rounded-lg border-2 border-secondary bg-black lg:w-[75%] xl:w-[70%] 2xl:w-[60%]">
        <div className="my-1 flex w-full justify-center">
          <button
            type="button"
            onClick={() => handleCloseContainer()}
            className="absolute left-1 top-1 flex"
          >
            <RxCross1 className="size-7 text-white" />
          </button>

          <p className="text-xl capitalize text-white">Quick view</p>
        </div>

        <div className="flex flex-nowrap items-center justify-between gap-4 overflow-x-auto overflow-y-hidden border-[3px] border-black bg-[#141414] px-2 py-8">
          {sections?.map(({ sectionName }) => (
            <button
              key={sectionName}
              type="button"
              onClick={() => setActiveSection(sectionName)}
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

          <div className="flex w-full flex-col items-center gap-10 overflow-y-auto pt-4">
            {activeSectionData.ad ? (
              <div className="flex w-[431px] flex-wrap gap-6 pb-6 xl:w-[862px]">
                {activeSectionData.ads.map(({ id, href, img, alt }) => (
                  <AdCard key={id} href={href} img={img} alt={alt} />
                ))}
              </div>
            ) : (
              activeSectionData.categories.map(({ categoryTitle, products }) => (
                <div key={categoryTitle} className="w-full">
                  <p className="pb-3 pl-4 capitalize text-white">{categoryTitle}</p>

                  <div className="flex size-full gap-8 overflow-x-scroll px-8">
                    {products?.map(({ title, href, img, name, price, description }) => (
                      <ProductCard
                        title={title}
                        href={href}
                        img={img}
                        name={name}
                        price={price}
                        description={description}
                        key={title}
                      />
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewContainer;
