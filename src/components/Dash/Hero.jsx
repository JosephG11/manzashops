import HeroImageSlider from '../HeroImageSlider';
import LanguagesMenu from '../LanguagesMenu';
import { langItems } from '../../constants';
import { sliderData } from '../../constants/Dash/hero';

const Hero = () => {
  return (
    <div className="flex w-full flex-col lg:flex-row">
      <LanguagesMenu data={langItems} />
      <HeroImageSlider data={sliderData} />
    </div>
  );
};

export default Hero;
