import { ModelsPageAPI } from "api";
import { Loader } from "components/Loader/Loader";
import { eventBus } from "helpers/EventBus/EventBus";
import { useHttp } from "hooks/useHttp";
import { FC, ReactNode, useEffect } from "react";
import { ModelsCard } from "../ModelsCard/ModelsCard";

interface iCategories {
  headline: {url: string};
  headlineimg: {alt_img_md: {url: string;}}[];
  list: iListItem[];
};

interface iListItem {
  img: {
    img_sm: {url: string};
    img_md: {url: string};
    img_lg: {url: string};
  }[];
  price: number;
  bold_title: string;
  title: string;
  url: string;
};

interface iModelsList {
  filters: {
    active: string[] | ReactNode[] | [];
    range: string;
  }
};

export const ModelsList: FC<iModelsList> = ({filters}) => {
  const { call, data, isError, isLoading } = useHttp();
  const categories = data?.data?.entry?.category as iCategories[];

  useEffect(() => {
    call(ModelsPageAPI.getCarsList())
      .catch(() => {
        console.log(
          "%c Error getting { Models List } data",
          "color: red; font-size: 16px; font-weight: bold; border-left: 5px solid red"
        );
      });
  }, []);

  const onCalcCount = (filtredList: iCategories[]) => {
    let result = 0;

    filtredList.forEach(item => {
      if(!!item.list.length) {
        result += item.list.length
      };
    });
    
    return {count : result}
  };

  const filterCategory = () => {
    if(!filters.active.length && !filters.range) return categories;

    const onListFilter = (category: iCategories) => {
      const newList: iListItem[] = [];
    
      const filterString = (filter: string | ReactNode) => typeof filter === "string" ? filter : "e-tron";
      const priceFilter = Number(filters.range.replace(",", ""));

      const filtredCategory = !!filters.range  ? category.list.filter(listItem => listItem.price >= priceFilter) : category.list;
      
      filtredCategory.map(listItem => {
        filters.active.forEach(filter => {
          if(listItem.title.includes(filterString(filter)) || listItem.bold_title.includes(filterString(filter))){
            newList.push(listItem);
          };
          return;
        });
      });
      
      return {
        headline: category.headline,
        headlineimg: category.headlineimg,
        list: newList
      }
    };

    const result = categories.map(onListFilter)

    eventBus.dispatch("toggleNotificationSidebar", onCalcCount(result));
    return result;
  };

  if(!categories || isError) return null;
  
  return (
    <div className="ModelsList">
      {isLoading && <Loader/>}
      
      {!isLoading && filterCategory().map(category => {
        if(!category.list.length) return;
        
        return (
          <div className="ModelsList-category" key={category?.headline?.url}>
            <div className="ModelsList-category-model">
              <img src={category?.headline?.url} alt="headline" className="ModelsList-category-model-headline"/>
              <img src={category.headlineimg[0]?.alt_img_md?.url} alt="category_img" className="ModelsList-category-model-headlineimg" />
            </div>
  
            <div className="ModelsList-category-list">
              {category?.list.map(card => (
                <ModelsCard 
                  key={Math.random() * 1000}
                  title={card?.title}
                  bold_title={card?.bold_title}
                  price={card?.price}
                  url={card?.url}
                  img={card.img[0]?.img_md?.url}
                />
              ))}
            </div>
          </div>
        )
      })}

    </div>
  );
};