import { useParams } from 'react-router';
import { articles } from '../constants/Article';
import ArticleHero from '../components/Article/ArticleHero';
import ArticleCards from '../components/Article/ArticleCards';
import ArticleAd from '../components/Article/ArticleAd';
import ArticleContent from '../components/Article/ArticleContent';

const Article = () => {
  const { articleId } = useParams();

  const data = articles.find((article) => article.id === articleId);

  if (!data) {
    return (
      <section className="flex min-h-screen w-full items-center justify-center">
        <p className="text-xl font-semibold text-red-500">Article not found</p>
      </section>
    );
  }

  const { heroImage, businessLinks, referenceLinks, adImage, article } = data;

  return (
    <section className="flex w-full gap-10 bg-header px-0 lg:px-10">
      <div className="m-auto w-full max-w-screen-xl">
        <ArticleHero {...heroImage} />

        {/* Mobile Ad */}
        <div className="mb-12 flex h-[430px] w-full justify-center pt-2 xl:hidden">
          <ArticleAd {...adImage} />
        </div>

        <ArticleCards businessLinks={businessLinks} referenceLinks={referenceLinks} />

        <ArticleContent {...article} />
      </div>

      {/* Desktop Ad */}
      <div className="sticky top-0 z-10 mb-12 hidden h-[430px] w-1/4 justify-center pt-2 xl:flex">
        <ArticleAd {...adImage} />
      </div>
    </section>
  );
};

export default Article;
