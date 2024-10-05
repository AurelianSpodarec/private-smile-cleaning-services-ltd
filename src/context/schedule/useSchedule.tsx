import { useContext } from "react";
import { ScheduleContext } from "./contextSchedule";

export function useSchedule() {
    const context = useContext(ScheduleContext);

    if (!context) {
        throw new Error("useSchedule must be used within an useSchedule");
    }
    
    return context;
}

export default useSchedule;
