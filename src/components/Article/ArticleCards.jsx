import LinksCard from './LinksCard';

const ArticleCards = ({ businessLinks, referenceLinks }) => {
  return (
    <div className="sticky top-0 z-10 flex justify-between pt-2">
      <LinksCard title={'Reference Links'} links={referenceLinks} />

      <LinksCard title={'Business Links'} links={businessLinks} />
    </div>
  );
};

export default ArticleCards;
