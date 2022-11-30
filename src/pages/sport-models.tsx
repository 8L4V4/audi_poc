import { PageInfoSection } from "components/PageInfoSection/PageInfoSection";
import { PageNavBar } from "components/PageNavBar/PageNavBar";
import { PagePromotionSection } from "components/PagePromotionSection/PagePromotionSection";
import { SportBanner } from "components/SportModels/SportBanner/SportBanner";
import { SportGallery } from "components/SportModels/SportGallery/SportGallery";
import { NextPage } from "next";

const SportModels: NextPage = () => {
  return (
    <main className="SportModels">
      <SportBanner/>

      <PageNavBar activeTab="Audi Sport models"/>

      <PageInfoSection
        title="It's not that lonely at the top."
        text="In fact, you could say it’s crowded. 
        Coupes, Sedans, Sportbacks, mid-engine supercars, SUV, Avant and certified race cars, 
        the Audi Sport model lineup takes a diverse range of vehicles to the upper echelons of performance."
      />

      <SportGallery/>

      <PagePromotionSection 
        title="Passion engineered."
        text="In order to earn the Audi Sport badge, 
        every component is meticulously designed and engineered to meet the exacting standards of drivers just like you. 
        Discover how detailed we can get."
        icon="steering-wheel"
        link_text="Explore the Audi Sport DNA"        
      />
    </main>
  );
};

export default SportModels;