import {useEffect, useState} from "react";
import Image from "next/image";
import {NextPage} from "next";
import {iPictureField} from "../../../types/fields";
import {useApi} from "../../../hooks/useApi";
import {MainPageAPI} from "../../../api";
import Link from "next/link";

interface iAudiFeature {
  image: iPictureField,
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
    <Link className="AudiFeatures" href="src/views/Main/AudiFeatures#">
      {featureList?.map((feature, i) => (
        <div className="AudiFeatures-item" style={{backgroundImage: `url(${feature.image?.url})`}} key={i}>
          {/*<Image src={feature.image.url} className="AudiFeatures-item-img" alt={feature.name.text}/>*/}
          <span className="AudiFeatures-item-title">
            {feature.name.image &&
              <Image src={feature.name.image?.url} className="AudiFeatures-item-title-img" alt={feature.name.text} width={210} height={26}/>}
            {feature.name.text || ""}
          </span>
        </div>
      ))}
    </Link>
  );
};