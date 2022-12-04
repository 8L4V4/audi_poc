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
    url: "/content_types/cars_carousel_section/entries/bltc249a3d3d10085fa?environment=dev_env&include_fallback=true&include[]=tabs.slides.slide_data&include[]=tabs.slides.slide_sub_item.sub_item_data",
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

export const SpecialsPageAPI = {
  getHeaderData: (): AxiosRequestConfig => ({
    url: "content_types/specialsbanner/entries/bltb04aa584ebc391b3?environment=dev_env&include_fallback=true",
  }),
  getDropDownData: (): AxiosRequestConfig => ({
    url: "content_types/specialsdropdown/entries/blt588e2fb1dddd1c26?environment=dev_env&include_fallback=true",
  }),
  getPresentationData: (): AxiosRequestConfig => ({
    url: "content_types/specialspresentation/entries/bltc3f1f6e66c660120?environment=dev_env&include_fallback=true",
  }),
};

export const ModelsPageAPI = {
  getCarsList: (): AxiosRequestConfig => ({
    url: "content_types/all_models/entries/blt06b81d744b828f32?environment=dev_env&include_fallback=true&include[]=category.headlineimg&include[]=category.list.img&include[]=category.headline",
  }),
};

export const SportModelsPageAPI = {
  getBannerData: (): AxiosRequestConfig => ({
    url: "content_types/sportmodelsbanner/entries/blt244f0cbcfaad4e33?environment=dev_env&include_fallback=true",
  }),
  getGalleyData: (): AxiosRequestConfig => ({
    url: "content_types/sportmodelgallery/entries/blt4c8e16a43a3dcfba?environment=dev_env&include_fallback=true",
  }),
};

export const InsideAudiPageAPI = {
  getBannerData: (): AxiosRequestConfig => ({
    url: "content_types/inside_audi_banner/entries/blt2e043f18afdc0b27?environment=dev_env&include_fallback=true",
  }),
  getGalleyData: (): AxiosRequestConfig => ({
    url: "content_types/insideaudigallery/entries/bltaa5080b0ed9097a1?environment=dev_env&include_fallback=true",
  }),
};

export const SportDNAPageAPI = {
  getBannerData: (): AxiosRequestConfig => ({
    url: "content_types/sportdnabanner/entries/blt9d3d2c8b5ab5e8fd?environment=dev_env&include_fallback=true",
  }),
  getGalleryData: (): AxiosRequestConfig => ({
    url: "content_types/sportdnagallery/entries/blta26750b605a47426?environment=dev_env&include_fallback=true",
  }),
};

export const MotorSportHistoryPageAPI = {
  getBannerData: (): AxiosRequestConfig => ({
    url: "content_types/sporthistorybanner/entries/blt3585540b44aae369?environment=dev_env&include_fallback=true",
  }),
  getArticlesData: (): AxiosRequestConfig => ({
    url: "content_types/sporthistoryarticles/entries/blt4f167066528d8150?environment=dev_env&include_fallback=true",
  }),
  getLegendsData: (): AxiosRequestConfig => ({
    url: "content_types/sporthistorylegends/entries/bltbb364e1b1a1dbfc9?environment=dev_env&include_fallback=true",
  }),
  getSliderData: (): AxiosRequestConfig => ({
    url: "content_types/sporthistoryslider/entries/blt34c48bb57bb4e398?environment=dev_env&include_fallback=true",
  }),
};


