const LinksCard = ({ links, title }) => {
  return (
    <div className="h-52 w-[475px] overflow-auto rounded-[10px] border-[1px] border-black bg-slate-200 p-2 shadow-[10px_10px_10px_black]">
      <button className="bg-black px-4 py-2 text-lg text-white">{title}</button>
      <div className="w-full">
        <ol className="list-inside list-decimal columns-2 p-2 text-black">
          {links.map(({ title, href }, i) => (
            <li key={i}>
              <a href={href}>{title}</a>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default LinksCard;
