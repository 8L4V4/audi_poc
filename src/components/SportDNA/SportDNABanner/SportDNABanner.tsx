import { FC, useEffect } from "react";
import { SportDNAPageAPI } from "api";
import { useHttp } from "hooks/useHttp";

interface iBannerData {
  title: string;
  background: {url: string};
};

export const SportDNABanner: FC = () => {
  const {call, data} = useHttp();
  const bannerData = data?.data?.entry as iBannerData;

  useEffect(() => {
    call(SportDNAPageAPI.getBannerData())
    .catch(err => {
      console.log(
        "%c Error getting { Sport DNA } Data",
        "color: red; font-size: 16px; font-weight: bold; border-left: 5px solid red",
        err
      );
    })
  }, []);

  if(!data) return null;
  
  return (
    <div className="SportDNABanner" style={{backgroundImage: `url('${bannerData?.background?.url}')`}}>
      <h2 className="SportDNABanner-title">{bannerData?.title}</h2>
    </div>
  );
};