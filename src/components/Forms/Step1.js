import React, { useState, useEffect } from 'react';
import ToggleSwitch from './ToggleSwitch';
import CounterInput from './CounterInput';
import * as styles from './BookingForm.module.css';
import { serviceImageMap } from './serviceImageMap';

export default function Step1({ formData, onStepDataChange }) {
  const [services, setServices] = useState([]);
  const [selectedServices, setSelectedServices] = useState(formData?.services || {});
  const [pricingParameters, setPricingParameters] = useState(formData?.pricingParameters || []);

  useEffect(() => { 
    fetch('https://smile.launch27.com/latest/booking/services')
      .then(response => response.json())
      .then(data => {
        setServices(data);
      })
      .catch(error => console.error('Error fetching services:', error));
  }, []);

  useEffect(() => {
     // Check if it's the first time arriving at Step1
     const isFirstTime = !localStorage.getItem('hasVisitedStep1');

     if (isFirstTime) {
       // Clear localStorage
       localStorage.clear();
 
       // Mark that the user has visited Step1
       localStorage.setItem('hasVisitedStep1', 'true');
     } else {
        // Notify parent component of the step data
        onStepDataChange({
          services: selectedServices,
          pricingParameters: pricingParameters
        });
     }

   
  }, [selectedServices, pricingParameters, onStepDataChange]);

  const handleToggleService = (serviceName, serviceId) => {
    setSelectedServices(prev => ({
      ...prev,
      [serviceName]: !prev[serviceName]
    }));

    if (!selectedServices[serviceName]) {
      // Add service to pricingParameters when toggled on
      setPricingParameters(prev => [
        ...prev,
        { id: serviceId, service: serviceName, parameters: {} }
      ]);
    } else {
      // Remove service from pricingParameters when toggled off
      setPricingParameters(prev => prev.filter(p => p.service !== serviceName));
    }
  };

  const handleIncrement = (serviceName, param) => {
    setPricingParameters(prev => {
      const serviceIndex = prev.findIndex(p => p.service === serviceName);
      if (serviceIndex >= 0) {
        const currentQuantity = prev[serviceIndex].parameters[param.name]?.quantity || 0;
        if (currentQuantity < param.quantity_maximum) {
          const updatedService = {
            ...prev[serviceIndex],
            parameters: {
              ...prev[serviceIndex].parameters,
              [param.name]: {
                quantity: currentQuantity + 1,
                id: param.id,
                price: param.price,
                duration: param.duration
              }
            }
          };
          return [
            ...prev.slice(0, serviceIndex),
            updatedService,
            ...prev.slice(serviceIndex + 1)
          ];
        }
      } else {
        const newService = {
          service: serviceName,
          parameters: {
            [param.name]: {
              quantity: 1,
              id: param.id,
              price: param.price,
              duration: param.duration
            }
          }
        };
        return [...prev, newService];
      }
      return prev;
    });
  };

  const handleDecrement = (serviceName, param) => {
    setPricingParameters(prev => {
      const serviceIndex = prev.findIndex(p => p.service === serviceName);
      if (serviceIndex >= 0) {
        const currentQuantity = prev[serviceIndex].parameters[param.name]?.quantity || 0;
        if (currentQuantity > param.quantity_minimum) {
          const updatedService = {
            ...prev[serviceIndex],
            parameters: {
              ...prev[serviceIndex].parameters,
              [param.name]: {
                quantity: currentQuantity - 1,
                id: param.id,
                price: param.price,
                duration: param.duration
              }
            }
          };
          return [
            ...prev.slice(0, serviceIndex),
            updatedService,
            ...prev.slice(serviceIndex + 1)
          ];
        }
      }
      return prev;
    });
  };

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
          {services.map(service => (
            <div key={service.id} className="pb-15">
              <div className="row">
                <div className="col">
                  <img
                    className={styles.homeLayoutImg}
                    src={serviceImageMap[service.name] || '/img/booking/default.png'}
                    alt={service.name}
                  />
                  <span className={styles.spaceLeft}><b>{service.name}</b></span>
                </div>
                <div className="col">
                  <ToggleSwitch
                    initialValue={!!selectedServices[service.name]}
                    onToggle={() => handleToggleService(service.name, service.id)}
                  />
                </div>
              </div>
              {selectedServices[service.name] && (
                <div className={styles.pricingParameters}>
                  {service.pricing_parameters.map(param => (
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
                          count={pricingParameters.find(p => p.service === service.name)?.parameters[param.name]?.quantity || 0}
                          onIncrement={() => handleIncrement(service.name, param)}
                          onDecrement={() => handleDecrement(service.name, param)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className={styles.billForm}>
          <h3>Summary</h3>
          {pricingParameters.map(service => (
            <div key={service.service}>
              <p>{service.service}</p>
              {Object.entries(service.parameters).map(([param, value]) => (
                <p key={param}>{param}: {value.quantity} x £{value.price.toFixed(2)} = £{(value.quantity * value.price).toFixed(2)} ({value.duration} minutes each)</p>
              ))}
              <div className={styles.divider}></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
