import StepPropertyType from "../../app/schedule/_steps/ServiceType";
import StepRooms from "../../app/schedule/_steps/Rooms";
import StepExtra from "../../app/schedule/_steps/Extra";
import StepSelectTime from "../../app/schedule/_steps/SelectTime";
import StepCheckoutSummary from "@/app/schedule/_steps/CheckoutSummary";

export interface IStepData {
  [key: string]: any
}

export interface IStep {
  id: "intro" | "rooms" | "extra" | "selectTime" | "checkout"
  name: string
  component: JSX.Element
  data: IStepData[]
}

const stateSteps:IStep[] = [
  {
    id: "intro",
    name: "Service Type",
    component: <StepPropertyType />,
    data: []
  },
  {
    id: "rooms",
    name: "Rooms",
    component: <StepRooms />,
    data: []
  },
  {
    id: "extra",
    name: "Extra",
    component: <StepExtra />,
    data: []
  },
  {
    id: "selectTime",
    name: "Choose your Time",
    component: <StepSelectTime />,
    data: []
  },
  {
    id: "checkout",
    name: "Payment",
    component: <StepCheckoutSummary />,
    data: [],
  },
]

export default stateSteps
