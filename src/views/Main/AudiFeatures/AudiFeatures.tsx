import {useEffect, useState} from "react";
import Image from "next/image";
import {NextPage} from "next";
import {iPictureField} from "../../../types/fields";
import {useApi} from "../../../hooks/useApi";
import {MainPageAPI} from "../../../api";
import Link from "next/link";

interface iAudiFeature {
  image: iPictureField,
  url_link: string,
  name: {
    text: string,
    image: iPictureField
  },
}

export const AudiFeatures: NextPage = () => {
  const {apiCall} = useApi();
  const [featureList, setFeatureList] = useState<iAudiFeature[]>();

  useEffect(() => {
    apiCall(MainPageAPI.getAudiFeatures())
      .then(({data: {entry: {feature}}}) => {
        setFeatureList(feature);
      })
      .catch((err) => {
        console.log("%c Error getting feature list", "color: orange; font-size: 16px; font-weight: bold; border-left: 5px solid orange", err);
      })
  }, [])

  return (
    <div className="AudiFeatures">
      {featureList?.map((feature, i) => (
        <Link href={feature.url_link} className="AudiFeatures-item" style={{backgroundImage: `url(${feature.image?.url})`}} key={i}>
          <span className="AudiFeatures-item-title">
            { feature.name.image &&
              <Image src={feature.name.image?.url}
                     className="AudiFeatures-item-title-img"
                     alt={feature.name.text}
                     width={210}
                     height={26}
              />
            }
            {feature.name.text || ""}
          </span>
        </Link>
      ))}
    </div>
  );
};