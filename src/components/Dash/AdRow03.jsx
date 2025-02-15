const AdRow03 = ({ data }) => (
  <div className="w-[99%] rounded-[10px] bg-black md:w-[95%] xl:w-[1312px]">
    <h3 className="pl-5 pt-2 text-[24px] text-white">Ads</h3>

    <div className="flex h-[440px] items-center justify-between gap-8 overflow-x-auto px-10 pb-10 pt-3">
      {data.map(({ id, href, src, alt }) => (
        <div
          key={id}
          className="h-full w-[1200px] shrink-0 rounded-[10px] border-[2px] border-white bg-slate-200 hover:border-secondary"
        >
          <a href={href}>
            <img src={src} alt={alt} className="object-fit size-full rounded-[8px]" />
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default AdRow03;
