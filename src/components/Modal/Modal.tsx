import { FC, MutableRefObject, ReactNode, useEffect, useRef } from "react";
import { Portal } from "components/Portal/Portal";
import { Icon } from "components/Icon/Icon";

interface iModal {
  show: boolean;
  onClose: () => void;
  fullScreen?: boolean;
  children?: ReactNode;
  className?: string;
};

export const Modal: FC<iModal> = ({show, onClose, children, className, fullScreen = false}) => {
  const ref: MutableRefObject<HTMLDivElement | null> = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      ref?.current && ref.current?.classList.add("show");
    }, 10);

    if (show) {
      setTimeout(() => ref?.current?.focus(), 10);
    }
  }, [show]); // eslint-disable-line

  if (!show) return null;

  return (
    <Portal>
      <div
        className="Modal"
        role="dialog"
        ref={ref}
        onClick={() => onClose()}
      />

      <div className={`Modal-content ${fullScreen ? "fullScreen" : ""} ${className || ""}`}>
        <button className="Modal-close" onClick={() => onClose()}>
          <Icon name="cross" />
        </button>

        {children}
      </div>

    </Portal>
  );
};