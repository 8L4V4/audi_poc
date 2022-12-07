import { InsideAudiPageAPI } from "api";
import { useHttp } from "hooks/useHttp";
import { FC, useEffect } from "react";
import Link from "next/link";

interface iGalleryList {
  background: {url: string};
  btn_title: string;
  title: string;
  url: string;
};

export const InsideGallery: FC = () => {
  const {call, data} = useHttp();
  const galleryList = data?.data?.entry?.list as iGalleryList[];

  useEffect(() => {
    call(InsideAudiPageAPI.getGalleyData())
    .catch(err =>{
      console.log(
        "%c Error getting { Inside Gallery } Data",
        "color: red; font-size: 16px; font-weight: bold; border-left: 5px solid red",
        err
      );
    });
  }, []);

  if(!data) return null;
  
  return (
    <div className="InsideGallery">
      {galleryList?.map(({title, background, btn_title, url}) => (
        <div className="InsideGallery-item" key={title}>
          <img src={background?.url} alt="img" className="InsideGallery-item-img" />
          <h4 className="InsideGallery-item-title" >{title}</h4>
          <Link href={url} className="InsideGallery-item-link">{btn_title}</Link>
        </div>
      ))}
    </div>
  );
};