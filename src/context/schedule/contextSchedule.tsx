'use client'

import { useState, useEffect, useMemo, createContext } from "react";

import scheduleState from "../../app/schedule/_components/scheduleState";
import StepPropertyType from "../../app/schedule/_steps/ServiceType";
import StepRooms from "../../app/schedule/_steps/Rooms";
import StepExtra from "../../app/schedule/_steps/Extra";
import StepSelectTime from "../../app/schedule/_steps/SelectTime";
import StepCheckoutSummary from "@/app/schedule/_steps/CheckoutSummary";

export const ScheduleContext = createContext<any>({});

function ScheduleProvider({ children }: { children: React.ReactNode }) {
  const [activeMenuStep, setActiveMenuStep] = useState(0);
  const [fetchedStepsData, setFetchedStepsData] = useState([])
  const [selectedPropertyType, setSelectedPropertyType] = useState("");

  const [bookingData, setBookingData] = useState(scheduleState);

  const steps = [
    {
      name: "Choose Service Type",
      component: <StepPropertyType />,
    },
    {
      name: "Rooms",
      component: <StepRooms />,
    },
    {
      name: "Extra",
      component: <StepExtra />,
    },
    {
      name: "Select Time/Recommended time",
      component: <StepSelectTime />,
    },
    {
      name: "Checkout",
      component: <StepCheckoutSummary />
    },
  ];

  // ===================================================================================
  // Functions
  // ===================================================================================

  // Function to update booking data
  function updateBookingData(updates: Partial<typeof scheduleState>) {
    setBookingData((prevData) => ({
      ...prevData,
      ...updates,
    }));
  }

  // Update functions
  function setServiceType(serviceType: string) {
    updateBookingData({
      services: [
        {
          ...bookingData.services[0],
          id: serviceType,
        },
      ],
    });
  }

  function setPaymentMethod(method: string, stripeDetails?: { token: string, cardNumber: string, cardExpires: string, cvc: string }) {
    const updates = {
      payment_method: method,
    };

    if (method === 'stripe' && stripeDetails) {
      Object.assign(updates, {
        stripe_token: stripeDetails.token,
        card_number: stripeDetails.cardNumber,
        card_expires: stripeDetails.cardExpires,
        card_cvc: stripeDetails.cvc,
      });
    }

    updateBookingData(updates);
  }

  function setUserDetails(userDetails: { first_name: string, last_name: string, email: string }) {
    updateBookingData({
      user: {
        ...bookingData.user,
        ...userDetails,
      },
    });
  }

  function setAddress(addressDetails: { address: string, city: string, zip: string }) {
    updateBookingData({
      address: addressDetails.address,
      city: addressDetails.city,
      zip: addressDetails.zip,
    });
  }

  // ===================================================================================
  // Menu Config
  // ===================================================================================

  function menuNext() {
    if (activeMenuStep < steps.length - 1) {
      setActiveMenuStep(activeMenuStep + 1);
    }
  }

  function menuPrev() {
    if (activeMenuStep > 0) {
      setActiveMenuStep(activeMenuStep - 1);
    }
  }

  function menuGoTo(stepIndex: number) {
    if (stepIndex >= 0 && stepIndex < steps.length) {
      setActiveMenuStep(stepIndex);
    }
  }

  // ===================================================================================
  // Use Effects
  // ===================================================================================

  const contextValues = {
    steps,
    activeMenuStep,
    setActiveMenuStep,
    // Menu Gonfig
    menuNext,
    menuPrev,
    menuGoTo,
    // 
    fetchedStepsData,
    setFetchedStepsData,

    bookingData,
    // 
    setServiceType,
    setAddress
  }

  return (
    <ScheduleContext.Provider value={contextValues}>
      {children}
    </ScheduleContext.Provider>
  );
}

export default ScheduleProvider;
