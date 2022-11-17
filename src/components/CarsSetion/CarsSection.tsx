import React, { useEffect, useState } from "react";
import { useApi } from "hooks/useApi";
import { MainPageAPI } from "api/mainPage";
import { iLinkField } from "../../types/fields";

// interface iTabData {
//   slides: Array<iSlide>;
//   tab_title: string;
//   order: number;
// }

// interface iSlide {
//   slide: {
//     slide_active_image: iPictureField;
//     slide_image: iPictureField;
//     slide_items: Array<iSlideItem>;
//     order: number;
//   };
// }

// interface iSlideItem {
//   slide_item: {
//     slide_item_image: iPictureField;
//     slide_item_link: iLinkField;
//     order: number;
//   };
// }

export const CarsSection = () => {
  // const [data, setData] = useState<iSlidesData>();
  const { apiCall } = useApi();

  useEffect(() => {
    apiCall(MainPageAPI.getModels()).then(({ data }) => {
      console.log(
        "%c DATA",
        "color: orange; font-size: 16px; font-weight: bold; border-left: 5px solid orange",
        data
      );
    });
  });

  return (
    <div className="CarsSection">
      <div className="CarsSection-tabs">
        <button className="CarsSection-tabs-item">Models</button>
        <button className="CarsSection-tabs-item">Body Style</button>
      </div>
      <div className="CarsSection-carousel">
        <div className="CarsSection-carousel-controls">
          <button className="CarsSection-carousel-control-btn prev">
            left
          </button>
          <button className="CarsSection-carousel-control-btn next">
            right
          </button>
        </div>
        <div className="CarsSection-carousel-slides">
          <div className="CarsSection-carousel-slide">asd</div>
          <div className="CarsSection-carousel-slide">asd</div>
          <div className="CarsSection-carousel-slide">asd</div>
          <div className="CarsSection-carousel-slide">asd</div>
          <div className="CarsSection-carousel-slide">asd</div>
          <div className="CarsSection-carousel-slide">asd</div>
          <div className="CarsSection-carousel-slide">asd</div>
          <div className="CarsSection-carousel-slide">asd</div>
          <div className="CarsSection-carousel-slide">asd</div>
        </div>
      </div>
    </div>
  );
};
