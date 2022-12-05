import { FC, useEffect, useState } from "react";
import { GallerySportPageAPI } from "api";
import { useHttp } from "hooks/useHttp";
import { Icon } from "components/Icon/Icon";

interface iGalleryData {
  title: string;
  img: {url: string};
};

export const GallerySlider: FC = () => {
  const {call, data} = useHttp();
  const galleryData = data?.data?.entry?.list as iGalleryData[];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [toggler, setToggler] = useState(false);
  
  useEffect(() => {
    call(GallerySportPageAPI.getGalleryData())
  }, []);

  if(!data) return null;

  return (
    <div className="GallerySlider">
      <div 
        className="GallerySlider-slide" 
        style={{backgroundImage: `url("${galleryData[currentSlide].img?.url}")`}}
      >
        <button 
          className={`GallerySlider-plus ${toggler ? "active" : ""}`} 
          onClick={() => setToggler(pv => !pv)}
        >
          <Icon name="plus" />
        </button>

        <button className="GallerySlider-prev" onClick={() => setCurrentSlide(pv => !!pv ? --pv : pv )}>
          <Icon name="arrow-left" />
        </button>

        <button className="GallerySlider-next" onClick={() => setCurrentSlide(pv => pv + 1 < galleryData.length ? ++pv : pv)}>
          <Icon name="arrow-right" />
        </button>
      </div>

      <div className="GallerySlider-content">
        {!toggler && (
          <div className="GallerySlider-list">
            {galleryData?.map(({img}, idx) => (
              <button 
                className={`GallerySlider-list-item-btn ${currentSlide === idx ? "active" : ""}`}
                key={img?.url} 
                onClick={() => setCurrentSlide(idx)}
              >
                <img src={img?.url} className="GallerySlider-list-item" />
              </button>
            ))}
          </div>
        )}

        {toggler && <p className="GallerySlider-text">{galleryData[currentSlide].title}</p>}
      </div>
    </div>
  );
};