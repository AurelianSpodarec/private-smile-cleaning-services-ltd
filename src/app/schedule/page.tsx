"use client";

import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { getServices } from "@/services/apis/launch27/requests/booking/helpers";
import Container from "@/components/_layout/Container";

import ScheduleStepIndex from "./_steps";
import CheckoutExcerpt from "./_components/CheckoutExcerpt";
import useSchedule from "@/context/schedule/useSchedule";

function Page() {
  const { setFetchedStepsData } = useSchedule()

  const servicesQuery = useQuery({
    queryKey: ["services"],
    queryFn: () => getServices(),
    staleTime: Infinity,
  })

  useEffect(() => {
    if (servicesQuery.isFetched) {
      console.log(servicesQuery.data);
      setFetchedStepsData(servicesQuery.data)
    }
  }, [servicesQuery.isFetched, servicesQuery.data]);

  return (
    <Container>
      <div className="grid p-8 grid-cols-3">
        <div className="col-span-2">
          <ScheduleStepIndex />
        </div>
        <div className="col-span-1">
          <CheckoutExcerpt />
        </div>
      </div>
    </Container>
  );
}

export default Page;
