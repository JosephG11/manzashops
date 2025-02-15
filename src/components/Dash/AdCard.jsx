const AdCard = ({ href, img, alt }) => {
  return (
    <div className="h-80 w-[419px] shrink-0 border-[2px] border-white hover:border-secondary">
      <a href={href}>
        <img src={img} alt={alt} className="size-full object-fill" />
      </a>
    </div>
  );
};

export default AdCard;
