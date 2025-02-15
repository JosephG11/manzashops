import { sliderData } from '../../constants/Deals';
import HeroImageSlider from '../HeroImageSlider';
import LanguagesMenu from '../LanguagesMenu';
import { langItems } from '../../constants';

const DealsHero = () => {
  return (
    <div className="flex w-full flex-col lg:flex-row">
      <LanguagesMenu data={langItems} />
      <HeroImageSlider data={sliderData} />
    </div>
  );
};

export default DealsHero;
