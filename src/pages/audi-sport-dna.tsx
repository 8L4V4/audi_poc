import { NextPage } from "next";
import { PageInfoSection } from "components/PageInfoSection/PageInfoSection";
import { PageNavBar } from "components/PageNavBar/PageNavBar";
import { PagePromotionSection } from "components/PagePromotionSection/PagePromotionSection";
import { SportDNABanner } from "components/SportDNA/SportDNABanner/SportDNABanner";
import { SportDNAGallery } from "components/SportDNA/SportDNAGallery/SportDNAGallery";
import { useHttp } from "hooks/useHttp";
import { useEffect } from "react";
import { SportDNAPageAPI } from "api";

export interface iGalleryItem {
  img: {url: string};
  text?: string;
  title?: string;
  subtitle?: string;
};

const AudiSportDna: NextPage = () => {
  const {call, data} = useHttp();
  const galleryData = data?.data?.entry?.list as iGalleryItem[];
  
  useEffect(() => {
    call(SportDNAPageAPI.getGalleryData())
    .catch(err => {
      console.log(
        "%c Error getting { Sport DNA Gallery } Data",
        "color: red; font-size: 16px; font-weight: bold; border-left: 5px solid red",
        err
      );
    });
  }, []);

  return (
    <main className="AudiSportDna">

      <SportDNABanner/>

      <PageNavBar activeTab="Audi Sport DNA"/>

      <PageInfoSection
        title="We've isolated the genes of success."
        text="We push the boundaries in these key areas and then splice them together to build exceptional, all-around performers."
      />

      {galleryData?.map(item => (
        <SportDNAGallery
          key={item.img.url}
          data={item}
        />
      ))}

      <PagePromotionSection 
        title="A legacy like no other." 
        text="Every model can trace its lineage back to a checkered flag. Whether its Le Mans, Formula E, or a rally circuit — it’s all harnessed in today’s lineup. Any closer to motorsport success, and you’d be on the podium."
        icon="cars"
        link_text="Discover our motorsport lineage"
        className="AudiSportDna-promote"
      />
    </main>
  );
};

export default AudiSportDna;