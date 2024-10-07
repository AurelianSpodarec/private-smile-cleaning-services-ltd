'use client'

import SearchAddress from "./_components/SearchAddress";
import ServicesList from "./_components/ServicesList";

function StepServiceType() {
  return (
    <div className="flex flex-col">
      <SearchAddress />
      <ServicesList />
    </div>
  );
}

export default StepServiceType
