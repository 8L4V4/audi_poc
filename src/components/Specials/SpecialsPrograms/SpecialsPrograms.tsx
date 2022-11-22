import { SpecialsPageAPI } from "api";
import { useApi } from "hooks/useApi";
import { FC, useEffect, useState } from "react";
import { SpecialsProgramsItem } from "../SpecialsProgramsItem/SpecialsProgramsItem";
interface iDropDownData {
  title: string;
  subtitle: string;
  item: {title: string, content: string; btn_title: string;}[]
};

export const SpecialsPrograms: FC = () => {
  const { apiCall } = useApi();
  const [dropDownData, setDropDownData] = useState<iDropDownData>()

  useEffect(() => {
    apiCall(SpecialsPageAPI.getDropDownData())
      .then(({data: {entry: {title, subtitle, item}}}) => setDropDownData({title, subtitle, item}))
      .catch(() => {
        console.log(
          "%c Error getting { Specials Header } data",
          "color: red; font-size: 16px; font-weight: bold; border-left: 5px solid red"
        );
      });
  }, []);

  if(!dropDownData) return null;

  return (
    <div className="SpecialsPrograms">
      <div className="SpecialsPrograms-header">
        <h2 className="SpecialsPrograms-header-title">{dropDownData?.title}</h2>
        <p className="SpecialsPrograms-header-subtitle">{dropDownData?.subtitle}</p>
      </div>

      <div className="SpecialsPrograms-dropDown">
        {dropDownData?.item?.map(item => (
          <SpecialsProgramsItem 
            key={item.title}
            title={item.title}
            content={item.content}
            link={{
              title: item.btn_title,
              url: "#"
            }}
          /> 
          ))}
      </div>
    </div>
  );
};