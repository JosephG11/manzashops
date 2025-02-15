import NewsletterContent from '../components/Newsletter/NewsletterContent';
import NewsletterHero from '../components/Newsletter/NewsletterHero';

const Newsletter = () => {
  return (
    <section className="w-full">
      <NewsletterHero />
      <NewsletterContent />
    </section>
  );
};

export default Newsletter;
