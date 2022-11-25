import { Icon } from "components/Icon/Icon";
import { FC, ReactNode } from "react";

interface iModelsActiveFilters {
  options: string[] | ReactNode[] | [];
  rangeFilter: string;
  onClear: () => void;
  onRemoveItem: (item: string | ReactNode) => void;
  removeRange: () => void;
};

export const ModelsActiveFilters: FC<iModelsActiveFilters> = ({options, onClear, onRemoveItem, rangeFilter, removeRange}) => {

  if(!options.length && !rangeFilter) return null;

  const onCleanFilters = () => {
    onClear();
    removeRange();
  };

  return (
    <div className="ModelsActiveFilters">
      {options.map(option => (
        <button 
          key={typeof option === "string" ? option : Math.random() * 1000} 
          className="ModelsActiveFilters-btn" 
          onClick={() => onRemoveItem(option)}
        >
          <span>{option}</span>
          <Icon name="cross" />
        </button>
      ))}


      {!!rangeFilter && <button 
        className="ModelsActiveFilters-btn" 
        onClick={removeRange}
      >
        <span>{rangeFilter}</span>
        <Icon name="cross" />
      </button>}

            
      <button 
        className="ModelsActiveFilters-btn gray" 
        onClick={onCleanFilters}
      >
        <span>reset filter</span>
        <Icon name="cross" />
      </button>
    </div>
  );
};