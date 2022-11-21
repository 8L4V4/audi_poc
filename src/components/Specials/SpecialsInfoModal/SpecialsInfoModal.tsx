import { FC, MutableRefObject, ReactNode, useEffect, useRef } from "react";
import { Portal } from "components/Portal/Portal";
import { Icon } from "components/Icon/Icon";

interface iSpecialsInfoModal {
  show: boolean;
  onClose: () => void;
  children?: ReactNode;
  className?: string;
};

export const SpecialsInfoModal: FC<iSpecialsInfoModal> = ({show, onClose, children, className}) => {
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
        className={`SpecialsInfoModal ${className || ""}`}
        role="dialog"
        ref={ref}
        onClick={() => onClose()}
      />

      <div className="SpecialsInfoModal-content">
        <button className="SpecialsInfoModal-close" onClick={() => onClose()}>
          <Icon name="cross" />
        </button>

        {children}
      </div>
    </Portal>
  );
};