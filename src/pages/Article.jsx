import { useParams } from 'react-router';
import { articles } from '../constants/Article';
import ArticleHero from '../components/Article/ArticleHero';
import ArticleCards from '../components/Article/ArticleCards';

const Article = () => {
  const { articleId } = useParams();

  const data = articles.find((article) => article.id === articleId);

  const { heroImage, businessLinks, referenceLinks, adImage, article } = data;

  const ad = (
    <a
      href={adImage.href}
      target="_blank"
      rel="noopener noreferrer"
      className="h-[430px] w-[310px] shrink-0 cursor-pointer rounded-[10px] border-[2px] border-black bg-black hover:border-secondary"
    >
      <img
        src={adImage.src}
        alt={adImage.alt}
        className="object-fit size-full rounded-[8px]"
        loading="lazy"
      />
    </a>
  );

  return (
    <section className="flex w-full gap-10 bg-header px-0 lg:px-10">
      <div className="m-auto w-full max-w-screen-xl">
        <ArticleHero heroImage={heroImage} />

        <div className="mb-12 flex h-[430px] w-full justify-center pt-2 xl:hidden">{ad}</div>

        <ArticleCards businessLinks={businessLinks} referenceLinks={referenceLinks} />

        <div className="my-12 flex justify-center border-2 border-black bg-zinc-900 py-4 shadow-[10px_10px_10px_black]">
          <div className="w-[95%] rounded-[10px] bg-cyan-300 p-3 shadow-[10px_10px_10px_black] sm:p-7">
            <div className="flex flex-col gap-4 pb-6 md:flex-row">
              <div className="flex w-full flex-col gap-4 md:w-1/2">
                <h3 className="text-3xl font-medium md:text-nowrap">{article.title}</h3>
                <p>
                  By: <span>{article.author}</span>
                </p>
                <p>
                  Date: <span>{article.createdAt}</span>
                </p>
              </div>

              <div className="flex w-1/2 items-center md:justify-end">
                <button className="rounded-[10px] border-[1px] border-black bg-slate-300 px-4 py-2 hover:bg-slate-400">
                  Share
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {article.content.map((item, i) => {
                switch (item.type) {
                  case 'paragraph':
                    return <p key={i}>{item.text}</p>;
                  case 'media':
                    return (
                      <div className="flex h-64 w-full justify-center py-4 md:h-96">
                        <img
                          src={item.image.src}
                          alt={item.image.alt}
                          className="h-full w-auto border-2 border-black shadow-[10px_10px_10px_black]"
                        />
                      </div>
                    );
                  default:
                    return <p key={i}>No item type match</p>;
                }
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="sticky top-0 z-10 mb-12 hidden h-[430px] w-1/4 justify-center pt-2 xl:flex">
        {ad}
      </div>
    </section>
  );
};

export default Article;
