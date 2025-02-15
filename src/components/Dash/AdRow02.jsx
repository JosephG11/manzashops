import { Link } from 'react-router';

const AdRow02 = ({ ad1Href, ad1Src, ad1Alt, ad2Path, ad2Src, ad2Alt }) => (
  <div className="w-[99%] rounded-[10px] bg-black md:w-[95%] xl:w-fit">
    <h3 className="pl-5 pt-2 text-[24px] text-white">Ads</h3>

    <div className="flex h-[440px] items-center gap-8 overflow-x-auto rounded-[10px] bg-black px-10 pb-10 pt-3 xl:justify-center">
      <div className="h-full w-96 shrink-0 rounded-[10px] border-[2px] border-white bg-slate-200 hover:border-secondary">
        <a href={ad1Href}>
          <img src={ad1Src} alt={ad1Alt} className="object-fit size-full rounded-[8px]" />
        </a>
      </div>

      <div className="h-full w-[1000px] shrink-0 rounded-[10px] border-[2px] border-white bg-slate-200 hover:border-secondary">
        <Link
          to={ad2Path}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
          }}
        >
          <img src={ad2Src} alt={ad2Alt} className="object-fit size-full rounded-[8px]" />
        </Link>
      </div>
    </div>
  </div>
);
export default AdRow02;
