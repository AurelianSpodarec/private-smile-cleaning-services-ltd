import React, { useState, useEffect } from 'react';
import HoursSelection from './HoursSelection';
import * as styles from './HoursSelection.module.css';

const hours = [3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8];

export default function Step3({ formData, onStepDataChange }) {
    const [selectedHour, setSelectedHour] = useState(formData?.step3 || null);
    const [disabledOptions, setDisabledOptions] = useState([]);
    const [recommendedHour, setRecommendedHour] = useState(null);
    const [servicesData, setServicesData] = useState([]);

    useEffect(() => {
        // Fetch services data to get the durations
        fetch('https://smile.launch27.com/latest/booking/services')
            .then(response => response.json())
            .then(data => {
                setServicesData(data);
            })
            .catch(error => console.error('Error fetching services:', error));
    }, []);

    useEffect(() => {
        if (servicesData.length > 0) {
            // Calculate total duration from step1 and step2 selections
            const { bedrooms, pricingParameters, step2 } = formData;
            let totalDuration = 0;

            // Calculate duration for bedrooms
            if (bedrooms) {
                const bedroomService = servicesData.find(service => service.pricing_parameters?.some(p => p.name === 'Bedrooms'));
                const bedroomParam = bedroomService?.pricing_parameters?.find(p => p.name === 'Bedrooms');
                totalDuration += bedrooms * (bedroomParam?.duration || 30); // Default 30 minutes per bedroom
            }

            // Calculate duration for other pricing parameters
            if (pricingParameters) {
                Object.entries(pricingParameters).forEach(([paramName, count]) => {
                    servicesData.forEach(service => {
                        const param = service.pricing_parameters?.find(p => p.name === paramName);
                        if (param) {
                            totalDuration += count * (param.duration || 0);
                        }
                    });
                });
            }

            // Calculate duration for extras
            if (step2) {
                Object.entries(step2).forEach(([extraName, value]) => {
                    if (value) {
                        servicesData.forEach(service => {
                            const extra = service.extras?.find(e => e.name === extraName);
                            if (extra) {
                                totalDuration += extra.quantity_based ? value * (extra.duration || 0) : (extra.duration || 0);
                            }
                        });
                    }
                });
            }

            const closestHour = Math.ceil(totalDuration / 60);
            setRecommendedHour(closestHour);

            const disabled = hours.filter(hour => hour < closestHour);
            setDisabledOptions(disabled);
        }
    }, [formData, servicesData]);

    useEffect(() => {
        if (selectedHour !== null) {
            onStepDataChange({ step3: selectedHour });
        }
    }, [selectedHour, onStepDataChange]);

    const handleHourSelect = (hour) => {
        setSelectedHour(hour);
        // Store selected hour in localStorage
        const updatedFormData = { ...formData, step3: hour };
        localStorage.setItem('bookingFormData', JSON.stringify(updatedFormData));
    };

    return (
        <>
            <div className="row">
                <div className="col">
                    <span>Book Service / <b>Step 3 of 6</b></span>
                    <h2>Estimate number of hours needed for the cleaning</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-9">
                    <HoursSelection
                        onSelect={handleHourSelect}
                        disabledOptions={disabledOptions}
                        recommendedHour={recommendedHour}
                    />
                    <p>Selected hour: {selectedHour}</p>
                </div>
                <div className={styles.billFormStep3}>
                    <h3>Summary</h3>
                    {formData?.bedrooms !== undefined && (
                        <p>Bedrooms: {formData.bedrooms}</p>
                    )}
                    {formData?.pricingParameters && Object.entries(formData.pricingParameters).map(([param, value]) => (
                        <div key={param}>
                            <p><b>{param}</b>:</p>
                            {typeof value === 'object' ? (
                                Object.entries(value).map(([subParam, subValue]) => (
                                    <p key={subParam}>{subParam}: {subValue}</p>
                                ))
                            ) : (
                                <p>{param}: {value}</p>
                            )}
                        </div>
                    ))}
                    <h3>Extras</h3>
                    {formData?.step2 && Object.entries(formData.step2).map(([key, value]) => (
                        value ? <p key={key}>{key.replace('_', ' ')}</p> : null
                    ))}
                    <h3>Booked Time:</h3>
                    {selectedHour && <p>Hours: {selectedHour}</p>}
                </div>
            </div>
        </>
    );
}
