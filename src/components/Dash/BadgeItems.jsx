const BadgeItems = ({ data }) => (
  <>
    {data.map((item, index) => (
      <a
        key={index}
        className="mb-11 flex h-[60px] w-[60px] flex-col gap-1 capitalize"
        href={
          item.href ||
          'https://www.aldoshoes.com/us/en_US?gclsrc=aw.ds&&utm_source=google&utm_medium=cpc&utm_campaign=aldo_us_en_search_brand_nogender_core&utm_content=653404197253&utm_term=aldo&device=c&network=g&placement=&gad_source=1&gclid=EAIaIQobChMI1_jp_KaxiQMVrm9HAR0_Sj1YEAAYASAAEgKjY_D_BwE'
        }
      >
        <div className="rounded-[10px] border-[1px] border-black bg-[#800080] text-white shadow-[2px_2px_5px_white] hover:shadow-[2px_2px_5px_#60b3d1]">
          <img
            src={item.src || '/manzashops/assets/aldo.jpeg'}
            className="object-fit size-[60px] rounded-[10px]"
          />
        </div>
        {item.name || 'aldo'}
      </a>
    ))}
  </>
);

export default BadgeItems;
