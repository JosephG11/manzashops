import { section01Categories } from './sections/section01/section01Categories';
import { section02Categories } from './sections/section02/section02Categories';
import { section03Categories } from './sections/section03/section03Categories';
import { section04Categories } from './sections/section04/section04Categories';
import { section05Categories } from './sections/section05/section05Categories';
import { section06Categories } from './sections/section06/section06Categories';
import { section07Categories } from './sections/section07/section07Categories';

export const listingSectionData = {
  title: 'Listings',
  id: 'listings',
  sections: [
    {
      id: 'sec0001',
      sectionName: 'Developers',
      sectionImg: '/manzashops/assets/badge/YouTube Thumbnail-4.png',
      categories: section01Categories,
    },
    {
      id: 'sec0002',
      sectionName: 'Designers',
      sectionImg: '/manzashops/assets/badge/YouTube Thumbnail-5.png',
      categories: section02Categories,
    },
    {
      id: 'sec0003',
      sectionName: 'Photographers',
      sectionImg: '/manzashops/assets/badge/YouTube Thumbnail-6.png',
      categories: section03Categories,
    },
    {
      id: 'sec0004',
      sectionName: 'Writers',
      sectionImg: '/manzashops/assets/badge/YouTube Thumbnail-7.png',
      categories: section04Categories,
    },
    {
      id: 'sec0005',
      sectionName: 'Marketing',
      sectionImg: '/manzashops/assets/badge/YouTube Thumbnail-2.png',
      categories: section05Categories,
    },
    {
      id: 'sec0006',
      sectionName: 'Influencers',
      sectionImg: '/manzashops/assets/badge/YouTube Thumbnail-3.png',
      categories: section06Categories,
    },
    {
      id: 'sec0007',
      sectionName: 'Project Managers',
      sectionImg: '/manzashops/assets/badge/YouTube Thumbnail-2.png',
      categories: section07Categories,
    },
  ],
};
