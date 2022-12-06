import { AxiosRequestConfig } from "axios";
import { uids } from "./uids";

export const MainPageAPI = {
  getNav: (): AxiosRequestConfig => ({
    url: "/content_types/nav_manu/entries/blt8dc883599851a038?include_fallback=true",
    // url: "/content_types/nav_manu/entries/blt8dc883599851a038?environment=dev_env&include_fallback=true",
  }),
  getHeroBanner: (): AxiosRequestConfig => ({
    url: "/content_types/main_page_hero_banner/entries/blt3085e48965238c9f?include_fallback=true",
    // url: "/content_types/main_page_hero_banner/entries/blt3085e48965238c9f?environment=dev_env&include_fallback=true",
  }),
  getModels: (): AxiosRequestConfig => ({
    url: "/content_types/cars_carousel_section/entries/bltc249a3d3d10085fa?include_fallback=true&include[]=tabs.slides.slide_data&include[]=tabs.slides.slide_sub_item.sub_item_data",
    // url: "/content_types/cars_carousel_section/entries/bltc249a3d3d10085fa?environment=dev_env&include_fallback=true&include[]=tabs.slides.slide_data&include[]=tabs.slides.slide_sub_item.sub_item_data",
  }),
  getCTA: (): AxiosRequestConfig => ({
    url: "/content_types/cta_section/entries/blt34acc48518d55a58?include_fallback=true",
    // url: "/content_types/cta_section/entries/blt34acc48518d55a58?environment=dev_env&include_fallback=true",
  }),
  getAllPhotoTextBlocks: (): AxiosRequestConfig => ({
    url: "/content_types/photo_text_block/entries?include_fallback=true",
    // url: "/content_types/photo_text_block/entries?environment=dev_env&include_fallback=true",
  }),
  getMainPageAdHeroData: (): AxiosRequestConfig => ({
    url: "/content_types/main_page_ad_hero_banner/entries/blt048486333eaee9fb?include_fallback=true",
    // url: "/content_types/main_page_ad_hero_banner/entries/blt048486333eaee9fb?environment=dev_env&include_fallback=true",
  }),
  getAudiFeatures: (): AxiosRequestConfig => ({
    url: "/content_types/audi_feautures/entries/bltbcefbffe5bdb480a?include_fallback=true",
    // url: "/content_types/audi_feautures/entries/bltbcefbffe5bdb480a?environment=dev_env&include_fallback=true",
  }),
  getFooterData: (): AxiosRequestConfig => ({
    url: `/content_types/${uids.footer.content_type_uid}/entries/${uids.footer.entry_uid}`,
    // url: `/content_types/${uids.footer.content_type_uid}/entries/${uids.footer.entry_uid}`,
  }),
  getElectricCarsData: (): AxiosRequestConfig => ({
    url: `/content_types/${uids.electic_cars.content_type_uid}/entries/${uids.electic_cars.entry_uid}`,
    // url: `/content_types/${uids.electic_cars.content_type_uid}/entries/${uids.electic_cars.entry_uid}?environment=dev_env`,
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
