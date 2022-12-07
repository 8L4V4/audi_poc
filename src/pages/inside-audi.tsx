import { InsideBanner } from "components/InsideAudi/InsideBanner/InsideBanner";
import { InsideGallery } from "components/InsideAudi/InsideGallery/InsideGallery";
import { PageInfoSection } from "components/PageInfoSection/PageInfoSection";
import { PageNavBar } from "components/PageNavBar/PageNavBar";
import { NextPage } from "next";

const InsideAudi: NextPage = () => {
  return (
    <main className="InsideAudi">
      <InsideBanner/>

      <PageNavBar activeTab="Overview"/>

      <PageInfoSection
        title="The secrets of performance are written on the racing line."
        text="Wing angles and downforce, shock pressures and spring rates, weight distribution and power-to-weight ratios, the threshold of grip, power: how to create it and put it to the ground. We race because there’s no better way to find the limits of engineering—and no better way to apply decades of knowledge to build cars for drivers who take serious performance seriously."
      />

      <InsideGallery />
    </main>
  );
};

export default InsideAudi;