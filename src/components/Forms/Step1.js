import React, { useState, useEffect } from 'react';
import CounterInput from './CounterInput';
import * as styles from './BookingForm.module.css';
import { serviceImageMap } from './serviceImageMap';

export default function Step1({ formData, onStepDataChange }) {
  const [bedroomCount, setBedroomCount] = useState(formData?.bedrooms || 0);
  const [pricingParameters, setPricingParameters] = useState(formData?.pricingParameters || {});
  const [parametersList, setParametersList] = useState([]);

  useEffect(() => {
    fetch('https://smile.launch27.com/latest/booking/services')
      .then(response => response.json())
      .then(data => {
        const firstBedroomService = data.find(service => service.name.includes('Bedroom Home'));
        if (firstBedroomService) {
          setParametersList(firstBedroomService.pricing_parameters);
        }
      })
      .catch(error => console.error('Error fetching services:', error));
  }, []);

  useEffect(() => {
    // Notify parent component of the step data
    onStepDataChange({
      bedrooms: bedroomCount,
      pricingParameters: pricingParameters
    });
  }, [bedroomCount, pricingParameters, onStepDataChange]);

  const handleIncrement = (name) => {
    setPricingParameters(prev => ({ ...prev, [name]: (prev[name] || 0) + 1 }));
  };

  const handleDecrement = (name) => {
    setPricingParameters(prev => ({
      ...prev,
      [name]: prev[name] > 0 ? prev[name] - 1 : 0
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
          <div className="row pb-15">
            <div className="col">
              <img
                className={styles.homeLayoutImg}
                src={serviceImageMap["Bedrooms"] || '/img/booking/default.png'}
                alt="Bedrooms"
              />
              <span className={styles.spaceLeft}><b>Bedrooms</b></span>
            </div>
            <div className="col">
              <CounterInput
                count={bedroomCount}
                onIncrement={() => setBedroomCount(bedroomCount < 6 ? bedroomCount + 1 : 6)}
                onDecrement={() => setBedroomCount(bedroomCount > 0 ? bedroomCount - 1 : 0)}
              />
            </div>
          </div>
          {parametersList.map(param => (
            <div key={param.id} className="row pb-15">
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
                  count={pricingParameters[param.name] || 0}
                  onIncrement={() => handleIncrement(param.name)}
                  onDecrement={() => handleDecrement(param.name)}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="col-3">
          <h3>Summary</h3>
          <p>Bedrooms: {bedroomCount}</p>
          {Object.keys(pricingParameters).map(param => (
            <p key={param}>{param}: {pricingParameters[param]}</p>
          ))}
        </div>
      </div>
    </>
  );
}
