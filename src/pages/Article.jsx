import { useParams } from 'react-router';
import { articles } from '../constants/Article';

const Article = () => {
  const { articleId } = useParams();

  const { id, heroImage, businessLinks, referenceLinks, adImage, article } = articles.find(
    (article) => article.id === articleId,
  );

  console.log('data: ', id, heroImage, businessLinks, referenceLinks, adImage, article);

  return <section className="w-full">{articleId}</section>;
};

export default Article;
