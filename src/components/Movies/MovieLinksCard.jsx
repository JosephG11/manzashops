import { RxCross1 } from "react-icons/rx";

const MovieLinksCard = ({ title, links, toggleById }) => (
  <div
    className={
      "fixed bg-black flex items-center justify-center size-full bg-opacity-50 inset-0 z-50 "
    }
  >
    <div
      id={title}
      className="flex flex-col bg-white items-center rounded-[10px] relative bottom-28"
    >
      <button
        type="button"
        onClick={() => toggleById(title)}
        className="absolute right-2 top-2 text-white text-2xl"
      >
        <RxCross1 />
      </button>

      <div className="bg-header w-full flex justify-center rounded-t-[10px] border-[1px] border-white py-2">
        <p className="text-white text-2xl capitalize">{title}</p>
      </div>

      <div className="flex flex-col items-center px-12 py-4 gap-2">
        {links.map(({ title, href }) => (
          <a
            key={title}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="capitalize text-lg"
          >
            {title}
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default MovieLinksCard;
