import useSchedule from "@/context/schedule/useSchedule";

function StepExtra() {
  const { getStepById } = useSchedule()
  const step = getStepById("extra")
  const data = step.data

  return (
    <div>
      <div>
        {data.cleaningProducts?.name}
      </div>

      <div className="space-y-2">
        {data.services && data.services.map((item) => {
          return (
            <div className="bg-gray-200" key={item.id}>
              {item.name}
            </div>
          )
        })}
      </div>

      <div>
        {data.moveInOut?.name}
      </div>
    </div>
  );
}

export default StepExtra
