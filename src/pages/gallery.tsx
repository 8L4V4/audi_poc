import { NextPage } from "next";
import { GalleryBanner } from "components/Gallery/GalleryBanner/GalleryBanner";
import { PageNavBar } from "components/PageNavBar/PageNavBar";
import { PageInfoSection } from "components/PageInfoSection/PageInfoSection";
import { GallerySlider } from "components/Gallery/GallerySlider/GallerySlider";
import { PagePromotionSection } from "components/PagePromotionSection/PagePromotionSection";

const Gallery: NextPage = () => {
  return (
    <main className="Gallery">
      <GalleryBanner/>

      <PageNavBar activeTab="Gallery"/>

      <PageInfoSection 
        title="A closer look." 
        text="View our Audi Sport and Customer Racing model line-up in detail and action in the extended gallery."      
      />

      <GallerySlider/>

      <PagePromotionSection 
        title="Take your passion to the track." 
        text="There is a certain breed of driver who lives for the track. " 
        icon="speedometer"
        link_text="Experience Audi Sport customer racing"
      />
    </main>
  );
};

export default Gallery;