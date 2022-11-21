import { useEffect, useState } from "react";
import { SpecialsBanner } from "components/Specials/SpecialsBanner/SpecialsBanner";
import { SpecialsPresentation } from "components/Specials/SpecialsPresentation/SpecialsPresentation";
import { SpecialsPrograms } from "components/Specials/SpecialsPrograms/SpecialsPrograms";
import { useApi } from "hooks/useApi";
import { NextPage } from "next";
import { SpecialsPageAPI } from "api";
import { Loader } from "components/Loader/Loader";

interface iSpecialsPageData {
  dropdown: any;
  header: {
    title: string;
    background: {
      url: string
    };
  };
  presentation: any
}

const Specials: NextPage = () => {
  const [pageData, setPageData] = useState<iSpecialsPageData>();
  const { apiCall } = useApi();

  useEffect(() => {
    apiCall(SpecialsPageAPI.getPageData())
      .then(({data: {entry: {dropdown, header, presentation}},}) => 
      setPageData({dropdown, header, presentation}))
      .catch(() => {
        console.log(
          "%c Error getting { Specials Page } data",
          "color: red; font-size: 16px; font-weight: bold; border-left: 5px solid red"
        );
      });
  }, []);

  if(!pageData) return <Loader/>;

  const {dropdown, header, presentation} = pageData;
  
  return (
    <main className="Specials">
      <SpecialsBanner 
        title={header.title} 
        background={header.background.url}
      />
      
      <SpecialsPresentation 
        title={presentation[0].section_1.title} 
        text={presentation[0].section_1.content}
        img={presentation[0].section_1.image.url}
        url="#"
        btn={{
          title: presentation[0].section_1.btn_title, 
          modalText: presentation[0].section_1.modal_content
        }}
        className={presentation[0].section_1.classname}
      />

      <SpecialsPresentation 
        title={presentation[1].section_2.title} 
        text={presentation[1].section_2.content}
        img={presentation[1].section_2.image.url}
        url="#"
        btn={{
          title: presentation[1].section_2.btn_title, 
          modalText: presentation[1].section_2.modal_content
        }}
        className={presentation[1].section_2.classname}
      />

      <SpecialsPresentation 
        title={presentation[2].section_3.title} 
        text={presentation[2].section_3.content}
        img={presentation[2].section_3.image.url}
        url="#"
        btn={{
          title: presentation[2].section_3.btn_title, 
          modalText: presentation[2].section_3.modal_content
        }}
        className={presentation[2].section_3.classname}
      />

      <SpecialsPresentation 
        title={presentation[3].section_4.title} 
        text={presentation[3].section_4.content}
        img={presentation[3].section_4.image.url}
        url="#"
        btn={{
          title: presentation[3].section_4.btn_title, 
          modalText: presentation[3].section_4.modal_content
        }}
        className={presentation[3].section_4.classname}
      />

      <SpecialsPresentation 
        title={presentation[4].section_5.title} 
        text={presentation[4].section_5.content}
        img={presentation[4].section_5.image.url}
        url="#"
        btn={{
          title: presentation[4].section_5.btn_title, 
          modalText: presentation[4].section_5.modal_content
        }}
        className={presentation[4].section_5.classname}
      />

      <SpecialsPresentation 
        title={presentation[5].section_6.title} 
        text={presentation[5].section_6.content}
        img={presentation[5].section_6.image.url}
        url="#"
        btn={{
          title: presentation[5].section_6.btn_title, 
          modalText: presentation[5].section_6.modal_content
        }}
        className={presentation[5].section_6.classname}
      />
      
      <SpecialsPrograms options={dropdown}/>
    </main>
  );
};

export default Specials;