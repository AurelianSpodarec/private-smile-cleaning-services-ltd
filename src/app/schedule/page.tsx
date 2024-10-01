'use client'

import { useState } from "react"
import BookingCard from "./_components/Card"

import StepCleaningProducts from "./_steps/CleaningProducts"
import StepLocation from "./_steps/Location"
import StepPropertyType from "./_steps/PropertyType"
import StepRooms from "./_steps/Rooms"
import StepExtra from "./_steps/Extra"
import StepSelectTime from "./_steps/SelectTime"

function Page() {

  const [activeStep, setActiveStep] = useState(1)
  const [selectedPropertyType, setSelectedPropertyType] = useState("")

  const [bookingData, setBookingData] = useState(
    {
      booking_type: "default",

      payment_method: "cash",
      // "payment_method": "stripe",
      // "card_cvc": "321",
      // "card_expires": "10/27",
      // "card_number": "4242424242424242",
      // "stripe_token": "pk_test_51PFYyyDHh5fcObfcpESlkFB9FMIyAfrVuR2hUFzBTqWpRii6TctHaGlKWFQYkw0Lt7ts9Xkd7PRe0h73NMhGdJiV00ec4hkerq",

      user: {
        first_name: "",
        last_name: "",
        email: ""
      },
      address: "",
      city: "",
      zip: "",

      phone: "",
      location_id: 1,

      frequency_id: 1,
      service_date: "2024-10-02T12:00:00",
      arrival_window: 120,

      discount_code: null,
      services: [
        {
          id: 7,
          hourly: null,
          extras: [
            {
              id: 2,
              quantity: 3
            }
          ],
          pricing_parameters: [
            {
              id: 3,
              quantity: 0
            }
          ]
        }
      ],

      custom_fields: [
        {
          id: 255,
          values: [
            {
              id: 1,
              other: null
            }
          ]
        }
      ],
      meta: [
        {
          code: "form",
          value: "widget"
        }
      ],
    }
  );

  // handleNextStep
  // handlePrevStep
  // handleCustom Step

  // stepComplete

  const steps = [
    {
      name: "Choose Service Type", // Ironing, Residential, End of tnency
      component: <StepPropertyType />
    },
    {
      name: "Location", // Optional Location if not selected already
      component: <StepLocation />
    },

    {
      name: "Rooms", // rooms
      component: <StepRooms />
    },


    {
      name: "Extra",
      component: <StepExtra />
    },
    {
      name: "Select Time/ Recommended time", // 
      component: <StepSelectTime />
    },
    {
      name: "Cleaning Products", // Upsell ECO cleaning products yes/no
      component: <StepCleaningProducts />
    },
    {
      name: "Checkout" // pay
    }
  ]

  // Pets/Move in/out - less important


  // Push Deep Cleaning yes/no
  // Push Eco yes/no

  // our cleaners are the best not contractos, other businesses hire cotnractss

  // pets: boolean
  //   Deep Cleaning Boolean
  // Move in OUt : boolean


  // Fridges:

  // windows: 0 - 4, 4 - 8
  // ironing: Equivalant of 5 shirts Equivalant of 5shirts
  // walls: per room


  // How clean is your house: 
  // Deep cleaning: Upsell the deep cleaning, for the first clean: If its dirty the standard might be bad

  // Estimate your work
  // This is just estimation: analisis needs to be done
  // If less time, refund the money



  return (
    <BookingCard>
      {steps[activeStep].component}
    </BookingCard>
  );
}

export default Page
