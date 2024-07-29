import React, { useState, useEffect } from 'react';
import ToggleSwitch from './ToggleSwitch';
import CounterInput from './CounterInput';
import * as styles from './BookingForm.module.css';
import { serviceImageMap } from './serviceImageMap';

export default function Step1({ formData, onStepDataChange }) {
  const [services, setServices] = useState([]);
  const [selectedServices, setSelectedServices] = useState(formData?.services || {});
  const [pricingParameters, setPricingParameters] = useState(formData?.pricingParameters || {});

  useEffect(() => {
    fetch('https://smile.launch27.com/latest/booking/services')
      .then(response => response.json())
      .then(data => {
        setServices(data);
      })
      .catch(error => console.error('Error fetching services:', error));
  }, []);

  useEffect(() => {
    // Notify parent component of the step data
    onStepDataChange({
      services: selectedServices,
      pricingParameters: pricingParameters
    });
  }, [selectedServices, pricingParameters, onStepDataChange]);

  const handleToggleService = (serviceName) => {
    setSelectedServices(prev => ({
      ...prev,
      [serviceName]: !prev[serviceName]
    }));
  };

  const handleIncrement = (serviceName, param) => {
    setPricingParameters(prev => ({
      ...prev,
      [serviceName]: {
        ...prev[serviceName],
        [param.name]: (prev[serviceName]?.[param.name] || 0) + 1
      }
    }));
  };

  const handleDecrement = (serviceName, param) => {
    setPricingParameters(prev => ({
      ...prev,
      [serviceName]: {
        ...prev[serviceName],
        [param.name]: prev[serviceName]?.[param.name] > 0 ? prev[serviceName][param.name] - 1 : 0
      }
    }));
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
                    onToggle={() => handleToggleService(service.name)}
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
                          count={pricingParameters[service.name]?.[param.name] || 0}
                          onIncrement={() => {
                            if ((pricingParameters[service.name]?.[param.name] || 0) < param.quantity_maximum) {
                              handleIncrement(service.name, param);
                            }
                          }}
                          onDecrement={() => {
                            if ((pricingParameters[service.name]?.[param.name] || 0) > param.quantity_minimum) {
                              handleDecrement(service.name, param);
                            }
                          }}
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
          {Object.keys(selectedServices).map(service => (
            selectedServices[service] && (
              <div key={service}>
                <p>{service}</p>
                {pricingParameters[service] && Object.keys(pricingParameters[service]).map(param => (
                  <p key={param}>{param}: {pricingParameters[service][param]}</p>
                ))}
                <div className={styles.divider}></div>
              </div>
            )
          ))}
        </div>
      </div>
    </>
  );
}
