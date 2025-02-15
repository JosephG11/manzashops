const SuggestionsButton = ({
  id,
  title,
  scrollingProps: { activeButton, isScrollingRef, clickedButtonRef, setActiveButton },
  offset,
}) => {
  const scrollToElement = (id) => {
    const targetElement = document.getElementById(id);

    if (targetElement) {
      isScrollingRef.current = true;
      clickedButtonRef.current = id;
      setActiveButton(id);

      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });

      // Stop scrolling after a delay to allow smooth scrolling to complete
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 500); // Adjust this duration to match scroll speed
    }
  };
  return (
    <button
      key={id}
      type="button"
      onClick={() => scrollToElement(id)}
      className={` ${
        activeButton === id ? 'border-secondary text-secondary' : 'border-white text-white'
      } flex w-fit shrink-0 items-center justify-center rounded-[10px] border-[1px] hover:border-secondary hover:text-secondary`}
    >
      <p className="px-5 py-2 text-2xl capitalize">{title}</p>
    </button>
  );
};

export default SuggestionsButton;
