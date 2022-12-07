import { useEffect } from "react";
import { SpecialsBanner } from "components/Specials/SpecialsBanner/SpecialsBanner";
import { SpecialsPresentation } from "components/Specials/SpecialsPresentation/SpecialsPresentation";
import { DropDown } from "components/DropDown/DropDown";
import { NextPage } from "next";
import { SpecialsPageAPI } from "api";
import { useHttp } from "hooks/useHttp";
import { Loader } from "components/Loader/Loader";

export interface iPresentationData {
  title: string;
  content: string;
  image: {
    url: string
  };
  classname: string;
  btn_title: string;
  modal_content: string;
}

const Specials: NextPage = () => {
  const {call, data, isLoading} = useHttp();
  const presentationData = data?.data?.entry?.items as iPresentationData[];
  
  useEffect(() => {
    call(SpecialsPageAPI.getPresentationData())
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

      {isLoading && <Loader/>}

      {!isLoading && presentationData?.map(({title, content, image, classname, modal_content, btn_title}) => (
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
      
      <DropDown axiosRequest={SpecialsPageAPI.getDropDownData}/>
    </main>
  );
};

export default Specials;