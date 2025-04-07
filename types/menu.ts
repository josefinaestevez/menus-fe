export interface Dish {
  name: string;
  description: string;
  price: number;
  currency: string;
  image?: string;
}

export interface Category {
  name: string;
  dishes?: Dish[];
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
}

export enum BackgroundType {
  White = 'white',
  Transparent = 'transparent',
}
