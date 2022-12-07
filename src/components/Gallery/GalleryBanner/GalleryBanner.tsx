import { FC, useEffect } from "react";
import { GallerySportPageAPI } from "api";
import { useHttp } from "hooks/useHttp";

interface iBannerData {
  title: string;
  background: {url:string; };
};

export const GalleryBanner: FC = () => {
  const {call, data} = useHttp();
  const bannerData = data?.data?.entry as iBannerData;

  useEffect(() => {
    call(GallerySportPageAPI.getBannerData())
  }, []);

  if(!data) return null;

  return (
    <div className="GalleryBanner" style={{backgroundImage: `url("${bannerData?.background?.url}")`}}>
      <h2 className="GalleryBanner-title">{bannerData?.title}</h2>
    </div>
  );
};