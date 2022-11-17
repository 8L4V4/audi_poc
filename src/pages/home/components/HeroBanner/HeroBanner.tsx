import React, {FC, useEffect, useState} from "react";
import {useApi} from "hooks/useApi";
import {MainPageAPI} from "../../../../api/mainPage";
import {iLinkField} from "../../../../types/fields";
import Link from "next/link";

interface iHBData {
  background: string,
  links: Array<{
    link: {
      link: iLinkField,
      link_type: string
    }
  }>
  heading: string,
  paragraph: string
}

export const HeroBanner: FC<iHeroBannerProps> = () => {
  const [data, setData] = useState<iHBData>();
  const {apiCall} = useApi();

  useEffect(() => {
    apiCall(MainPageAPI.getHeroBanner())
      .then(({data: {entry: {background_image: {url}, links, heading, paragraph}}}) => setData({background: url, links, heading, paragraph}))
      .catch((e) => {
        console.log("%c Error getting herobanner data", "color: red; font-size: 16px; font-weight: bold; border-left: 5px solid red", );
      })
  }, []);

  return (
    <section className="HeroBanner" style={{"backgroundImage": `url('${data?.background}')`}} >
      <h1 className="HeroBanner-heading">{data?.heading}</h1>
      <div className="HeroBanner-paragraph">{data?.paragraph}</div>
      <div className="HeroBanner-links">
        {
          Array.isArray(data?.links)
            && data?.links.length
            && data.links?.map(({link: {link, link_type}}) => (
            <Link key={link.href} href={link.href} className={`HeroBanner-links-item ${ link_type || ""}`}>
              {link.title}
            </Link>
          ))
        }
      </div>
    </section>
  );
};