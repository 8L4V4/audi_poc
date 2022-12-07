import { Loader } from "components/Loader/Loader";
import { DropDownItem } from "components/DropDownItem/DropDownItem";
import { useHttp } from "hooks/useHttp";
import { FC, useEffect } from "react";
import { AxiosRequestConfig } from "axios";

interface iDropDownData {
  title: string;
  subtitle: string;
  item: {title: string, content: string; btn_title: string;}[]
};

interface iDropDown {
  axiosRequest: () => AxiosRequestConfig<any>;
  className?: string;
};

export const DropDown: FC<iDropDown> = ({axiosRequest, className}) => {
  const { call, data, isLoading } = useHttp();
  const dropDownData = data?.data?.entry as iDropDownData;
  
  useEffect(() => {
    call(axiosRequest())
      .catch(() => {
        console.log(
          "%c Error getting { Specials Header } data",
          "color: red; font-size: 16px; font-weight: bold; border-left: 5px solid red"
        );
      });
  }, []);

  if(!dropDownData) return null;

  return (
    <div className={`DropDown ${className || ""}`}>
      {isLoading && <Loader/>}

      {!isLoading && (
      <>
        <div className="DropDown-header">
          <h2 className="DropDown-header-title">{dropDownData?.title}</h2>
          <p className="DropDown-header-subtitle">{dropDownData?.subtitle}</p>
        </div>

        <div className="DropDown-list">
          {dropDownData?.item?.map(item => (
            <DropDownItem 
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
      </>
      )}
    </div>
  );
};