import { FC, ReactNode, ReactPortal, useEffect, useState } from "react";
import ReactDOM from "react-dom";

export interface iPortalProps {
  className?: string;
  children?: ReactNode;
}

export const Portal: FC<iPortalProps> = ({
  className,
  children,
}): ReactPortal => {
  const [container] = useState(document.createElement("div"));

  useEffect(() => {
    document.body.appendChild(container).className = `${className || "Portal"}`;

    return () => {
      document.body.removeChild(container);
    };
  }, []); // eslint-disable-line

  return ReactDOM.createPortal(children, container);
};