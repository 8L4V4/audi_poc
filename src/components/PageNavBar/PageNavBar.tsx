import Link from "next/link";
import { FC } from "react";

const navList = [
  {title: "Overview", url: "/inside-audi"},
  {title: "Audi Sport models", url: "/sport-models"},
  {title: "Audi Sport DNA", url: "/audi-sport-dna"},
  {title: "Motorsport history", url: "/motorsport-history"},
  {title: "Gallery", url: "#"},
  {title: "Audi Sport customer racing", url: "#"},
];

interface iPageNavBar {
  activeTab: "Overview" | "Audi Sport models" | "Audi Sport DNA" | "Motorsport history" | "Gallery" | "Audi Sport customer racing";
};

export const PageNavBar: FC<iPageNavBar> = ({activeTab}) => {
  return (
    <div className="PageNavBar">
      {navList.map(({title, url}) => <Link href={url} key={title} className={`PageNavBar-link ${activeTab === title ? "active" : ""}`}>{title}</Link>)}
    </div>
  );
};