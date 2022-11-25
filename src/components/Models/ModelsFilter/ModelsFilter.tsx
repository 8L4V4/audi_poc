import {FC, ReactNode, useState } from "react";
import { ModelsFilterBar } from "./ModelsFilterBar/ModelsFilterBar";
import { ModelsFilterBtn } from "./ModelsFilterBtn/ModelsFilterBtn";
import { ModelsFilterRange } from "./ModelsFilterRange/ModelsFilterRange";

const models = [
  <span>e-tron&reg;</span>,
  "e-tron GT",
  "Q3",
  "Q4",
  "Q5",
  "Q7",
  "Q8",
  "A3",
  "A4",
  "A5",
  "A6",
  "A7",
  "A8",
  "TT",
  "R8",
];

const style = [
  "Electrified",
  "SUVs",
  "Sedans & Wagons",
  "Sportbacks",
  "Coupes & Convertibles",
  "Audi Sport"
];

interface iModelsFilter {
  onClose: () => void;
  setFilter: (item: string | ReactNode) => void;
  onRemoveItem: (item: string | ReactNode) => void;
  activeFilters: string[] | ReactNode[] | [];
  onRangeFilter: (v: string) => void;
};

export const ModelsFilter: FC<iModelsFilter> = ({
  onClose, 
  onRemoveItem, 
  setFilter, 
  activeFilters, 
  onRangeFilter
}) => {
  const [price, setPrice] = useState("25,000");

  return (
    <div className="ModelsFilter">
      <ModelsFilterBar onClick={onClose} IconClassName="active" title="Close Filter"/>

        <div className="ModelsFilter-main">
          <div className="ModelsFilter-main-section">
            <h4 className="ModelsFilter-main-section-title">Models</h4>
            <div className="ModelsFilter-main-section-list">
              {models.map((item, idx) => (
                <ModelsFilterBtn
                  key={item !== "string" ? idx : item}
                  onRemove={onRemoveItem}
                  onAdd={setFilter}
                  activeFilters={activeFilters}
                >
                  {item}
                </ModelsFilterBtn>
              ))}
            </div>
          </div>

          <div className="ModelsFilter-main-section">
            <h4 className="ModelsFilter-main-section-title">Body style</h4>

            <div className="ModelsFilter-main-section-list">
                {style.map((item, idx) => (
                  <ModelsFilterBtn 
                    key={item !== "string" ? idx : item}
                    onRemove={onRemoveItem}
                    onAdd={setFilter}
                    activeFilters={activeFilters}
                  >
                    {item}
                  </ModelsFilterBtn>
                ))}
            </div>
          </div>

          <div className="ModelsFilter-main-section price">
            <h4 className="ModelsFilter-main-section-title">Pricing</h4>
              <div className="ModelsFilter-main-section-price">
                $ {price}
              </div>

              <ModelsFilterRange 
                setPrice={(v: string) => setPrice(v)}
                onRangeFilter={onRangeFilter}
              />
          </div>
        </div>

        <div className="ModelsFilter-results">
          <button className="ModelsFilter-results-btn" onClick={onClose}>
            <span className="ModelsFilter-results-btn-text">46 Results Displayed</span>
          </button>
        </div>
    </div>
  );
};