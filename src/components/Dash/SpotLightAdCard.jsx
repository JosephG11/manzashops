const SpotLightAdCard = ({ title, href, src, alt }) => (
  <div className="flex h-[350px] w-[382px] flex-col items-center rounded-[10px] border-[5px] border-black bg-black text-white">
    <p className="bg-black pb-6 text-[34px] text-white">{title}</p>

    <a href={href}>
      <img src={src} alt={alt} className="object-fit h-[265px] rounded-b-md" />
    </a>
  </div>
);

export default SpotLightAdCard;
