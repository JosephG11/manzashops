import SpotLightBadge from './SpotLightBadge';

const SpotLightBadgeContainer = ({ data }) => (
  <div className="mt-4 flex w-fit flex-col rounded-[10px] border-[5px] border-black bg-black shadow-[10px_10px_10px_black]">
    <p className="pb-2 pl-[2vh] text-[24px] text-white">SPotLight</p>

    <div className="flex h-[272px] flex-wrap gap-4 overflow-y-scroll px-[28px] pt-[22px]">
      {data.map(({ id, href, src, title }) => (
        <SpotLightBadge key={id} id={id} href={href} src={src} title={title} />
      ))}
    </div>
  </div>
);

export default SpotLightBadgeContainer;
