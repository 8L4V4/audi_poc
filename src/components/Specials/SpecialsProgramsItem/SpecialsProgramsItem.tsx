import { Icon } from "components/Icon/Icon";
import { FC, MutableRefObject, useEffect, useRef, useState } from "react";
import Link from "next/link";

interface iSpecialsProgramsItem {
  title: string;
  content: string;
  link: {
    title: string;
    url: string;
  }
}

export const SpecialsProgramsItem: FC<iSpecialsProgramsItem> = ({title, content, link}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const ref: MutableRefObject<null | HTMLDivElement> = useRef(null);

  useEffect(() => {
   !!ref.current && setTimeout(() => {
      if(showDropdown){
        ref?.current?.classList.add("active")
      } else {
        ref?.current?.classList.remove("active")
      }
    }, 250);
  },[showDropdown])

  return (
  <div className="SpecialsProgramsItem">
    <button 
      className={`SpecialsProgramsItem-btn ${showDropdown ? "active" : ""}`} 
      onClick={() => setShowDropdown(pv => !pv)}
    >
      <span>{title}</span>
      <Icon name="arrow-down" />
    </button>

    {showDropdown && (
      <div className="SpecialsProgramsItem-content" ref={ref}>
        <p className="SpecialsProgramsItem-content-text">{content}</p>
        <Link href={link.url} className="SpecialsProgramsItem-content-link">
          <span>{link.title}</span>
          <Icon name="arrow-right" />
        </Link>
      </div>
    )}
  </div>
  );
};