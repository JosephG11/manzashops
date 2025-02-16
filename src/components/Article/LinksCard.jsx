import { useState } from 'react';

const LinksCard = ({ links, title }) => {
  const [toggle, setToggle] = useState(false);

  const linksList = (
    <ol className="list-inside list-decimal columns-1 p-2 text-slate-100 sm:columns-2">
      {links.map(({ title, href }, i) => (
        <li key={i}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white"
          >
            {title}
          </a>
        </li>
      ))}
    </ol>
  );
  return (
    <div className="h-fit w-96 rounded-[10px] border-[1px] border-white bg-zinc-900 p-2 shadow-[7px_7px_7px_black] sm:min-h-52">
      <button className="hidden bg-black px-4 py-2 text-lg text-slate-100 sm:block">{title}</button>

      <button
        className="block bg-black px-4 py-2 text-lg text-slate-100 sm:hidden"
        onClick={() => setToggle((prev) => !prev)}
      >
        {title}
      </button>

      <div className="hidden w-full sm:block">{linksList}</div>

      <div className={`${toggle ? 'hidden' : 'block'} w-full sm:hidden`}>{linksList}</div>
    </div>
  );
};

export default LinksCard;
