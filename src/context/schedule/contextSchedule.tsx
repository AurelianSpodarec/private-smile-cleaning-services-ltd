'use client'

import { useState, useEffect, useMemo, createContext } from "react";
import { ExtrasType } from "@/config/extras";

import stateSteps, { IStep, IStepData } from "./stateSteps";
import scheduleState from "../../app/schedule/_components/scheduleState";
import { IService } from "@/interfaces/IService";

export const ScheduleContext = createContext<any>({});

function ScheduleProvider({ children }: { children: React.ReactNode }) {
  const [fetchedStepsData, setFetchedStepsData] = useState<IService[]>([])

  const [activeMenuIndex, setActiveMenuIndex] = useState(0);
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(11);

  const [bookingData, setBookingData] = useState(scheduleState);
  const [steps, setSteps] = useState(stateSteps);

  // ==============================================================================
  // Update Steps
  // ==============================================================================

  function updateStepData({ stepId, newData }: { stepId: IStep['id']; newData: IStepData }): boolean {
    setSteps((prevSteps) => {
      return prevSteps.map((step) => {
        if (step.id === stepId) {
          return {
            ...step,
            data: newData
          }
        }
        return step
      });
    });
    return true
  }

  // ===================================================================================
  // Update Create Booking State
  // ===================================================================================

  function updateBookingData(updates: Partial<typeof scheduleState>) {
    setBookingData((prevData) => ({
      ...prevData,
      ...updates,
    }));
  }

  // Update Specific Segments of Booking Data
  // ------------------------------------------------------------

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

  // Create Steps
  // ===================================================================================

  function createStepIntro() {
    const servicesType = fetchedStepsData

    return {
      servicesType
    }

    // update the services steps
  }

  function createStepRooms() {
    if (fetchedStepsData.length === 0) {
      console.warn("No data fetched yet.");
      return
    }

    const rooms = fetchedStepsData[selectedServiceIndex]?.pricing_parameters
    const deepCleaning = fetchedStepsData[selectedServiceIndex]?.extras?.[ExtrasType.deepCleaning]
    const pets = fetchedStepsData[selectedServiceIndex]?.extras?.[ExtrasType.pets]

    updateStepData({
      stepId: "intro",
      newData: {
        ...rooms,
        ...deepCleaning,
        ...pets
      }
    })
  }

  useEffect(() => {
    if (fetchedStepsData.length !== 0) {
      createStepRooms()
    }
  }, [fetchedStepsData])

  // ===================================================================================
  // Menu Config
  // ===================================================================================

  function menuNext() {
    if (activeMenuIndex < steps.length - 1) {
      setActiveMenuIndex(activeMenuIndex + 1);
    }
  }

  function menuPrev() {
    if (activeMenuIndex > 0) {
      setActiveMenuIndex(activeMenuIndex - 1);
    }
  }

  function menuGoTo(stepIndex: number) {
    if (stepIndex >= 0 && stepIndex < steps.length) {
      setActiveMenuIndex(stepIndex);
    }
  }

  // ===================================================================================
  // Use Effects
  // ===================================================================================

  const contextValues = {
    steps,
    activeMenuIndex,
    setActiveMenuIndex,
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
