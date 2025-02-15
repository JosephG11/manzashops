const SpotLightBadge = ({ href, src, title }) => (
  <a className="mb-8 flex size-[80px] flex-col gap-1 capitalize text-white" href={href}>
    <div className="rounded-[10px] border-[1px] border-black bg-[#800080] text-white shadow-[2px_2px_5px_white] hover:shadow-[2px_2px_5px_#60b3d1]">
      <img src={src} className="object-fit size-[80px] rounded-[10px]" />
    </div>

    <p>{title}</p>
  </a>
);

export default SpotLightBadge;
