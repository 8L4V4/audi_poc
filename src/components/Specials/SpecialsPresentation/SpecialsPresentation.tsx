import Link from "next/link";
import { iPresentationData } from "pages/special-offers";
import { FC, useState } from "react"
import { Modal } from "../../Modal/Modal";

interface iSpecialsPresentation extends Omit<iPresentationData, "image" | "classname"> {
  url: string;
  image: string;
  className: string;
}

export const SpecialsPresentation: FC<iSpecialsPresentation> = ({
    title, 
    content, 
    image, 
    btn_title, 
    modal_content, 
    url, 
    className
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className={`SpecialsPresentation ${className}`}>
        <h2 className="SpecialsPresentation-title">{title}</h2>

        <div className="SpecialsPresentation-main">
          <div className="SpecialsPresentation-body">
            <div className="SpecialsPresentation-body-text">{content}</div>

            <button 
              className="SpecialsPresentation-body-btn"
              onClick={() => setShowModal(true)}
            >
              {btn_title}
            </button>

            <Link href={url} className="SpecialsPresentation-body-link">
                Request a quote
            </Link>
          </div>

          <div className="SpecialsPresentation-img-container">
            <img src={image} alt="presentation_image" className="SpecialsPresentation-img"/>
          </div>
        </div>
      </div>

      {<Modal show={showModal} onClose={() => setShowModal(false)}>
          {modal_content}
      </Modal>}
    </>
  )
}
