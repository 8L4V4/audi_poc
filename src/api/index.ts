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
    url: "/content_types/cars_carousel_section/entries/bltc249a3d3d10085fa?environment=dev_env&include_fallback=true&include[]=tabs.slides.slide_data",
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
};

export const SpecialsPageAPI = {
  getPageData: (): AxiosRequestConfig => ({
    url: "content_types/specialsofferspage/entries/blt2ffda8f2f346f15c?environment=dev_env&include_fallback=true",
  }),
}
