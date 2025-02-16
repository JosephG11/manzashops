import { useParams } from 'react-router';
import { articles } from '../constants/Article';
import ArticleHero from '../components/Article/ArticleHero';
import ArticleCards from '../components/Article/ArticleCards';

const Article = () => {
  const { articleId } = useParams();

  const data = articles.find((article) => article.id === articleId);

  const { id, heroImage, businessLinks, referenceLinks, adImage, article } = data;

  return (
    <section className="flex w-full bg-header px-12">
      <div className="w-3/4">
        <ArticleHero heroImage={heroImage} />

        <ArticleCards businessLinks={businessLinks} referenceLinks={referenceLinks} />

        <div className="my-12 flex justify-center border-2 border-black bg-white py-4 shadow-[10px_10px_10px_black]">
          <div className="w-[90%] rounded-[10px] bg-secondary p-4 shadow-[10px_10px_10px_black]">
            <div className="flex">
              <div className="w-1/2">
                <h3>{article.title}</h3>
                <p>
                  By: <span>{article.author}</span>
                </p>
                <p>
                  Date: <span>{article.createdAt}</span>
                </p>
              </div>

              <div className="flex w-1/2 justify-end">
                <button>Share</button>
              </div>
            </div>

            <div></div>
          </div>
        </div>
      </div>

      <div className="sticky top-0 z-10 mb-12 flex h-[430px] w-1/4 justify-end pt-2">
        <a
          href={adImage.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`h-[430px] w-[310px] shrink-0 cursor-pointer rounded-[10px] border-[2px] border-black bg-black hover:border-secondary`}
        >
          <img
            src={adImage.src}
            alt={adImage.alt}
            className="object-fit size-full rounded-[8px]"
            loading="lazy"
          />
        </a>
      </div>
    </section>
  );
};

export default Article;
