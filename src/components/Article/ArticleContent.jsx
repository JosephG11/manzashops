import LinksCard from './LinksCard';

const ArticleContent = ({ businessLinks, referenceLinks, article }) => {
  console.log('referenceLinks: ', referenceLinks);
  return (
    <div className="mt-16 w-full px-12">
      <div className="flex w-3/4 justify-between">
        <LinksCard title={'Reference Links'} links={referenceLinks} />

        <LinksCard title={'Business Links'} links={businessLinks} />
      </div>
    </div>
  );
};

export default ArticleContent;
