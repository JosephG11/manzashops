const AdRow04 = ({ ad1Href, ad1Src, ad1Alt, ad2Href, ad2Src, ad2Alt }) => (
  <div className="w-[99%] rounded-[10px] bg-black md:w-[95%] xl:w-fit">
    <h3 className="pl-5 pt-2 text-[24px] text-white">Ads</h3>

    <div className="flex h-[440px] items-center gap-8 overflow-x-auto px-10 pb-10 pt-3 xl:justify-center">
      <div className="h-full w-[600px] shrink-0 rounded-[10px] border-[2px] border-white bg-slate-200 hover:border-secondary">
        <a href={ad1Href}>
          <img src={ad1Src} alt={ad1Alt} className="object-fit size-full rounded-[8px]" />
        </a>
      </div>

      <div className="h-full w-[600px] shrink-0 rounded-[10px] border-[2px] border-white bg-slate-200 hover:border-secondary">
        <a href={ad2Href}>
          <img src={ad2Src} alt={ad2Alt} className="object-fit size-full rounded-[8px]" />
        </a>
      </div>
    </div>
  </div>
);

export default AdRow04;
