import useSchedule from "@/context/schedule/useSchedule";

function StepRooms() {
  const { fetchedStepsData } = useSchedule()
// console.log(fetchedStepsData.data)
  return (
    <div>
      {/* {rooms.map((item) => {
        return (
          <div>
            {item.name}
          </div>
        )
      })} */}
    </div>
  );
}

export default StepRooms
