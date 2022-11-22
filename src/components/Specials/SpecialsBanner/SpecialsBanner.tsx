import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { SpecialsPageAPI } from "api";
import { useApi } from "hooks/useApi";

const allowedZipCodes = ["11111", "42121", "59912", "34444"];

interface iHeaderData {
  title: string;
  url: string;
};

export const SpecialsBanner: FC = () => {
  const [bannerErrors, setBannerErrors] = useState(false);
  const [headerData, setHeaderData] = useState<iHeaderData>()
  const [zipCode, setZipCode] = useState("");
  const { apiCall } = useApi();

  useEffect(() => {
    apiCall(SpecialsPageAPI.getHeaderData())
      .then(({data: {entry: {title, background: {url}}}}) => setHeaderData({title, url}))
      .catch(() => {
        console.log(
          "%c Error getting { Specials Banner } data",
          "color: red; font-size: 16px; font-weight: bold; border-left: 5px solid red"
        );
      });
  }, []);
  
  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(zipCode.length !== 5 || !allowedZipCodes.includes(zipCode)){
      setBannerErrors(true);
      return;
    }
    setBannerErrors(false);
  };

  const onZipCodeHandler = (value: string) => {
    if(value === "") {
      setBannerErrors(false);
    };

    setZipCode(value);
  };

  return (
    <div className="SpecialsBanner">
      <img src={headerData?.url} alt="background" className="SpecialsBanner-background"/>
      <div className="SpecialsBanner-body">
        <h2 className="SpecialsBanner-title">{headerData?.title}</h2>
        
        <form className="SpecialsBanner-form" onSubmit={onSubmitHandler}>
          <input 
            type="text" 
            className="SpecialsBanner-form-input" 
            placeholder="ZIP Code"
            value={zipCode}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onZipCodeHandler(e.target.value)}
            maxLength={5}
          />
          <button type="submit" className="SpecialsBanner-form-btn">Search</button>
          {bannerErrors && (
            <div className="SpecialsBanner-form-errors">
                This field is required.
            </div>
          )}
        </form>
      </div>
   </div>
  );
};