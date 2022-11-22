import { AxiosRequestConfig } from "axios";
import { uids } from "./uids";

export const MainPageAPI = {
  getNav: (): AxiosRequestConfig => ({
    url: "/content_types/nav_manu/entries/blt8dc883599851a038?environment=dev_env&include_fallback=true",
  }),
  getHeroBanner: (): AxiosRequestConfig => ({
    url: "/content_types/main_page_hero_banner/entries/blt3085e48965238c9f?environment=dev_env&include_fallback=true",
  }),
  getModels: (): AxiosRequestConfig => ({
    // url: "/content_types/cars_carousel_section/entries/bltc249a3d3d10085fa?environment=dev_env&include_fallback=true&include[]=tabs.tab.tab_item.tab_item.data&include[]=tabs.tab.tab_item.tab_item.data.sub_items.sub_items.items"
    url: "/content_types/cars_carousel_section/entries/bltc249a3d3d10085fa?environment=dev_env&include_fallback=true&include[]=tabs.tab.tab_item.tab_item.data&include[]=custom.tabs.items.sub_items",
    // url: "/content_types/cars_carousel_section/entries/bltc249a3d3d10085fa?environment=dev_env&include[]=custom.tabs.items.sub_items"
  }),
  getCTA: (): AxiosRequestConfig => ({
    url: "/favorites",
  }),
  getCarSections: (): AxiosRequestConfig => ({
    url: "/favorites",
  }),
  getGroups: (): AxiosRequestConfig => ({
    url: "/favorites",
  }),
  getFullNav: (): AxiosRequestConfig => ({
    url: "/favorites",
  }),
  getSocials: (): AxiosRequestConfig => ({
    url: "/favorites",
  }),
  getLegacyNav: (): AxiosRequestConfig => ({
    url: "/favorites",
  }),
  getFooterData: (): AxiosRequestConfig => ({
    url: `/content_types/${uids.footer.content_type_uid}/entries/${uids.footer.entry_uid}`,
  }),
  getElectricCarsData: (): AxiosRequestConfig => ({
    url: `/content_types/${uids.electic_cars.content_type_uid}/entries/${uids.electic_cars.entry_uid}?environment=dev_env`,
  }),
};
