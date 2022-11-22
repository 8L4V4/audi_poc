import { useEffect, useState } from "react";
import { SpecialsBanner } from "components/Specials/SpecialsBanner/SpecialsBanner";
import { SpecialsPresentation } from "components/Specials/SpecialsPresentation/SpecialsPresentation";
import { SpecialsPrograms } from "components/Specials/SpecialsPrograms/SpecialsPrograms";
import { NextPage } from "next";
import { useApi } from "hooks/useApi";
import { SpecialsPageAPI } from "api";

export interface iPresentationData {
  title: string;
  content: string;
  image: {
    url: string
  };
  classname: string;
  btn_title: string;
  modal_content: string;
};

const Specials: NextPage = () => {
  const {apiCall} = useApi();
  const [presentationData, setPresentationData] = useState<iPresentationData[]>();
  
  useEffect(() => {
    apiCall(SpecialsPageAPI.getPresentationData())
      .then(({data: {entry: {items}}}) => setPresentationData(items))
      .catch(() => {
        console.log(
          "%c Error getting { Specials Banner } data",
          "color: red; font-size: 16px; font-weight: bold; border-left: 5px solid red"
        );
      });
  }, []);

  return (
    <main className="Specials">
      <SpecialsBanner />

      {presentationData?.map(({title, content, image, classname, modal_content, btn_title}) => (
          <SpecialsPresentation
            key={title}
            title={title}
            content={content}
            image={image.url}
            btn_title={btn_title}
            modal_content={modal_content}
            className={classname}
            url="#"
          /> 
        ))}
      
      <SpecialsPrograms/>
    </main>
  );
};

export default Specials;