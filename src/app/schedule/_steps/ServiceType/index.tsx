'use client'

import SearchAddress from "./_components/SearchAddress";
import ServicesList from "./_components/ServicesList";

function StepServiceType() {
  return (
    <div className="flex flex-col">
      <h1 className="text-4xl font-semibold mb-8">Customise your clean</h1>
      <SearchAddress />
      <ServicesList />
    </div>
  );
}

export default StepServiceType
