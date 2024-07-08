import React, { useState, useEffect } from 'react';
import HoursSelection from './HoursSelection';

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

            if (bedrooms) {
                const bedroomService = servicesData.find(service => service.name.includes('Bedroom Home'));
                totalDuration += bedrooms * (bedroomService?.duration || 90); // Default 90 minutes if not found
            }

            if (pricingParameters) {
                Object.keys(pricingParameters).forEach(param => {
                    const count = pricingParameters[param];
                    const paramService = servicesData.find(service => service.pricing_parameters.some(p => p.name === param));
                    const duration = paramService?.pricing_parameters.find(p => p.name === param)?.duration || 0;
                    totalDuration += count * duration;
                });
            }

            if (step2) {
                Object.keys(step2).forEach(extra => {
                    if (step2[extra]) {
                        const extraService = servicesData.find(service => service.extras.some(e => e.name === extra));
                        const duration = extraService?.extras.find(e => e.name === extra)?.duration || 0;
                        totalDuration += duration;
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

    return(
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
                <div className="col-3">
                    <h3>Summary</h3>
                    {formData?.bedrooms !== undefined && (
                        <p>Bedrooms: {formData.bedrooms}</p>
                    )}
                    {formData?.pricingParameters && Object.keys(formData.pricingParameters).map(param => (
                        <p key={param}>{param}: {formData.pricingParameters[param]}</p>
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
