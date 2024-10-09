import useSchedule from "@/context/schedule/useSchedule";

function ScheduleStepIndex() {
  const { steps, activeStepIndex, menuNext, menuPrev } = useSchedule()

  return (
    <div>
      <header>
        {/* Shchedule Step Index */}
      </header>

      {steps[activeStepIndex].component}

      <footer>
        <button type="button" onClick={() => menuPrev()}>Previous</button>
        <button type="button" onClick={() => menuNext()}>Next</button>
      </footer>
    </div>
  );
}

export default ScheduleStepIndex
