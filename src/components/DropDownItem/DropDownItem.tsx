import { Icon } from "components/Icon/Icon";
import { FC, MutableRefObject, useEffect, useRef, useState } from "react";
import Link from "next/link";

interface iDropDownItem {
  title: string;
  content: string;
  link: {
    title: string;
    url: string;
  }
};

export const DropDownItem: FC<iDropDownItem> = ({title, content, link}) => {
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
  <div className="iDropDownItem">
    <button 
      className={`iDropDownItem-btn ${showDropdown ? "active" : ""}`} 
      onClick={() => setShowDropdown(pv => !pv)}
    >
      <span>{title}</span>
      <Icon name="arrow-down" />
    </button>

    {showDropdown && (
      <div className="iDropDownItem-content" ref={ref}>
        <p className="iDropDownItem-content-text">{content}</p>
        <Link href={link.url} className="iDropDownItem-content-link">
          <span>{link.title}</span>
          <Icon name="arrow-right" />
        </Link>
      </div>
    )}
  </div>
  );
};