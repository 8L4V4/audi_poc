import { NextPage } from "next";
import { HeroBanner } from "components/HeroBanner/HeroBanner";
import { CarsSection } from "components/CarsSetion/CarsSection";

const MainPage: NextPage = () => {
  return (
    <>
      <HeroBanner />
      <CarsSection />
    </>
  );
};

export default MainPage;
