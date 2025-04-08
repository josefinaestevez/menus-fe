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
  address: string;
  currency: string;
  email: string;
  // TODO: to camelcase
  opening_hours: string;
  phone_number: string;
}

export interface SocialMedia {
  // TODO: to camelcase
  platform_name: string;
  username: string;
  url: string;
}

export interface Restaurant {
  name: string;
  menu: Menu;
  info: RestaurantInfo;
  slug: string;
  social_media: SocialMedia[];
}

export enum BackgroundType {
  White = 'white',
  Transparent = 'transparent',
}
