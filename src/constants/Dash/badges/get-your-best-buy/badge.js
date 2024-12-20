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

export const getYourBestBuy = {
  title: "Electronics",
  id: "get-your-best-buy",
  btnImg: "/manzashops/assets/dress0101.png",
  content: content,
  sections: [
    {
      id: "sec0001",
      sectionName: "mix",
      sectionImg: "/manzashops/assets/badge/YouTube Thumbnail-4.png",
      categories: section01Categories,
    },
    {
      id: "adSec0001",
      ad: true,
      sectionName: "Ads 1",
      ads: adsSection01,
    },
    {
      id: "sec0002",
      sectionName: "computers",
      sectionImg: "/manzashops/assets/badge/YouTube Thumbnail-5.png",
      categories: section02Categories,
    },
    {
      id: "sec0003",
      sectionName: "phones",
      sectionImg: "/manzashops/assets/badge/YouTube Thumbnail-6.png",
      categories: section03Categories,
    },
    {
      id: "sec0004",
      sectionName: "videogames",
      sectionImg: "/manzashops/assets/badge/YouTube Thumbnail-7.png",
      categories: section04Categories,
    },
    {
      id: "sec0005",
      sectionName: "cameras",
      sectionImg: "/manzashops/assets/badge/YouTube Thumbnail-2.png",
      categories: section05Categories,
    },
    {
      id: "sec0006",
      sectionName: "video cameras",
      sectionImg: "/manzashops/assets/badge/YouTube Thumbnail-3.png",
      categories: section06Categories,
    },
    {
      id: "sec0007",
      sectionName: "tablets",
      sectionImg: "/manzashops/assets/badge/YouTube Thumbnail-2.png",
      categories: section07Categories,
    },
    {
      id: "sec0008",
      sectionName: "memory",
      sectionImg: "/manzashops/assets/badge/YouTube Thumbnail-2.png",
      categories: section07Categories,
    },
    {
      id: "sec0009",
      sectionName: "accessories",
      sectionImg: "/manzashops/assets/badge/YouTube Thumbnail-2.png",
      categories: section07Categories,
    },
      
    {
      id: "adSec0002",
      ad: true,
      sectionName: "Ads 2",
      ads: adsSection02,
    },
  ],
};
