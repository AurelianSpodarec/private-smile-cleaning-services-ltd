'use client'

import { useState } from "react"
import BookingCard from "./_components/Card"

import StepCleaningProducts from "./_steps/CleaningProducts"
import StepLocation from "./_steps/Location"
import StepPropertyType from "./_steps/PropertyType"
import StepRooms from "./_steps/Rooms"

function Page() {

  const [activeStep, setActiveStep] = useState(2)
  const [selectedPropertyType, setSelectedPropertyType] = useState("")

  // handleNextStep
  // handlePrevStep
  // handleCustom Step

  // stepComplete

  const steps = [
    {
      name: "Choose Property Type",
      component: <StepPropertyType />
    },
    {
      name: "Location",
      component: <StepLocation />
    },
    {
      name: "Rooms",
      component: <StepRooms />
    },
    {
      name: "Cleaning Products",
      component: <StepCleaningProducts />
    }
  ]

  return (
    <BookingCard>
      {steps[activeStep].component}
    </BookingCard>
  );
}

export default Page
