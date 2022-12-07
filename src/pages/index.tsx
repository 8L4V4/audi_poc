import { NextPage } from "next";
import { HeroBanner } from "views/Main/HeroBanner/HeroBanner";
import { CarsSection } from "views/Main/CarsSection/CarsSection";
import { CTASection } from "views/Main/CTASection/CTASection";
import { MarketingSection } from "views/Main/MarketingSection/MarketingSection";
import { AdHeroBanner } from "views/Main/AdHeroBanner/AdHeroBanner";
import {AudiFeatures} from "../views/Main/AudiFeatures/AudiFeatures";

const MainPage: NextPage = () => {
  return (
    <>
      <HeroBanner />
      <CarsSection />
      <CTASection />
      <AdHeroBanner />
      <MarketingSection />
      <AudiFeatures />
    </>
  );
};

export default MainPage;
