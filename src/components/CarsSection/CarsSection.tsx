import React, { useEffect, useRef, useState } from "react";
import { MainPageAPI } from "api";
import { useApi } from "hooks/useApi";
import Image from "next/image";
import Link from "next/link";
import { iLinkField, iPictureField } from "../../types/fields";
import {ArrowLeftIcon} from "../Icon/ArrowLeftIcon"
import {ArrowRightIcon} from "../Icon/ArrowRightIcon"
import {Cross} from "../Icon/Cross"

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
  const [scrolledTo, setScrolledTo] = useState(0);
  const timeout = useRef<ReturnType<typeof setTimeout>>();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [showSubItems, setShowSubItems] = useState(false);

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

  function switchActiveSlide(data: iSlideData | undefined) {
    setShowSubItems(!!data );
    setActiveSlide(data);
  }

  function scroll (dir: "prev" | "next") {
    const containerWIdth: number = carouselRef && carouselRef.current?.parentElement?.offsetWidth || 0;
    const sliderWidth = carouselRef?.current?.scrollWidth || 0;

    if(!containerWIdth) return;
    
    let scrollWidth = 0;
    
    if(dir === "next"){
      scrollWidth = (scrolledTo + containerWIdth) < sliderWidth ? (scrolledTo + containerWIdth) : sliderWidth - containerWIdth ;
      carouselRef?.current?.scrollTo({left: scrollWidth, behavior: "smooth"});
      setScrolledTo(scrollWidth)
    }
    
    if(dir === "prev") {
      scrollWidth = (scrolledTo - containerWIdth) < 0 ? 0 : (scrolledTo - containerWIdth);
      carouselRef?.current?.scrollTo({left: scrollWidth, behavior: "smooth"});
      setScrolledTo(scrollWidth);
    }
  }

  const handleScroll = (e: React.MouseEvent) => {
    timeout.current && clearTimeout(timeout.current);
    timeout.current = setTimeout( () => setScrolledTo(e.target.scrollLeft), 200 );
  }

  console.log("%c tabs", "color: orange; font-size: 16px; font-weight: bold; border-left: 5px solid orange", tabsData);

  return (
    <div className="CarsSection">
      <div className="CarsSection-tabs">
        {
          Array.isArray(tabsData) && tabsData.sort(orderItems).map(tabData => (
            <button
              className={`CarsSection-tabs-item ${tabData.title === activeTab?.title ? "active" : ""}`}
              onClick={() => switchActiveTab(tabData.title)}
              key={tabData.title}
            >
              {tabData.title}
            </button>
          ))
        }
      </div>
      <div className="CarsSection-carousel">
        <button 
          className={`CarsSection-carousel-control-btn prev ${scrolledTo === 0 ? "hide" : ""}`} 
          onClick={() => scroll("prev")}
        > 
          <ArrowLeftIcon />
        </button>
        <div className="CarsSection-carousel-container" ref={carouselRef} onScroll={handleScroll}>
          {activeTab && 
            activeTab?.slides.sort(orderItems).map((slide_data) => {
            const [data] = slide_data.slide_data;
            return (
              <button
                key={data?.title}
                className={`CarsSection-carousel-slide ${slide_data === activeSlide ? "active" : ""}`}
                onClick={() => switchActiveSlide(slide_data !== activeSlide ? slide_data : undefined)}
              >
                <Image
                  className="CarsSection-carousel-slide-img"
                  src={data?.img_sm?.url}
                  alt={data?.title}
                  width={206}
                  height={88}
                />
                <Image
                  className="CarsSection-carousel-slide-img alt"
                  src={data?.alt_img?.url}
                  alt={data?.title}
                  width={206}
                  height={88}
                />
                <span className="CarsSection-carousel-slide-title"> {data?.title} </span>
              </button>
            );
          })
          }
        </div>
        <button 
          className={`CarsSection-carousel-control-btn next 
            ${scrolledTo >= carouselRef?.current?.scrollWidth - carouselRef?.current?.offsetWidth ? "hide" : ""}
          `} 
          onClick={() => scroll("next")}
        > 
          <ArrowRightIcon />
        </button>
      </div>
      {
        <div className={`CarsSection-carousel-subitems ${showSubItems ? "showing" : ""}`}>
          <div className="CarsSection-carousel-subitems-closeBtn-block">
            <button className="CarsSection-carousel-subitems-closeBtn" onClick={() => switchActiveSlide(undefined)}> <Cross /> </button>
            <span className="CarsSection-carousel-subitems-closeBtn-text">{activeSlide?.slide_data[0].title}</span>
          </div>
          <div className="CarsSection-carousel-subitems-list">
            {activeSlide?.slide_sub_item.sort(orderItems).map(({ sub_item_data }, i) => {
              const [data] = sub_item_data;
              return (
                <Link 
                  key={i} 
                  href={data.link.href} 
                  className="CarsSection-carousel-subitems-link" 
                >
                  <Image src={data?.img_sm?.url} alt={data.link.title} width={225} height={97} />
                  <span className="CarsSection-carousel-subitems-link-text">{data.link.title}</span>
                </Link>
              );
            })}
          </div>
        </div>  
      }
    </div>
  );
};
