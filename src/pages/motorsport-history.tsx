import { MotorSportHistoryPageAPI } from "api";
import { iSportHistoryArticle, SportHistoryArticle } from "components/MotorSportHistory/SportHistoryArticle/SportHistoryArticle";
import { SportHistoryBanner } from "components/MotorSportHistory/SportHistoryBanner/SportHistoryBanner";
import { SportHistoryLegends } from "components/MotorSportHistory/SportHistoryLegends/SportHistoryLegends";
import { PageInfoSection } from "components/PageInfoSection/PageInfoSection";
import { PageNavBar } from "components/PageNavBar/PageNavBar";
import { PagePromotionSection } from "components/PagePromotionSection/PagePromotionSection";
import { useHttp } from "hooks/useHttp";
import { NextPage } from "next";
import { Fragment, useEffect } from "react";

const MotorSportHistory: NextPage = () => {
  const { call, data} = useHttp();
  const articlesData = data?.data?.entry?.list as iSportHistoryArticle[];

  useEffect(() => {
    call(MotorSportHistoryPageAPI.getArticlesData())
    .catch(err => {
      console.log(
        "%c Error getting { Sport History Article } Data",
        "color: red; font-size: 16px; font-weight: bold; border-left: 5px solid red",
        err
      );
    })
  }, []);
  
  return (
    <main className="MotorSportHistory">
      <SportHistoryBanner/>

      <PageNavBar activeTab="Motorsport history" />

      <PageInfoSection 
        title="A legacy of victory repeating itself."
        text="Winning didn’t come easy, but as you can see, we found our way to the front. Whether it was on gravel or asphalt, with quattro® all-wheel drive traction or by turning up the boost, Audi Sport engineering turned trophy collecting into a family tradition."
        className="MotorSportHistory-info" 
      />

      {articlesData?.map((item, idx) => {
        if(idx === 2) {
          return (
            <Fragment key={item.title}>
              <SportHistoryArticle {...item} key={item.title} />
              <SportHistoryLegends/>
            </Fragment>
          )
        }
        return <SportHistoryArticle {...item} key={item.title} />
      })}

      <PagePromotionSection 
        title="Captivating from every angle." 
        text="Experience the dynamic performance of the Audi Sport lineup in our gallery. Feel free to download the images to use as a wallpaper on your device."
        icon="gallery" 
        link_text="View the Audi Sport gallery"
        className="MotorSportHistory-prom"
      />
    </main>
  );
};

export default MotorSportHistory;