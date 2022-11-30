import { FC, MutableRefObject, useEffect, useRef } from "react";
import { SportModelsPageAPI } from "api";
import { Icon } from "components/Icon/Icon";
import { useHttp } from "hooks/useHttp";
import { VideoPlayer } from "components/VideoPlayer/VideoPlayer";

interface iSportBannerData {
  title: string;
  background: {url: string};
  video: {url: string};
};

export const SportBanner: FC = () => {
  const {call, data} = useHttp();
  const headerData = data?.data?.entry as iSportBannerData;

  useEffect(() => {
    call(SportModelsPageAPI.getBannerData())
    .catch(err => {
      console.log(
        "%c Error Get { Sport Models Banner } Data ",
        "color: red; font-size: 16px; font-weight: bold; border-left: 5px solid red",
        err
      );
    });
  }, []);

  if(!data) return null;
  
  return (
    <div className="SportBanner">
      <VideoPlayer 
        video={{
          poster: headerData?.background?.url,
          src:headerData?.video?.url,
        }} 
        source={{
          src: headerData?.video?.url,
          type: "video/mp4"
        }}
        title={headerData?.title}
      />
    </div>
  );
};