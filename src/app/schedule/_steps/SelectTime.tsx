import { Calendar } from "@/components/ui/calendar";
import useSchedule from "@/context/schedule/useSchedule";

function StepSelectTime() {

  const { fetchedBookingFrequenciesData } = useSchedule()
  // Options
  console.log("woop", fetchedBookingFrequenciesData)
  return (
    <div>

      <div className="grid grid-cols-6 gap-4">
        {fetchedBookingFrequenciesData.map((item) => {
          return (
            <button className="bg-gray-200">
              {item.name}
            </button>
          )
        })}
      </div>


      <Calendar />
    </div>
  );
}

export default StepSelectTime