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
      setFetchedStepsData(servicesQuery)
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














// handleNextStep
// handlePrevStep
// handleCustom Step

// stepComplete

// Initial
// ------------------------
// Location (search in an input and then select from one result)
// Choose Property Type [Residential Property][End of Tennancy][Ironing]

// Rooms
// -------------------------

// Bedrooms
// Bathrooms
// Kitchens
// Reception
// Other Rooms

// Deep Cleaning: yes/no (recommended forfirsttimers)

// Pets: yes/no

// Services
// --------------------------
// Fridges: 1-2
// [1-4/5-8/9-12/13-16] Windows
// 5 Shirt: Ironing (Equivalant of 5 shirts Equivalant of 5shirts)
// Walls per room

// Bring cleaning products: boolean
// [Cleaner will bring (+6)] [I have my own]

// Move in OUt : boolean

// Checkout
// -----------------

// Cleaner parking spot
// Private parking spot
// n street   - no parking restrictoin

// i will prove permit
// pay and display (separate charrge)













// Pets/Move in/out - less important

// our cleaners are the best not contractos, other businesses hire cotnractss

// Push Deep Cleaning yes/
// Push Eco yes/no

// pets: boolean
//   Deep Cleaning Boolean
// Move in OUt : boolean

// Fridges:

// windows: 0 - 4, 4 - 8
// ironing: Equivalant of 5 shirts Equivalant of 5shirts
// walls: per room

// How clean is your house:
// Deep cleaning: Upsell the deep cleaning, for the first clean: If its dirty the standard might be bad

// Estimate your work
// This is just estimation: analisis needs to be done
// If less time, refund the money
