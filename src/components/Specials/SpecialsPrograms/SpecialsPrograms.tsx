import { FC } from "react";
import { SpecialsProgramsItem } from "../SpecialsProgramsItem/SpecialsProgramsItem";

interface iSpecialsPrograms {
  options: any
};

export const SpecialsPrograms: FC<iSpecialsPrograms> = ({options}) => {

  if(!options) return null;

  return (
    <div className="SpecialsPrograms">
      <div className="SpecialsPrograms-header">
        <h2 className="SpecialsPrograms-header-title">Special offers and programs</h2>
        <p className="SpecialsPrograms-header-subtitle">If you're among a select category of Audi buyers, you may qualify for an exclusive special program.</p>
      </div>

      <div className="SpecialsPrograms-dropDown">
        {options.map((item: any, idx: number) => (
          <SpecialsProgramsItem 
            title={item[`section_${idx + 1}`].title}
            content={item[`section_${idx + 1}`].content}
            link={{
              title: item[`section_${idx + 1}`].btn_title,
              url: "#"
            }}
            key={item[`section_${idx + 1}`].title}
          /> 
          ))}
      </div>
    </div>
  );
};