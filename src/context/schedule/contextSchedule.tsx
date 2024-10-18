'use client'

import { useState, useEffect, useMemo, createContext } from "react";
import { ExtrasType } from "@/config/extras";

import stateSteps, { IStep, IStepData } from "./stateSteps";
import scheduleState from "../../app/schedule/_components/scheduleState";
import { IService } from "@/interfaces/IService";
import { excludeItemsFromArrayById } from "@/lib/utils";

export const ScheduleContext = createContext<any>({});


const serviceConfig = {
  residential: {
    createRooms: {
      includeDeepCleaning: true,
      includePets: true,
    },
    extra: {

    },
    selectTime: {
      // what component to use
    },
    checkout: true
  },
  endOfTenancy: {
    createRooms: {
      includeDeepCleaning: false,
      includePets: true,
    },
  },
  ironing: {
    createIroning: true,
    createSelectTime: true,
    createCheckout: true,
  },
};

function ScheduleProvider({ children }: { children: React.ReactNode }) {
  const [fetchedStepsData, setFetchedStepsData] = useState<IService[]>([])
  const [fetchedBookingFrequenciesData, setFetchedBookingFrequenciesData] = useState([])

  const [bookingData, setBookingData] = useState(scheduleState);

  const [steps, setSteps] = useState(stateSteps);
  const [activeStepIndex, setActiveStepIndex] = useState(2);

  const [selectedServiceId, setSelectedServiceId] = useState(11);
  const currentService = fetchedStepsData[selectedServiceId]

  // ===================================================================================
  // Helper Functions
  // ===================================================================================

  function getService(id) {
    return currentService?.pricing_parameters.find((item) => item.id === id)
  }

  function getExtra(id) {
    return currentService?.extras.find((item) => item.id === id)
  }

  // ==============================================================================
  // Update Steps
  // ==============================================================================

  function getStepById(stepId: number) {
    return steps.find((item) => item.id === stepId)
  }

  function updateStepData({ stepId, newData }: { stepId: IStep['id']; newData: IStepData }): boolean {
    setSteps((prevSteps) => {
      return prevSteps.map((step) => {
        if (step.id === stepId) {
          return { ...step, data: Array.isArray(newData) ? [...newData] : { ...step.data, ...newData } };
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

  // ===================================================================================
  // Create Steps
  // ===================================================================================

  function createStepRooms() {
    if (fetchedStepsData.length === 0) {
      console.warn("No data fetched yet.");
      return
    }

    const rooms = currentService?.pricing_parameters
    const deepCleaning = getExtra(ExtrasType.deepCleaning)
    const pets = getExtra(ExtrasType.pets)

    const newData = {
      rooms,
      deepCleaning,
      pets
    }

    updateStepData({
      stepId: "rooms",
      newData,
    })
  }

  function createStepExtra() {
    if (fetchedStepsData.length === 0) {
      console.warn("No data fetched yet.");
      return
    }

    const extrasToExcludeFromServices = [
      ExtrasType.deepCleaning,
      ExtrasType.pets,
      ExtrasType.moveInMoveOut,
      ExtrasType.cleaningProducts,
      ExtrasType.premiumBookingSlot
    ];

    const newData = {
      services: excludeItemsFromArrayById(currentService.extras, extrasToExcludeFromServices),
      moveInOut: getExtra(ExtrasType.moveInMoveOut),
      cleaningProducts: getExtra(ExtrasType.cleaningProducts)
    }

    updateStepData({
      stepId: "extra",
      newData,
    })
  }

  function createStepSelectTime() {
    if (fetchedStepsData.length === 0) {
      console.warn("No data fetched yet.");
      return
    }

    const newData = {}

    updateStepData({
      stepId: "selectTime",
      newData,
    })

  }

  function createStepCheckout() {
    if (fetchedStepsData.length === 0) {
      console.warn("No data fetched yet.");
      return
    }

    const newData = {}

    updateStepData({
      stepId: "checkout",
      newData,
    })
  }

  // ---------------------------------------------------------------

  useEffect(() => {
    if (fetchedStepsData.length !== 0) {
      createStepRooms()
      createStepExtra()
      createStepSelectTime()
      createStepCheckout()
    }
  }, [fetchedStepsData])

  // ===================================================================================
  // Menu Config
  // ===================================================================================

  function menuNext() {
    if (activeStepIndex < steps.length - 1) {
      setActiveStepIndex(activeStepIndex + 1);
    }
  }

  function menuPrev() {
    if (activeStepIndex > 0) {
      setActiveStepIndex(activeStepIndex - 1);
    }
  }

  function menuGoTo(stepIndex: number) {
    if (stepIndex >= 0 && stepIndex < steps.length) {
      setActiveStepIndex(stepIndex);
    }
  }

  // ===================================================================================
  // Use Effects
  // ===================================================================================

  const contextValues = {
    setFetchedBookingFrequenciesData,
    fetchedBookingFrequenciesData,

    steps,
    activeStepIndex,
    setActiveStepIndex,
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
    setAddress,

    getStepById,

    setSelectedServiceId,
    selectedServiceId,
  }

  // reccuring boookings - discount

  return (
    <ScheduleContext.Provider value={contextValues}>
      {children}
    </ScheduleContext.Provider>
  );
}

export default ScheduleProvider;
