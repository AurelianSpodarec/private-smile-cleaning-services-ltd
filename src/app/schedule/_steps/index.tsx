import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import useSchedule from "@/context/schedule/useSchedule";
import { getServices } from "@/services/apis/launch27/requests/booking/helpers";

function ScheduleStepIndex() {
  const { steps, activeMenuStep, menuNext, menuPrev } = useSchedule()

  // const servicesQuery = useQuery({
  //   queryKey: ["services"],
  //   queryFn: () => getServices(),
  // })

  // useEffect(() => {
  //   // fetchData()
  //   console.log(servicesQuery.data)
  // }, [])

  return (
    <div>
      <header>
        Shchedule Step Index
      </header>

      {steps[activeMenuStep].component}

      <footer>
        <button type="button" onClick={() => menuPrev()}>Previous</button>
        <button type="button" onClick={() => menuNext()}>Next</button>
      </footer>
    </div>
  );
}

export default ScheduleStepIndex
