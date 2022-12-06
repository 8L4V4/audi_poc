import { ChangeEvent, FC, useState } from "react";

interface iModelsFilterRange {
  setPrice: (v: string) => void;
  onRangeFilter: (v: string) => void;
}

export const ModelsFilterRange: FC<iModelsFilterRange> = ({setPrice, onRangeFilter}) => {
  const [list, setList] = useState([
    {value: 50000, label: "50,000", className: ""},
    {value: 75000, label: "75,000", className: ""},
    {value: 100000, label: "100,000", className: ""},
    {value: 125000, label: "125,000", className: ""},
    {value: 150000, label: "150,000", className: ""},
    {value: 175000, label: "175,000", className: ""},
    {value: 200000, label: "200,000", className: ""},
  ]);

  const rangeHandler = (v: string) => {
    const price = list.find(item => item.value === +v)?.label;
    onRangeFilter("");

    list.map(item => {
      if(item.value <= +v){
        item.className = "filled"
      } else {
        item.className = ""
      }

      return item;
    });

    if(!price || v === "25000"){
      setPrice("25,000");
      onRangeFilter("25,000");
      return;
    }

    setPrice(price);
    
    onRangeFilter(price);
    return;
  }

  return (
    <div className="ModelsFilterRange">
      <input 
        type="range" 
        className="ModelsFilterRange-input"
        min="25000"
        max="200000"
        step="25000"
        list="range_list"
        onChange={(e: ChangeEvent<HTMLInputElement>) => rangeHandler(e.target.value)}
      />
      <datalist className="ModelsFilterRange-list" id="range_list">
        {list.map(({label, className, value}) => (
          <span className={`ModelsFilterRange-item ${className}`} key={label}>
            <option value={value}/>
          </span>
        ))}
      </datalist>
    </div>
  )
}