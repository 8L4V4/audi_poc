import { FC, ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
/**
 * Portal component params interface
 */
export interface iPortalProps {
  className?: string;
  children: ReactNode;
}

/**
 * Renders portal container
 * @return @return{React.ReactPortal}
 * @constructor
 * */

export const Portal: FC<iPortalProps> = ({ children, className }) => {
  const [mounted, setMounted] = useState<Element | null>(null);

  useEffect(() => {
    const el = document.createElement("div");
    document.body.appendChild(el).className = `Portal ${className || ""}`;
    const portal = document.querySelector(".Portal");
    portal && setMounted(portal);

    return () => {
      setMounted(null);
      document.body.removeChild(el);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return mounted ? createPortal(children, mounted) : null;
};
