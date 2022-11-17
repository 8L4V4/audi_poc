import React, {useEffect, useState} from "react";
import {NextPage} from "next";
import Image from "next/dist/client/image";
import {Icon} from "../../components/Icon/Icon";
import {MainPageAPI} from "../../api/mainPage";
import {useApi} from "../../hooks/useApi";

interface iNavData {
  href: string,
  html: string,
  title: string,
  image: string
}

const renderNavMenuItem = (item: iNavData, i,  arr: Array<iNavData>) => {
  if(item.html){
    return <a
      key={i}
      href={item.href}
      className={`Header-nav-item ${(i === arr.length-1) ? "last" : ""}`}
      dangerouslySetInnerHTML={{__html: item.html}}/>
  }
  return (
    <a
      key={i}
      href={item.href}
      className={`Header-nav-item ${item.title === "my Audi login" ? "Header-profile" : ""} ${(i === arr.length-1) ? "last" : ""}`}
    >
      { item.image && <Image src={item.image}/> }
      { item.title === "my Audi login" && <Icon name="profile" className="Header-profile-icon"/>}
      { item.image && item.title
        ? <span>{item.title}</span>
        : item.title
      }
    </a>
  )
}

export function Header():NextPage {
  const [navData, setNavData] = useState<Array<iNavData>>([]);
  const {apiCall} = useApi();

  useEffect(() => {
    apiCall(MainPageAPI.getNav())
      .then(({data}) => {
        const resArr = [];
        data.entry.modular_blocks.forEach(({menu_item: {html, image, link: {href, title}}}) => resArr.push( {html, image, href, title }));
        setNavData(resArr);
      })
      .catch(() => {
        console.log("%c Error getting hheader nav data", "color: red; font-size: 16px; font-weight: bold; border-left: 5px solid red", );
      })
  }, [])

  return (
    <header className="Header">
      <nav className="Header-nav"> { navData.map(renderNavMenuItem) } </nav>
    </header>
  );
};