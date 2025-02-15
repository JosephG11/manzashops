import { Link } from 'react-router';
import NewsletterCardContent from './NewsletterCardContent';

const NewsletterCard = ({
  image: { src, alt },
  date: { month, day, year },
  author,
  type,
  title,
  description,
  source,
  time,
  href,
  outsideLink,
  id,
}) => {
  const cardProps = { src, alt, title, type, author, description, href };

  return (
    <div className="flex w-[90%] flex-col items-center gap-2 md:w-fit lg:flex-row lg:items-start lg:gap-0">
      <div className="flex w-full flex-row items-baseline gap-2 pb-2 leading-5 md:pb-0 lg:w-16 lg:flex-col lg:items-stretch lg:gap-0">
        <p className="text-3xl font-bold capitalize text-red-400">{month}</p>
        <p className="text-center text-2xl text-white">{day}</p>
        <p className="text-center text-sm text-white">{year}</p>
      </div>

      <div className="flex flex-col gap-4">
        {outsideLink ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-fit w-full flex-col rounded-[10px] border-[1px] border-white bg-header hover:border-secondary md:h-[340px] md:w-[700px]"
          >
            <NewsletterCardContent {...cardProps} />
          </a>
        ) : (
          <Link
            to={`/manzashops/newsletter/articles/${id}`}
            className="flex h-fit w-full flex-col rounded-[10px] border-[1px] border-white bg-header hover:border-secondary md:h-[340px] md:w-[700px]"
          >
            <NewsletterCardContent {...cardProps} />
          </Link>
        )}

        <div className="flex justify-end pr-6">
          <div className="flex w-64 justify-between bg-header px-2 text-lg text-white">
            <p className="underline">{source}</p>
            <p className="">{time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterCard;
