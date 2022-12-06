import { NextPage } from "next";
import { HeroBanner } from "components/HeroBanner/HeroBanner";
import { CarsSection } from "components/CarsSection/CarsSection";
import { CTASection } from "components/CTASection/CTASection";
import { MarketingSection } from "components/MarketingSection/MarketingSection";
import { AdHeroBanner } from "components/AdHeroBanner/AdHeroBanner";
import {AudiFeatures} from "../components/AudiFeatures/AudiFeatures";

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
