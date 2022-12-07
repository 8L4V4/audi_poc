import { ButtonHTMLAttributes, FC, MouseEvent, ReactNode, useEffect, useState } from "react";

interface iModelsFilterBtn extends ButtonHTMLAttributes<HTMLButtonElement> {
  onRemove: (item: string | ReactNode) => void;
  onAdd: (item: string | ReactNode) => void;
  activeFilters: string[] | ReactNode[] | [];
}

export const ModelsFilterBtn: FC<iModelsFilterBtn> = ({children, onClick, onRemove, onAdd, activeFilters, ...props}) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const isActive = activeFilters.find(item => item === children);
    !!isActive && setActive(true);
  },[])

  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    setActive(pv => !pv);

    active && onRemove(children);
    !active && onAdd(children)

    onClick?.(e);
  };

  return (
    <button 
      {...props} 
      onClick={(e: MouseEvent<HTMLButtonElement>) => clickHandler(e)} 
      className={`ModelsFilterBtn ${active ? "active" : ""}`}
    >
      {children}
    </button>
  );
};