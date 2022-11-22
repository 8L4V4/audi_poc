import { ReactNode, RefObject } from "react";

export interface iSharedModalProps {
  show: boolean;
  /** callback fires when user closes pop up */
  onClose?: () => void;
}

export interface iModalPopUpProps extends iSharedModalProps {
  title?: string | boolean;
  /** custom element instead of string */
  showCloseBtn?: boolean;
  fullSize?: boolean;
  headerChildren?: ReactNode;
  contentClassName?: string;
  blockOverlayClose?: boolean;
  overlayClassName?: string;
  closeModal?: () => void;
  children: ReactNode;
}

/**
 * useModal return object interface
 */
export interface iUseModal {
  modalRef: RefObject<HTMLDivElement>;
  modalContent: RefObject<HTMLDivElement>;
  handleClose: () => void;
  /** callback on keypress wnen modal pop up is opened (to catch ESC btn press and close modal) */
  handleKeyPress: (e: any) => void;
  /** should user focus be closed inside modal pop up */
  closeFocusInModal: () => void;
  /** flag for video content */
  playing: boolean;
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}
