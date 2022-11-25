export interface iCar {
  hybrid: boolean;
  image_description: string;
  links: { title: string; href: string }[];
  name: string;
  price: string;
  year: string;
  price_link: { title: string; href: string }[];
  slug: string;
  image: { url: string };
  alt_image: { url: string };
  description: string;
  info_list: iInfoItem[];
  mspr: string;
  type: "GT" | "HYBRID";
}

export interface iInfoItem {
  title: string;
  count: number;
  unit: string;
  text: string;
  link_title: string;
  description: string;
  description_title: string;
}

export interface iElectricEntry {
  footer_background: { url: string };
  hero_background: { url: string };
  gt_background: { url: string };
  gt_additional_background: { url: string };
  car_slugs: { slug: string }[];
  car_list: iCar[];
}

export interface iCarInfo {
  description_title?: string;
  description: string;
}
