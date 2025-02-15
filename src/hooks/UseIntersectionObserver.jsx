import { useEffect } from 'react';

const UseIntersectionObserver = ({
  suggetionsItems,
  activeButton,
  setActiveButton,
  clickedButtonRef,
  isScrollingRef,
}) => {
  useEffect(() => {
    const observerCallback = (entries) => {
      if (isScrollingRef.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting && clickedButtonRef.current === entry.target.id) {
          setActiveButton(entry.target.id);
        } else if (!entry.isIntersecting && activeButton === entry.target.id) {
          clickedButtonRef.current = null;
          setActiveButton(null);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      threshold: 1,
    });

    const elements = suggetionsItems.map(({ id }) => document.getElementById(id));

    elements.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [suggetionsItems, activeButton, setActiveButton, clickedButtonRef, isScrollingRef]);
};

export default UseIntersectionObserver;
