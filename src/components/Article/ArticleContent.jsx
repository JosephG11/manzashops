const Paragraph = ({ text }) => <p>{text}</p>;

const Media = ({ image }) => (
  <div className="flex h-64 w-full justify-center py-4 md:h-96">
    <img
      src={image.src}
      alt={image.alt}
      className="h-full w-auto border-2 border-black shadow-[10px_10px_10px_black]"
    />
  </div>
);

const ShareButton = () => (
  // Extend later
  <button
    type="button"
    onClick={() => {}}
    className="rounded-[10px] border-[1px] border-black bg-slate-300 px-4 py-2 hover:bg-slate-400"
  >
    Share
  </button>
);

const ArticleContent = ({
  title = 'Untitled',
  author = 'Unknown',
  createdAt = 'Unknown Date',
  content = [],
}) => (
  <div className="my-12 flex justify-center border-2 border-black bg-zinc-900 py-4 shadow-[10px_10px_10px_black]">
    <div className="w-[95%] rounded-[10px] bg-[#B0C4DE] p-3 shadow-[10px_10px_10px_black] sm:p-7">
      <div className="flex flex-col gap-4 pb-6 md:flex-row">
        <div className="flex w-full flex-col gap-4 md:w-1/2">
          <h3 className="text-3xl font-medium md:text-nowrap">{title}</h3>
          <p>By: {author}</p>
          <p>Date: {createdAt}</p>
        </div>

        <div className="flex w-1/2 items-center md:justify-end">
          <ShareButton />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {content.map(({ type, text, image }, i) => {
          switch (type) {
            case 'paragraph':
              return <Paragraph key={i} text={text} />;
            case 'media':
              return <Media key={i} image={image} />;
            default:
              console.warn(`Unknown content type: ${type}`);
              return (
                <p key={i} className="text-red-500">
                  Unsupported content type
                </p>
              );
          }
        })}
      </div>
    </div>
  </div>
);

export default ArticleContent;
