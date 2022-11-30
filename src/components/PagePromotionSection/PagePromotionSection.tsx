import { Icon, tIconName } from "components/Icon/Icon";
import { FC } from "react";
import Link from "next/link";

interface iPagePromotionSection {
  title: string;
  text: string;
  icon: tIconName;
  link_text: string;
  url?: string;
  className?: string;
}

export const PagePromotionSection: FC<iPagePromotionSection> = ({title, text, icon, link_text, url = "#", className}) => {
  return (
    <div className={`PagePromotionSection ${className || ""}`}>
      <h4 className="PagePromotionSection-title">{title}</h4>
      
      <p className="PagePromotionSection-text">{text}</p>

      <Link href={url} className="PagePromotionSection-link">
        <Icon name={icon} />
        <span className="PagePromotionSection-link-text">{link_text}</span>
      </Link>
  </div>
  );
};