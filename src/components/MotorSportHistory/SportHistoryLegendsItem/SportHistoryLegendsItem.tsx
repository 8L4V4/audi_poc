import { Icon } from "components/Icon/Icon";
import { FC, useState } from "react";

export interface iSportHistoryLegendsItem {
  text: string;
  img: {url: string};
  showModal: (item: string) => void;
}

export const SportHistoryLegendsItem: FC<iSportHistoryLegendsItem> = ({img, text, showModal}) => {
  const [showBackDrop, setShowBackDrop] = useState(false);
  
  return (
    <div 
      className="SportHistoryLegendsItem" 
      onMouseEnter={() => setShowBackDrop(true)}
      onMouseLeave={() => setShowBackDrop(false)}
      onClick={() => showModal(text)}
    >
      <div className={`SportHistoryLegendsItem-backdrop ${showBackDrop ? "active" : ""}`}>{text}</div>

      <img src={img?.url} alt="background" className="SportHistoryLegendsItem-img"/>

      <button className="SportHistoryLegendsItem-btn">
        <Icon name="plus" />
      </button>
    </div>
  );
};