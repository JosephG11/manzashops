import { sliderData } from '../../constants/Listings/ListingsHero';
import HeroImageSlider from '../HeroImageSlider';
import LanguagesMenu from '../LanguagesMenu';
import { langItems } from '../../constants';

const ListingsHero = () => (
  <div className="flex w-full flex-col lg:flex-row">
    <LanguagesMenu data={langItems} />
    <HeroImageSlider data={sliderData} />
  </div>
);

export default ListingsHero;
