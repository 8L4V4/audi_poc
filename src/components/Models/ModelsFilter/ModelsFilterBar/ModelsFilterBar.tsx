import { Icon } from "components/Icon/Icon";
import { ButtonHTMLAttributes, FC } from "react";

interface iModelsFilterBar extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  IconClassName?: string;
};

export const ModelsFilterBar: FC<iModelsFilterBar> = ({title, IconClassName,...props}) => {
  return (
    <button {...props} className="ModelsFilterBar">
      <span className="ModelsFilterBar-title">{title || "Open Filter"}</span>
      <Icon name="arrow-down" className={IconClassName || ""}/>
    </button>
  );
};