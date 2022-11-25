import { FC, useState } from "react";
import { Modal } from "components/Modal/Modal";

export const ModelsDetails: FC = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="ModelsDetails">
      <button className="ModelsDetails-btn" onClick={() => setShowDetails(true)}>View MSRP details</button>

      <Modal show={showDetails} onClose={() => setShowDetails(false)}>
        <div className="ModelsDetails-modal-text">
          Prices listed are the Manufacturer's Suggested Retail Price for the vehicle and options you chose. 
          Prices exclude destination, taxes, title, other options and dealer charges. Dealer sets actual price.
        </div>
      </Modal>
    </div>
  );
};