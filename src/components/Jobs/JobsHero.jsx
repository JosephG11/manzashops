import { sliderData } from '../../constants/Jobs';
import HeroImageSlider from '../HeroImageSlider';
import LanguagesMenu from '../LanguagesMenu';
import { langItems } from '../../constants';

const JobsHero = () => {
  return (
    <div className="flex w-full flex-col lg:flex-row">
      <LanguagesMenu data={langItems} />
      <HeroImageSlider data={sliderData} />
    </div>
  );
};

export default JobsHero;
