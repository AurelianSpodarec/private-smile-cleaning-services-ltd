import React, { useState, useEffect } from 'react';
import CounterInput from './CounterInput';
import * as styles from './BookingForm.module.css';
import { serviceImageMap } from './serviceImageMap';
import utils from './utils';

export default function Step1({ formData, onStepDataChange }) {
  const { getSummary } = utils;

  const [selectedService, setSelectedService] = useState(null);
  const [pricingParameters, setPricingParameters] = useState(formData?.pricingParameters || {});

  useEffect(() => {
    // Retrieve the selected service from localStorage
    const storedService = localStorage.getItem('selectedService');
    if (storedService) {
      const parsedService = JSON.parse(storedService);
      setSelectedService(parsedService);

      // Initialize all pricing parameters with a quantity of 0 if not already set
      const initialParameters = {};
      parsedService.pricing_parameters.forEach(param => {
        initialParameters[param.name] = pricingParameters[param.name] || {
          quantity: 0,
          id: param.id,
          price: param.price,
          duration: param.duration
        };
      });
      setPricingParameters(initialParameters);
    }
  }, []);

  useEffect(() => {
    if (selectedService) {
      onStepDataChange({
        service: selectedService.name,
        pricingParameters: pricingParameters
      });
    }
  }, [selectedService, pricingParameters, onStepDataChange]);

  const handleIncrement = (param) => {
    setPricingParameters(prev => {
      const currentQuantity = prev[param.name]?.quantity || 0;
      if (currentQuantity < param.quantity_maximum) {
        return {
          ...prev,
          [param.name]: {
            ...prev[param.name],
            quantity: currentQuantity + 1
          }
        };
      }
      return prev;
    });
  };

  const handleDecrement = (param) => {
    setPricingParameters(prev => {
      const currentQuantity = prev[param.name]?.quantity || 0;
      if (currentQuantity > param.quantity_minimum) {
        return {
          ...prev,
          [param.name]: {
            ...prev[param.name],
            quantity: currentQuantity - 1
          }
        };
      }
      return prev;
    });
  };

  if (!selectedService) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="row">
        <div className="col">
          <span>Book Service / <b>Step 1 of 6</b></span>
          <h2>Tell us about your property</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-9">
          <div className={styles.pricingParameters}>
            {selectedService.pricing_parameters.map(param => (
              <div key={param.id} className="row pb-15 pl-3">
                <div className="col">
                  <img
                    className={styles.homeLayoutImg}
                    src={serviceImageMap[param.name] || '/img/booking/default.png'}
                    alt={`Image for ${param.name}`}
                  />
                  <span className={styles.spaceLeft}><b>{param.name}</b></span>
                </div>
                <div className="col">
                  <CounterInput
                    count={pricingParameters[param.name]?.quantity || 0}
                    onIncrement={() => handleIncrement(param)}
                    onDecrement={() => handleDecrement(param)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.billForm}>
          <h3>Order Summary</h3>
          <b>Schedule</b>
          <table className='table table-hover'>
            <tbody>
              <tr>
                <td>Recurring</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Start Date</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Preferred Time</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
          
          <b>Order Details</b>
          <table className='table table-hover'>
            <tbody>
              {getSummary(pricingParameters)}
            </tbody>
          </table>
          
        </div>
      </div>
    </>
  );
}
