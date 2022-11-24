import { FC, ReactNode, useState } from "react";
import { Modal } from "components/Modal/Modal";
import { ModelsActiveFilters } from "../ModelsFilter/ModelsActiveFilters/ModelsActiveFilters";
import { ModelsFilter } from "../ModelsFilter/ModelsFilter";
import { ModelsFilterBar } from "../ModelsFilter/ModelsFilterBar/ModelsFilterBar";
import { ModelsDetails } from "../ModelsDetails/ModelsDetails";

export const ModelsBanner: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[] | ReactNode[] | []>([]);
  const [rangeFilter, setRangeFilter] = useState("");

  const removeFilter = (item: string | ReactNode) => setActiveFilters(pv => pv.filter(filterItem => filterItem !== item));
  const addFilter = (v: string | ReactNode) => setActiveFilters(pv => ([...pv, v]));
  const clearFilters = () => setActiveFilters([]);
  const removeRange = () => setRangeFilter("");

  return (
    <>
      <div className="ModelsBanner">
        <h2 className="ModelsBanner-title">View all models</h2>

        <ModelsFilterBar 
          onClick={() => setShowModal(true)} 
          IconClassName={showModal ? "active" : ""}
        />

        <ModelsActiveFilters 
          options={activeFilters} 
          onClear={clearFilters}
          onRemoveItem={removeFilter}
          rangeFilter={rangeFilter}
          removeRange={removeRange}
        />

        <Modal 
          show={showModal} 
          onClose={() => setShowModal(false)}
          fullScreen
        >
          <ModelsFilter 
            onClose={() => setShowModal(false)}
            setFilter={addFilter}
            onRemoveItem={removeFilter}
            activeFilters={activeFilters}
            onRangeFilter={(v: string) => setRangeFilter(v)} 
          />
        </Modal>
      </div>

      <ModelsDetails/>
    </>
  );
};