import { useState, useRef } from 'react';
import { suggetionsItems } from '../../constants/Dash';
import ScrollToTop from '../ScrollToTop';
import UseIntersectionObserver from '../../hooks/UseIntersectionObserver';
import SuggestionsButton from '../SuggestionsButton';

const Suggestions = () => {
  const [activeButton, setActiveButton] = useState(null);
  const clickedButtonRef = useRef(null); // Track the last clicked button
  const isScrollingRef = useRef(false); // Prevent updates during scrolling

  UseIntersectionObserver({
    suggetionsItems,
    activeButton,
    setActiveButton,
    clickedButtonRef,
    isScrollingRef,
  });

  return (
    <div className="sticky top-0 z-10 flex h-24 flex-nowrap items-center justify-between gap-4 overflow-x-auto border-[3px] border-black bg-[#141414] px-3">
      <ScrollToTop />

      {suggetionsItems.map(({ id, title }) => (
        <SuggestionsButton
          key={id}
          id={id}
          title={title}
          scrollingProps={{
            activeButton,
            isScrollingRef,
            clickedButtonRef,
            setActiveButton,
          }}
          offset={110}
        />
      ))}
    </div>
  );
};

export default Suggestions;
