import { SportModelsPageAPI } from "api";
import { useHttp } from "hooks/useHttp";
import Link from "next/link";
import { FC, useEffect } from "react";

interface iGalleryData {
  list: {
    title: string;
    background: {url: string};
    build_url: string;
    model_url: string;
  }[];
};

export const SportGallery: FC = () => {
  const {call, data} = useHttp();
  const galleryData = data?.data?.entry as iGalleryData;

  useEffect(() => {
    call(SportModelsPageAPI.getGalleyData())
    .catch(err => {
      console.log(
        "%c Error Get { Sport Models Gallery } Data ",
        "color: red; font-size: 16px; font-weight: bold; border-left: 5px solid red",
        err
      );
    });
  }, []);
  
  if(!data) return null;

  return (
    <div className="SportGallery">
      {galleryData?.list?.map(({title, background,  build_url, model_url}) => (
        <div className="SportGallery-item" key={title}>
          <div className="SportGallery-item-content">
            <h4 className="SportGallery-item-content-title">{title}</h4>
            <Link href={model_url} className="SportGallery-item-content-link">View Model</Link>
            <Link href={build_url} className="SportGallery-item-content-link">Build yours</Link>
          </div>
          <img src={background?.url} alt="background" className="SportGallery-item-background"/>
        </div>
      ))}
    </div>
  );
};