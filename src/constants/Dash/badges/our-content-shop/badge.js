import { section01Categories } from "./sections/section01/section01Categories";
import { section02Categories } from "./sections/section02/section02Categories";
import { section03Categories } from "./sections/section03/section03Categories";
import { section04Categories } from "./sections/section04/section04Categories";
import { section05Categories } from "./sections/section05/section05Categories";
import { section06Categories } from "./sections/section06/section06Categories";
import { section07Categories } from "./sections/section07/section07Categories";
import { content } from "./content";
import { adsSection01 } from "./sections/adsSection01";
import { adsSection02 } from "./sections/adsSection02";

export const ourContentShop = {
  title: "Top Deals Today",
  id: "our-content-shop",
  btnImg: "/manzashops/assets/de.png",
  content: content,
  sections: [
    {
      id: "sec0001",
      sectionName: "mix",
      sectionImg: "/manzashops/assets/icons/pandora.webp",
      categories: section01Categories,
    },
    {
      id: "sec0002",
      sectionName: "electronics",
      sectionImg: "/manzashops/assets/badge/YouTube Thumbnail-5.png",
      categories: section02Categories,
    },
    {
      id: "adSec0001",
      ad: true,
      sectionName: "Ads 1",
      ads: adsSection01,
    },
    {
      id: "sec0003",
      sectionName: "Kitchen",
      sectionImg: "/manzashops/assets/badge/YouTube Thumbnail-6.png",
      categories: section03Categories,
    },
    {
      id: "sec0004",
      sectionName: "Accesories",
      sectionImg: "/manzashops/assets/badge/YouTube Thumbnail-7.png",
      categories: section04Categories,
    },
    {
      id: "adSec0002",
      ad: true,
      sectionName: "washer/dryers",
      ads: adsSection02,
    },
    {
      id: "sec0005",
      sectionName: "shirts",
      sectionImg: "/manzashops/assets/badge/YouTube Thumbnail-2.png",
      categories: section05Categories,
    },
    {
      id: "sec0006",
      sectionName: "pants",
      sectionImg: "/manzashops/assets/badge/YouTube Thumbnail-3.png",
      categories: section06Categories,
    },
    {
      id: "sec0007",
      sectionName: "jackets",
      sectionImg: "/manzashops/assets/badge/YouTube Thumbnail-2.png",
      categories: section07Categories,
    },
    {
      id: "sec0007",
      sectionName: "jackets",
      sectionImg: "/manzashops/assets/badge/YouTube Thumbnail-2.png",
      categories: section07Categories,
    },


  ],
};