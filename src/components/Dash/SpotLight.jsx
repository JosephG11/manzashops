import SpotLightAdCard from './SpotLightAdCard';
import SpotLightBadgeContainer from './SpotLightBadgeContainer';
import { itemData } from '../../constants/Dash';

const SpotLight = () => {
  return (
    <section className="flex w-full flex-col gap-10 bg-[#121212] px-[6vh] pt-[2vh]">
      <SpotLightBadgeContainer data={itemData} />

      <div className="flex flex-col items-center gap-10 px-8 lg:flex-row lg:justify-around lg:gap-8 xl:px-36">
        <SpotLightAdCard
          title={'Get A Domain'}
          href={'https://www.domain.com/my-account/login'}
          src={'/manzashops/assets/domain.jpeg'}
          alt={'domain.com'}
        />

        <SpotLightAdCard
          title={'Build Ur own site'}
          href={'https://webflow.com/'}
          src={'/manzashops/assets/webflow.jpeg'}
          alt={'webflow'}
        />
        <SpotLightAdCard
          title={'Intorducing   M.B.A.B.A'}
          href={'https://webflow.com/'}
          src={'/manzashops/assets/baba.png'}
          alt={'webflow'}
        />
      </div>
    </section>
  );
};

export default SpotLight;
