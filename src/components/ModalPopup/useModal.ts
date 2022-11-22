import { useEffect, useRef, useState } from "react";
import { iSharedModalProps, iUseModal } from "./modalPopupInterfaces";

/**
 * Custom hook to manage logic & functionality of ModalPopUp component
 * @param {boolean} show
 * @param {() => void} onClose
 * @returns {iUseModal} iUseModal
 */

export const useModal = ({
  show,
  onClose,
}: Partial<iSharedModalProps>): iUseModal => {
  const modalRef = useRef<HTMLDivElement>(null);
  const modalContent = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      modalRef?.current && modalRef.current?.classList.add("show");
      modalContent?.current && modalContent.current?.classList.add("show");
      show && document.body.classList.add("noscroll");
    }, 10);

    if (show) {
      setTimeout(() => modalRef?.current?.focus(), 10);
    }

    !show && document.body.classList.remove("noscroll");

    return () => document.body.classList.remove("noscroll");
  }, [show]);

  const handleClose = (): void => {
    modalRef?.current && modalRef.current.classList.remove("show", "hide");
    modalContent?.current &&
      modalContent.current.classList.replace("show", "hide");
    setTimeout(() => onClose && onClose(), 400);
  };

  const handleKeyPress = (e: any): void => {
    if (e.key === "Escape") handleClose();
  };

  const closeFocusInModal = () => {
    modalRef?.current?.focus();
  };

  return {
    modalRef,
    modalContent,
    handleClose,
    handleKeyPress,
    closeFocusInModal,
    playing,
    setPlaying,
  };
};
