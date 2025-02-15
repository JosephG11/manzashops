import { heroImages, sliderData } from '../../constants/Newsletter';
import NewsletterPoster from './NewsletterPoster';
import NewsletterImageSlider from './NewsletterImageSlider';

const {
  image01: { src: image01Src, alt: image01alt },
  image02: { src: image02Src, alt: image02alt },
} = heroImages;

const NewsletterHero = () => (
  <div className="flex w-full flex-col rounded-t-[10px] bg-black lgc:flex-row">
    <NewsletterPoster src={image01Src} alt={image01alt} styles="lgc:flex hidden bg-white" />

    <NewsletterImageSlider data={sliderData} />

    <div className="flex flex-col items-center justify-around gap-6 py-6 md:flex-row">
      <NewsletterPoster src={image01Src} alt={image01alt} styles="flex lgc:hidden bg-white" />

      <NewsletterPoster src={image02Src} alt={image02alt} styles="flex lgc:hidden bg-white" />
    </div>

    <NewsletterPoster src={image02Src} alt={image02alt} styles="lgc:flex hidden bg-white" />
  </div>
);

export default NewsletterHero;
