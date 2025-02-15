import { useParams } from 'react-router';

const Article = () => {
  const { id } = useParams();

  return <section className="flex h-[50vh] items-center justify-center">Article {id}</section>;
};

export default Article;
