import { section01Categories } from './sections/section01/section01Categories';
import { section02Categories } from './sections/section02/section02Categories';
import { section03Categories } from './sections/section03/section03Categories';
import { section04Categories } from './sections/section04/section04Categories';
import { section05Categories } from './sections/section05/section05Categories';
import { section06Categories } from './sections/section06/section06Categories';
import { section07Categories } from './sections/section07/section07Categories';
import { content } from './content';
import { adSection01 } from './sections/adSection01/adSection01';
import { adSection02 } from './sections/adSection02/adSection02';

export const decorationsSupplies = {
  title: 'Decorations Supplies',
  id: 'decorations-supplies',
  btnImg: '/manzashops/assets/ad/decorations.png',
  content: content,
  sections: [
    {
      id: 'sec0001',
      sectionName: 'Deals',
      sectionImg: '/manzashops/assets/badge/YouTube Thumbnail-4.png',
      categories: section01Categories,
    },
    {
      id: 'adSec0001',
      ad: true,
      sectionName: 'Ads 1',
      ads: adSection01,
    },
    {
      id: 'sec0001',
      sectionName: 'Lamps',
      sectionImg: '/manzashops/assets/badge/YouTube Thumbnail-4.png',
      categories: section01Categories,
    },
    {
      id: 'sec0002',
      sectionName: 'pillows',
      sectionImg: '/manzashops/assets/badge/YouTube Thumbnail-5.png',
      categories: section02Categories,
    },
    {
      id: 'sec0003',
      sectionName: 'Blankets',
      sectionImg: '/manzashops/assets/badge/YouTube Thumbnail-6.png',
      categories: section03Categories,
    },
    {
      id: 'sec0004',
      sectionName: 'curtains & Blinds',
      sectionImg: '/manzashops/assets/badge/YouTube Thumbnail-7.png',
      categories: section04Categories,
    },
    {
      id: 'sec0005',
      sectionName: 'Cloths',
      sectionImg: '/manzashops/assets/badge/YouTube Thumbnail-2.png',
      categories: section05Categories,
    },
    {
      id: 'sec0006',
      sectionName: 'table decorations',
      sectionImg: '/manzashops/assets/badge/YouTube Thumbnail-3.png',
      categories: section06Categories,
    },
    // {
    //   id: "sec0007",
    //   sectionName: "kitchen Supplies",
    //   sectionImg: "/manzashops/assets/badge/YouTube Thumbnail-2.png",
    //   categories: section07Categories,
    // },

    {
      id: 'adSec0002',
      ad: true,
      sectionName: 'Ads 2',
      ads: adSection02,
    },
  ],
};
