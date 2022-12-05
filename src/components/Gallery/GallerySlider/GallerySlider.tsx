import { GallerySportPageAPI } from "api";
import { useHttp } from "hooks/useHttp";
import { FC, useEffect, useState } from "react";

interface iGalleryData {
  title: string;
  img: {url: string};
}

export const GallerySlider: FC = () => {
  const {call, data} = useHttp();
  const galleryData = data?.data?.entry?.list as iGalleryData[];
  const [currentSlide, setCurrentSlide] = useState();
  
  useEffect(() => {
    call(GallerySportPageAPI.getGalleryData())
    .then(() => setCurrentSlide(data?.data?.entry?.list?.[0]?.img?.url))
  }, []);

  if(!data) return null;

  return (
    <div className="GallerySlider">
      <div className="GallerySlider-slide">
        <img src={currentSlide} alt="slide_img" />
      </div>

      <div className="GallerySlider-content">
        <div className="GallerySlider-list"></div>

        <p className="GallerySlider-text"></p>
      </div>
    </div>
  );
};