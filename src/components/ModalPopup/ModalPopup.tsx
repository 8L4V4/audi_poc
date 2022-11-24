import { FC, ReactElement, useEffect } from "react";
import { Portal } from "./Portal/Portal";
import { iModalPopUpProps } from "./modalPopupInterfaces";
import { useModal } from "./useModal";
import Image from "next/image";
import closeIcon from "components/Icon/close.svg";
/**
 * Modal pop up component for most of content
 * @controller @controller @controller**useModal** provides all necessary data and functionality to operate data for current component
 * @returns @returns @returns{React.ReactElement} React.ReactElement
 */
export const ModalPopUp: FC<iModalPopUpProps> = ({
  children,
  show,
  showCloseBtn,
  blockOverlayClose,
  contentClassName = "",
  overlayClassName = "",
  onClose,
  closeModal,
}): ReactElement | null => {
  const {
    modalRef,
    modalContent,
    handleClose,
    handleKeyPress,
    closeFocusInModal,
  } = useModal({ show, onClose });

  useEffect(() => {
    setTimeout(() => {
      modalRef?.current && modalRef.current?.classList.add("show");
    }, 10);

    if (show) {
      setTimeout(() => modalRef?.current?.focus(), 10);
    }
  }, [show]); // eslint-disable-line

  const hideModal = () =>
    closeModal ? undefined : !blockOverlayClose && handleClose();

  if (!show) return null;

  return (
    <Portal>
      <div tabIndex={0} onFocus={closeFocusInModal} />

      <div
        className={`ModalPopUp ${overlayClassName}`}
        role="dialog"
        aria-modal="true"
        onKeyDown={(e) => !blockOverlayClose && handleKeyPress(e)}
        ref={modalRef}
        tabIndex={0}
        onClick={() => hideModal()}
        data-testid="ModalPopUp-wrapper"
      />

      <div
        className={`ModalPopUp-content ${contentClassName}`}
        ref={modalContent}
      >
        {showCloseBtn && (
          <button className="ModalPopUp-close" onClick={onClose}>
            <Image src={closeIcon} layout="fill" alt="close icon" />
          </button>
        )}

        {children}
      </div>

      <div tabIndex={0} onFocus={closeFocusInModal} />
    </Portal>
  );
};
