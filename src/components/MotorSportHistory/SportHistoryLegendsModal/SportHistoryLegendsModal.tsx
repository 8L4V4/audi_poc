import { FC, MutableRefObject, useEffect, useRef, useState } from "react";
import { MotorSportHistoryPageAPI } from "api";
import { Icon } from "components/Icon/Icon";
import { Modal } from "components/Modal/Modal";
import {useDownloadImage } from "helpers/useDownloadImage";
import { useHttp } from "hooks/useHttp";
import { iSportHistoryLegendsItem } from "../SportHistoryLegendsItem/SportHistoryLegendsItem";

interface iSportHistoryLegendsModal {
  currentSlide: string;
  onClose: () => void;
  setSlide: (text: string) => void;
};

interface sliderDataWithCount extends Omit<iSportHistoryLegendsItem, "showModal">{
  count: number;
};

export const SportHistoryLegendsModal: FC<iSportHistoryLegendsModal> = ({currentSlide, onClose, setSlide}) => {
  const {call, data} = useHttp();
  const [modalWide, setModalWide] = useState("");

  const infoRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const containerRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const SliderData = data?.data?.entry?.sliderdata as Omit<iSportHistoryLegendsItem, "showModal">[];
  const arr = SliderData?.map((item, idx) => ({...item, count: idx + 1})) as sliderDataWithCount[]
  
  useEffect(() => {
    call(MotorSportHistoryPageAPI.getSliderData())
    .catch(err => {
      console.log(
        "%c Error getting { Sport History Slider } Data",
        "color: red; font-size: 16px; font-weight: bold; border-left: 5px solid red",
        err
      );
    })
  }, []);

  const calcIdx = () => {
    let idx;

    SliderData.map(({text}, idx) => {
      if(text === currentSlide) return idx;
      return undefined;
    }).forEach(item => {
      if(item === 0 || !!item === true) idx = item;
    });

    return idx;
  }

  const onPrevBtn = () => {
    const idx = calcIdx()

    if(idx === 0 || typeof idx === "undefined") return;
    
    setSlide(SliderData[idx - 1]?.text)
  };

  const onNextBtn = () => {
    const idx = calcIdx()
    
    if(typeof idx === "undefined" || idx + 1 >= SliderData?.length) return;
    
    setSlide(SliderData[idx + 1]?.text)
  };

  const onWideScreen = () => {
    if(!infoRef.current || !containerRef.current) return ;
    infoRef.current.classList.toggle("active");
    containerRef.current.classList.toggle("active");
    setModalWide(infoRef.current.classList.contains("active") ? "active" : "")
  };

  if(!data) return null;

  const slide = SliderData?.find(({text}) => text === currentSlide);

  return (
    <Modal show={!!currentSlide} onClose={() => setSlide("")} className={`SportHistoryLegends-modal ${modalWide}`}>
      <div className="SportHistoryLegendsModal" ref={containerRef}>
        <div className="SportHistoryLegendsModal-slider">
          <img src={slide?.img?.url || ""} alt="img" className="SportHistoryLegendsModal-slider-img"/>
        </div>

        <div className="SportHistoryLegendsModal-slides-count"> 
          <span className="SportHistoryLegendsModal-slides-count-current">{arr.find(({text}) => text === currentSlide)?.count}</span>
          <span className="SportHistoryLegendsModal-slides-count-all">{SliderData?.length}</span>
        </div>

        <button className="SportHistoryLegendsModal-prev" onClick={onPrevBtn}>
          <Icon name="arrow-left"/>
        </button>

        <button className="SportHistoryLegendsModal-next" onClick={onNextBtn}>
          <Icon name="arrow-right"/>
        </button>

        <button className="SportHistoryLegendsModal-close" onClick={onClose}>
          <Icon name="cross" />
        </button>

        <button className="SportHistoryLegendsModal-download" onClick={() => useDownloadImage(slide?.img?.url || "")}>
          <Icon name="download" />
        </button>

        <button className="SportHistoryLegendsModal-plus" onClick={onWideScreen}>
        <Icon name="plus" />
        </button>
        
        <div className="SportHistoryLegendsModal-map" ref={infoRef}>
          <p className="SportHistoryLegendsModal-slide-text">{slide?.text}</p>

          <div className="SportHistoryLegendsModal-map-btn-container">
            {SliderData.map(({img: {url}, text}) => (
              <button
                className={`SportHistoryLegendsModal-map-btn ${text === currentSlide ? "active" : ""}`} 
                style={{backgroundImage: `url("${url}")`}} key={url}
                onClick={() => setSlide(text)}
              />
            ))}
          </div>
          
          <div className="SportHistoryLegendsModal-footer">
            <button className="SportHistoryLegendsModal-footer-view" onClick={onClose}>View all</button>
            <button className="SportHistoryLegendsModal-footer-all" onClick={onClose}>All</button>
          </div>
        </div>
      </div>
    </Modal>
  );
};