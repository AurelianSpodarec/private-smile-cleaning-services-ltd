import useSchedule from "@/context/schedule/useSchedule";

function StepRooms() {
  const { steps, getStepById } = useSchedule()
  // console.log(fetchedStepsData.data)
  const data = getStepById("rooms")
  // console.log("woop", data.data)
  return (
    <section>

      <div>
        {data.data.deepCleaning.name}
      </div>

      <div className="flex flex-col space-y-2">
        {data.data.rooms.map((item) => {
          return (
            <button type="button" className="bg-gray-200">
              {item.name}
            </button>
          )
        })}
      </div>

      <div>
        {data.data.pets.name}
      </div>

    </section>
  );
}

export default StepRooms
