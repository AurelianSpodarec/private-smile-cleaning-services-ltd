"use client";

import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { getServices } from "@/services/apis/launch27/requests/booking/helpers";
import Container from "@/components/_layout/Container";

import ScheduleStepIndex from "./_steps";
import CheckoutExcerpt from "./_components/CheckoutExcerpt";
import useSchedule from "@/context/schedule/useSchedule";
import { getBookingFrequencies } from "@/services/apis/launch27/requests/booking/frequency";

function Page() {
  const { setFetchedStepsData, setFetchedBookingFrequenciesData } = useSchedule()

  const servicesQuery = useQuery({
    queryKey: ["services"],
    queryFn: () => getServices(),
    staleTime: Infinity,
  })

  const bookingFrequencyOptionsQuery = useQuery({
    queryKey: ["booking-frequencies"],
    queryFn: () => getBookingFrequencies(),
    staleTime: Infinity
  })

  useEffect(() => {
    if (servicesQuery.isFetched) {
      setFetchedStepsData(servicesQuery.data)
    }
  }, [servicesQuery.isFetched, servicesQuery.data]);

  useEffect(() => {
    if (bookingFrequencyOptionsQuery.isFetched) {
      setFetchedBookingFrequenciesData(bookingFrequencyOptionsQuery.data)
    }
  }, [bookingFrequencyOptionsQuery.isFetched, bookingFrequencyOptionsQuery.data]);

  return (
    <Container>
      <div className="grid p-8 grid-cols-8 gap-28">
        <div className="col-span-5">
          <ScheduleStepIndex />
        </div>
        <div className="col-span-3">
          <CheckoutExcerpt />
        </div>
      </div>
    </Container>
  );
}

export default Page;
