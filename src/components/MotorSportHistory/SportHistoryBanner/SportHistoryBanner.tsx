import { FC, useEffect } from "react";
import { MotorSportHistoryPageAPI } from "api";
import { useHttp } from "hooks/useHttp";

interface iBannerData {
  title: string;
  background: {url: string; };
}

export const SportHistoryBanner: FC = () => {
  const {call, data} = useHttp();
  const bannerData = data?.data?.entry as iBannerData;

  useEffect(() => {
    call(MotorSportHistoryPageAPI.getBannerData())
    .catch(err => {
      console.log(
        "%c Error Get { Sport History Banner } Data ",
        "color: red; font-size: 16px; font-weight: bold; border-left: 5px solid red",
        err
      );
    })
  }, []);
  
  if(!data) return null;

  return (
    <div className="SportHistoryBanner" style={{backgroundImage: `url('${bannerData?.background?.url}')`}}>
      <h2 className="SportHistoryBanner-title">{bannerData?.title}</h2>
    </div>
  );
};