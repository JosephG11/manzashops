import React, { useEffect, useState } from 'react';
import QuickViewContainer from './QuickViewContainer';

const TopBadges = ({ data }) => {
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
    <div className="flex w-full flex-col items-center gap-2">
      <div className="w-[99%] rounded-[10px] bg-black md:w-[95%] xl:w-[1496px]">
        <h3 className="flex w-full justify-center pl-5 pt-2 text-[24px] capitalize text-white">
          top badges
        </h3>

        <div className="flex items-center justify-between gap-4 overflow-x-auto px-10 pb-10 pt-3">
          {data.map(({ title, id, btnImg, sections, href }) => (
            <React.Fragment key={id}>
              <div
                id={id}
                className="flex h-[352px] w-[384px] flex-shrink-0 flex-col items-center rounded-[10px] border-[1px] border-white bg-black p-1 text-white"
              >
                <div className="flex w-full items-center justify-between pb-1">
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

                  <p className="flex h-full justify-center bg-black text-center text-3xl capitalize text-white">
                    {title}
                  </p>

                  <div className="size-[70px] rounded-xl border-2 border-black">
                    <img src={btnImg} alt="badge" className="object-fit size-full rounded-lg" />
                  </div>
                </div>

                <a href={href} className="size-full overflow-hidden">
                  <img src={btnImg} alt="badge" className="object-fit size-full rounded-lg" />
                </a>
              </div>

              {/* Quick view menu */}
              {openContainer === id && (
                <QuickViewContainer
                  handleCloseContainer={handleCloseContainer}
                  sections={sections}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBadges;
