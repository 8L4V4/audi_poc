import React, { useEffect, useState } from "react";
import { useApi } from "hooks/useApi";
import { MainPageAPI } from "api";
import { iLinkField, iPictureField } from "../../types/fields";
import Image from "next/image";
import Link from "next/link";


interface iTabData {
  title: string,
  slides: Array<iSlideData>,
  order: number,
}

interface iSlideData {
  order: number,
  slide_data: Array<iSlideItemData>,
  slide_sub_item: Array<{
    order: number,
    sub_item_data: Array<iSlideItemData>
  }>,
}

interface iSlideItemData {
  alt_img: iPictureField,
  img_sm: iPictureField,
  img_md: iPictureField,
  img_lg: iPictureField,
  title: string,
  link: iLinkField,
}

export const CarsSection = () => {
  const { apiCall } = useApi();
  const [tabsData, setTabsData] = useState<Array<iTabData>>();
  const [activeTab, setActiveTab] = useState<iTabData>();
  const [activeSlide, setActiveSlide] = useState<iSlideData>();

  useEffect(() => {
    apiCall(MainPageAPI.getModels()).then(({ data: { entry: { tabs } } }) => {
      setTabsData(tabs);
      Array.isArray(tabs) && setActiveTab(tabs[0]);
    });
  }, []);

  function orderItems(a: any, b: any) {
    return +a.order - +b.order;
  }

  function switchActiveTab(tabName: string) {
    let active: iTabData | undefined;

    active = Array.isArray(tabsData)
      ? tabsData.find(({ title }) => title === tabName)
      : undefined;

    setActiveTab(active);
  }

  function switchActiveSlide(data: iSlideData | undefined) { setActiveSlide(data) };

  return (
    <div className="CarsSection">
      <div className="CarsSection-tabs">
        {
          Array.isArray(tabsData) && tabsData.sort(orderItems).map(tabData => (
            <button
              className={`CarsSection-tabs-item ${tabData.title === activeTab?.title ? "active" : ""}`}
              onClick={() => switchActiveTab(tabData.title)}>
              {tabData.title}
            </button>
          ))
        }
      </div>
      <div className="CarsSection-carousel">
        
          <button className="CarsSection-carousel-control-btn prev"> left </button>
          <div className="CarsSection-carousel-slides">
            <div className="CarsSection-carousel-slides-container">
              {activeTab && activeTab?.slides.sort(orderItems).map((slide_data) => {
                const [data] = slide_data.slide_data;
                return (
                  <button
                    className={`CarsSection-carousel-slide ${slide_data === activeSlide ? "active" : ""}`}
                    onClick={() => switchActiveSlide(slide_data !== activeSlide ? slide_data : undefined)}
                  >
                    <Image
                      className="CarsSection-carousel-slide-img"
                      src={data?.img_sm?.url}
                      alt={data?.title}
                      width={291}
                      height={125}
                    />
                    <Image
                      className="CarsSection-carousel-slide-img alt"
                      src={data?.alt_img?.url}
                      alt={data?.title}
                      width={291}
                      height={125}
                    />
                    <span className="CarsSection-carousel-slide-title"> {data?.title} </span>
                  </button>
                );
              })
              }
            </div>
          </div>
          <button className="CarsSection-carousel-control-btn next"> right </button>
        
        <div className="CarsSection-carousel-subitems">
          {activeSlide && activeSlide?.slide_sub_item.sort(orderItems).map(({ sub_item_data }) => {
            const [data] = sub_item_data;
            return (
              <Link href={data.link.href} className="CarsSection-carousel-subitem-link">
                <Image src={data.img_sm.url} alt={data.link.title} width={128} height={55} />
                {data.link.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
