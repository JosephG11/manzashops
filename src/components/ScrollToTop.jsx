import { RiArrowUpSFill } from 'react-icons/ri';

const ScrollToTop = ({ butonStyles, arrowStyles }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`flex w-fit shrink-0 items-center justify-center rounded-[10px] border-[1px] border-white bg-white hover:border-secondary hover:bg-secondary ${butonStyles}`}
    >
      <RiArrowUpSFill className={`size-11 text-header ${arrowStyles}`} />
    </button>
  );
};

export default ScrollToTop;
