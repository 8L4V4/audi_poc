import { ModelsPageAPI } from "api";
import { useApi } from "hooks/useApi";
import { FC, useEffect, useState } from "react";
import { ModelsCard } from "../ModelsCard/ModelsCard";

interface iCategories {
  headline: {url: string};
  headlineimg: {alt_img_md: {url: string;}}[];
  list: {
    img: {
      img_sm: {url: string};
      img_md: {url: string};
      img_lg: {url: string};
    }[];
    price: number;
    bold_title: string;
    title: string;
    url: string;
  }[];
}

export const ModelsList: FC = () => {
  const [categories, setCategories] = useState<iCategories[]>();
  const { apiCall } = useApi();
  
  useEffect(() => {
    apiCall(ModelsPageAPI.getCarsList())
      .then(({data: {entry: {category}}}) => setCategories(category))
      .catch(() => {
        console.log(
          "%c Error getting { Models List } data",
          "color: red; font-size: 16px; font-weight: bold; border-left: 5px solid red"
        );
      });
  }, []);
  
  if(!categories) return null;
  
  return (
    <div className="ModelsList">
      {categories.map(category => (
        <div className="ModelsList-category">
          <div className="ModelsList-category-model">
            <img src={category?.headline?.url} alt="headline" className="ModelsList-category-model-headline"/>
            <img src={category.headlineimg[0]?.alt_img_md?.url} alt="category_img" className="ModelsList-category-model-headlineimg" />
          </div>

          <div className="ModelsList-category-list">
            {category.list.map(card => (
              <ModelsCard 
                title={card.title}
                bold_title={card.bold_title}
                price={card.price}
                url={card.url}
                img={card.img[0].img_md.url}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};