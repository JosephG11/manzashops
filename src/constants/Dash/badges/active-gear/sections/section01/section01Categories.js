import { group01 } from './categoryProducts/group01';
import { group02 } from './categoryProducts/group02';
import { group03 } from './categoryProducts/group03';
import { group04 } from './categoryProducts/group04';
import { group05 } from './categoryProducts/group05';

export const section01Categories = [
  {
    id: 'cat0001',
    categoryTitle: 'Trending',
    products: group01,
  },
  {
    id: 'cat0002',
    categoryTitle: 'Best Sellers',
    products: group02,
  },
  {
    id: 'cat0003',
    categoryTitle: 'New Arrivals',
    products: group03,
  },
  {
    id: 'cat0004',
    categoryTitle: 'Staff Picks',
    products: group04,
  },
  {
    id: 'cat0005',
    categoryTitle: 'Limited Time Offers',
    products: group05,
  },
];
