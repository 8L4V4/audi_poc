import { NextPage } from "next";
import {HeroBanner} from "./home/components/HeroBanner/HeroBanner";
import {CarsSection} from "./home/components/CarsSetion/CarsSection";

export default function MainPage(): NextPage {
  return (
    <>
      <HeroBanner />
      <CarsSection />
    </>
  )
};