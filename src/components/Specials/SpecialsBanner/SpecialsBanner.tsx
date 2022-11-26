import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { SpecialsPageAPI } from "api";
import { useApi } from "hooks/useApi";
import { useHttp } from "hooks/useHttp";

const allowedZipCodes = ["11111", "42121", "59912", "34444"];

interface iHeaderData {
  title: string;
  background: {url: string;};
};

export const SpecialsBanner: FC = () => {
  const { call, data } = useHttp();
  const [bannerErrors, setBannerErrors] = useState(false);
  const [zipCode, setZipCode] = useState("");
  const headerData = data?.data?.entry;

  useEffect(() => {
    call(SpecialsPageAPI.getHeaderData())
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

  if(!headerData) return null;

  const {title, background: {url}} = headerData as iHeaderData;

  return (
    <div className="SpecialsBanner">
      <img src={url} alt="background" className="SpecialsBanner-background"/>
      <div className="SpecialsBanner-body">
        <h2 className="SpecialsBanner-title">{title}</h2>
        
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