import { useParams } from 'react-router';
import { articles } from '../constants/Article';
import ArticleHero from '../components/Article/ArticleHero';
import ArticleContent from '../components/Article/ArticleContent';

const Article = () => {
  const { articleId } = useParams();

  const data = articles.find((article) => article.id === articleId);

  const { id, heroImage, businessLinks, referenceLinks, adImage, article } = data;

  return (
    <section className="w-full bg-header">
      <ArticleHero heroImage={heroImage} adImage={adImage} />
      <ArticleContent
        businessLinks={businessLinks}
        referenceLinks={referenceLinks}
        article={article}
      />
    </section>
  );
};

export default Article;
