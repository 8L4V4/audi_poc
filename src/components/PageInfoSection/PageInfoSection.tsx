import Link from "next/link";
import { FC } from "react";

interface iPageInfoSection {
  title: string;
  text: string;
  url?: string;
  className?: string;
}

export const PageInfoSection: FC<iPageInfoSection> = ({title, text, url = "#", className}) => {
  return (
    <div className={`PageInfoSection ${className || ""}`}>
      <div className="PageInfoSection-nav">
        <span className="PageInfoSection-nav-text">Inside Audi</span>
        <Link href={url} className="PageInfoSection-nav-link">Back to Innovation</Link>
      </div>
     
      <div className="PageInfoSection-content">
        <h3 className="PageInfoSection-content-title">{title}</h3> 
        <p className="PageInfoSection-content-text">{text}</p>
      </div>
  </div>
  );
};

