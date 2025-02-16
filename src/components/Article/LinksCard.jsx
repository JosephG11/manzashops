const LinksCard = ({ links, title }) => {
  return (
    <div className="h-52 w-96 overflow-auto rounded-[10px] border-[1px] border-white bg-zinc-900 p-2 shadow-[7px_7px_7px_black]">
      <button className="bg-black px-4 py-2 text-lg text-slate-100">{title}</button>
      <div className="w-full">
        <ol className="list-inside list-decimal columns-2 p-2 text-slate-100">
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
      </div>
    </div>
  );
};

export default LinksCard;
