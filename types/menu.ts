export interface Dish {
  name: string;
  description: string;
  price: number;
  currency: string;
  image?: string;
  slug: string;
}

export interface Category {
  name: string;
  dishes?: Dish[];
  slug: string;
}

export interface Menu {
  categories: Category[];
}

export interface RestaurantInfo {
  currency: string;
}

export interface Restaurant {
  name: string;
  menu: Menu;
  info: RestaurantInfo;
  slug: string;
}

export enum BackgroundType {
  White = 'white',
  Transparent = 'transparent',
}
