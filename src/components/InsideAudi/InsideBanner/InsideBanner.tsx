import { FC, useEffect } from "react";
import { InsideAudiPageAPI } from "api";
import { useHttp } from "hooks/useHttp";

interface iBannerData {
  title: string;
  text: string;
  background: {url: string;};
};

export const InsideBanner: FC = () => {
  const {call, data} = useHttp();
  const bannerData = data?.data?.entry as iBannerData;

  useEffect(() => {
    call(InsideAudiPageAPI.getBannerData())
    .catch(err => {
      console.log(
        "%c Error get { Inside Banner } Data",
        "color: red; font-size: 16px; font-weight: bold; border-left: 5px solid red",
        err
      )
    })
  }, []);

  if(!data) return null;

  return (
    <div className="InsideBanner" style={{backgroundImage: `url('${bannerData?.background?.url}')`}}>
      <h2 className="InsideBanner-title">{bannerData?.title}</h2>
      <p className="InsideBanner-text">{bannerData?.text}</p>
    </div>
  );
};