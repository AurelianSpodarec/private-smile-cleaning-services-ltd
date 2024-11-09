import useSchedule from "@/context/schedule/useSchedule";

function ScheduleStepIndex() {
  const { steps, activeStepIndex, menuNext, menuPrev } = useSchedule()

  return (
    <div>
      <header>
        {/* Shchedule Step Index */}
      </header>

      {steps[activeStepIndex].component}

      <footer className="mt-10">
        {/* <button type="button" className="py-2.5 px-4 bg-[#eca869] rounded-lg" onClick={() => menuPrev()}>Previous</button> */}
        <button type="button" className="py-2.5 px-4 text-xl font-semibold w-full bg-[#eca869] rounded-lg" onClick={() => menuNext()}>Continue</button>
      </footer>
    </div>
  );
}

export default ScheduleStepIndex
