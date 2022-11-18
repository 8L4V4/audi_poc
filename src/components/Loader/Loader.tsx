import { FC } from "react";

export const Loader: FC = ({ className = "" }: { className?: string }) => {
  return (
    <div className="Loader-wrap">
      <span className={`Loader ${className}`}></span>
    </div>
  );
};
