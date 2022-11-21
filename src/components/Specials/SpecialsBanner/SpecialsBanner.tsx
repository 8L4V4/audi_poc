import { ChangeEvent, FC, FormEvent, useState } from "react";

const allowedZipCodes = ["11111", "42121", "59912", "34444"];

interface iSpecialsBanner {
  title: string;
  background: string;
};

export const SpecialsBanner: FC<iSpecialsBanner> = ({title, background}) => {
  const [bannerErrors, setBannerErrors] = useState(false);
  const [zipCode, setZipCode] = useState("");

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
    }
    setZipCode(value);
  }
  return (
    <div className="SpecialsBanner">
      <img src={background} alt="background" className="SpecialsBanner-background"/>
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