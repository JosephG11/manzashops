import { RxCross1 } from 'react-icons/rx';

const MovieLinksCard = ({ title, links, toggleById }) => (
  <div
    className={
      'fixed inset-0 z-50 flex size-full items-center justify-center bg-black bg-opacity-50'
    }
  >
    <div
      id={title}
      className="relative bottom-28 flex flex-col items-center rounded-[10px] bg-white"
    >
      <button
        type="button"
        onClick={() => toggleById(title)}
        className="absolute right-2 top-2 text-2xl text-white"
      >
        <RxCross1 />
      </button>

      <div className="flex w-full justify-center rounded-t-[10px] border-[1px] border-white bg-header py-2">
        <p className="text-2xl capitalize text-white">{title}</p>
      </div>

      <div className="flex flex-col items-center gap-2 px-12 py-4">
        {links.map(({ title, href }) => (
          <a
            key={title}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg capitalize"
          >
            {title}
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default MovieLinksCard;
