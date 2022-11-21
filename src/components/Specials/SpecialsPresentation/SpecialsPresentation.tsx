import Link from "next/link";
import { FC, ReactNode, useState } from "react"
import { SpecialsInfoModal } from "../SpecialsInfoModal/SpecialsInfoModal";

interface iSpecialsPresentation {
  title: string;
  text: string | ReactNode;
  img: string;
  url: string;
  btn: {
    title: string,
    modalText: string | ReactNode;
  }
  className?: string;
};

export const SpecialsPresentation: FC<iSpecialsPresentation> = ({title, text, img, btn, url, className}) => {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <>
      <div className={`SpecialsPresentation ${className || ""}`}>
        <h2 className="SpecialsPresentation-title">{title}</h2>

        <div className="SpecialsPresentation-main">
          <div className="SpecialsPresentation-body">
            <div className="SpecialsPresentation-body-text">{text}</div>

            <button 
              className="SpecialsPresentation-body-btn"
              onClick={() => setShowModal(true)}
            >
              {btn.title}
            </button>

            <Link href={url} className="SpecialsPresentation-body-link">
                Request a quote
            </Link>
          </div>

          <div className="SpecialsPresentation-img-container">
            <img src={img} alt="presentation_image" className="SpecialsPresentation-img"/>
          </div>
        </div>
      </div>

      {showModal && (
        <SpecialsInfoModal show={showModal} onClose={() => setShowModal(false)}>
          {btn.modalText}
        </SpecialsInfoModal>
      )}
    </>
  )
}
