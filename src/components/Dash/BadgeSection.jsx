import React, { useEffect, useState } from 'react';
import BadgeItems from './BadgeItems';
import QuickViewContainer from './QuickViewContainer';

const BadgeSection = ({ data }) => {
  const [openContainer, setOpenContainer] = useState(null); // Track which item is open

  const handleOpenContainer = (id) => {
    setOpenContainer(id); // Set the ID of the item to open
  };

  const handleCloseContainer = () => {
    setOpenContainer(null); // Close any open container
  };

  useEffect(() => {
    const handleScrollLock = () => {
      if (openContainer) {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

        // Disable scrolling
        document.body.style.overflow = 'hidden';

        // Compensate for scrollbar disappearance to avoid layout shift
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      } else {
        // Re-enable scrolling
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
      }
    };

    handleScrollLock();

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [openContainer]);

  return (
    <div className="mx-0 flex flex-col flex-wrap items-center justify-center gap-10 md:mx-20 lg:flex-row lg:gap-20">
      {data.map(({ title, content, id, btnImg, sections }) => (
        <React.Fragment key={id}>
          <div
            id={id}
            className="flex h-[350px] w-[382px] flex-col items-center rounded-[10px] border-[5px] border-black bg-black text-white"
          >
            <div className="flex w-full items-center justify-between pb-6">
              <button
                onClick={() => handleOpenContainer(id)}
                type="button"
                className="size-[70px] rounded-xl border-2 border-black hover:border-white"
              >
                <img
                  src="/manzashops/assets/badge/qv.png"
                  alt="quick view"
                  className="object-fit size-full rounded-lg"
                />
              </button>

              <p className="flex h-full justify-center bg-black text-center text-3xl text-white">
                {title}
              </p>

              <div className="size-[70px] rounded-xl border-2 border-black">
                <img src={btnImg} alt="badge" className="object-fit size-full rounded-lg" />
              </div>
            </div>

            <div className="flex flex-wrap gap-4 overflow-y-scroll pl-9 pt-4">
              <BadgeItems data={content} />
            </div>
          </div>

          {/* Quick view menu */}
          {openContainer === id && (
            <QuickViewContainer handleCloseContainer={handleCloseContainer} sections={sections} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default BadgeSection;
