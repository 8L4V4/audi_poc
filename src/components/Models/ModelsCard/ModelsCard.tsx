import Link from "next/link";
import { FC } from "react";

interface iModelsCard {
  title: string;
  bold_title: string;
  price: number;
  url: string;
  img: string;
}

export const ModelsCard: FC<iModelsCard> = ({title, bold_title, price, url, img}) => {

  const parsePrice = () => {
    const stringPrice = String(price);
    const setString = (v: number) => stringPrice.slice(0, v) + "," + stringPrice.slice(v);

    if(stringPrice.length === 5) return setString(2);

    return setString(3);
  };
  
  return (
    <div className="ModelsCard">
      <div className="ModelsCard-header">
        <div className="ModelsCard-title">
          <span className="ModelsCard-title-bold">{bold_title}</span>
          <span className="ModelsCard-title-text">{title}</span>
        </div>      
        <div className="ModelsCard-price">Starting at $ {parsePrice()}</div>
      </div>

      <img src={img} alt="card_img" className="ModelsCard-img"/>

      <div className="ModelsCard-explore-container">
        <Link href={url} className="ModelsCard-explore">Explore</Link>
      </div>
    </div>
  );
};