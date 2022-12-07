import { Modal } from "components/Modal/Modal";
import { ModelsDetails } from "components/Models/ModelsDetails/ModelsDetails";
import { ModelsActiveFilters } from "components/Models/ModelsFilter/ModelsActiveFilters/ModelsActiveFilters";
import { ModelsFilter } from "components/Models/ModelsFilter/ModelsFilter";
import { ModelsFilterBar } from "components/Models/ModelsFilter/ModelsFilterBar/ModelsFilterBar";
import { ModelsList } from "components/Models/ModelsList/ModelsList";
import { NextPage } from "next";
import { ReactNode, useState } from "react";

const Models: NextPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[] | ReactNode[] | []>([]);
  const [rangeFilter, setRangeFilter] = useState("");

  const removeFilter = (item: string | ReactNode) => setActiveFilters(pv => pv.filter(filterItem => filterItem !== item));
  const addFilter = (v: string | ReactNode) => setActiveFilters(pv => ([...pv, v]));
  const clearFilters = () => setActiveFilters([]);
  const removeRange = () => setRangeFilter("");
  
  return (
    <main className="Models">
      <div className="Models-banner">
        <h2 className="Models-banner-title">View all models</h2>

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

      <ModelsList filters={{active: activeFilters, range: rangeFilter}} />
    </main>
  );
};

export default Models;