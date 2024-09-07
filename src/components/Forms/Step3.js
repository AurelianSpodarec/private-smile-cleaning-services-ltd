import React, { useState, useEffect } from 'react';
import HoursSelection from './HoursSelection';
import * as styles from './HoursSelection.module.css';
import { getSummary, toHours } from './utils';
import { estimateCost } from '../../utils/launch27-client'; // Import the estimateCost function

const hours = [3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8];

export default function Step3({ formData, onStepDataChange }) {
    const [selectedHour, setSelectedHour] = useState(formData?.step3 || null);
    const [disabledOptions, setDisabledOptions] = useState([]);
    const [recommendedHour, setRecommendedHour] = useState(null);
    const [selectedService, setSelectedService] = useState(null);
    const [estimateTotal, setEstimateTotal] = useState(0); // State to hold the estimated total cost

    useEffect(() => {
        // Retrieve the selected service from localStorage
        const storedService = JSON.parse(localStorage.getItem('selectedService'));
        if (storedService) {
            setSelectedService(storedService);
        }
    }, []);

    useEffect(() => {
        if (selectedService) {
            // Calculate total duration from step1 and step2 selections
            const { bedrooms, pricingParameters, counterStates } = formData;
            let totalDuration = 0;

            // Calculate duration for bedrooms
            if (bedrooms) {
                const bedroomParam = selectedService.pricing_parameters.find(p => p.name === 'Bedrooms');
                totalDuration += bedrooms * (bedroomParam?.duration || 30); // Default 30 minutes per bedroom
            }

            // Calculate duration for other pricing parameters
            if (pricingParameters) {
                Object.entries(pricingParameters).forEach(([paramName, paramData]) => {
                    const param = selectedService.pricing_parameters.find(p => p.name === paramName);
                    if (param) {
                        totalDuration += paramData.quantity * (param.duration || 0);
                    }
                });
            }

            // Calculate duration for extras
            if (counterStates) {
                counterStates.forEach(service => {
                    Object.entries(service.parameters).forEach(([extraName, paramData]) => {
                        const extra = selectedService.extras?.find(e => e.name === extraName);
                        if (extra) {
                            totalDuration += paramData.quantity * (extra.duration || 0);
                        }
                    });
                });
            }

            const closestHour = Math.ceil(totalDuration / 60);
            setRecommendedHour(closestHour);

            const disabled = hours.filter(hour => hour < closestHour);
            setDisabledOptions(disabled);
        }
    }, [formData, selectedService]);

    useEffect(() => {
        if (selectedHour !== null) {
            onStepDataChange({ step3: selectedHour });
        }
    }, [selectedHour, onStepDataChange]);

    // Trigger cost estimation whenever pricing parameters, counterStates, or selectedHour change
    useEffect(() => {
        const selectedService = JSON.parse(localStorage.getItem('selectedService'));

        if (selectedService) {
            const date = new Date(); // Assume today
            const formattedDate = date.toLocaleDateString('en-GB', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
            }).split('/').reverse().join('-') + "T08:00:00";

            // Prepare the payload for cost estimation
            const costPayload = {
                service_date: formattedDate,
                frequency_id: 1, // Adjust as needed
                services: [{
                    id: selectedService.id,
                    pricing_parameters: Object.entries(formData.pricingParameters).map(([name, param]) => ({
                        id: param.id,
                        quantity: param.quantity,
                    })),
                    extras: formData.counterStates.flatMap((service) =>
                        Object.entries(service.parameters)
                            .filter(([_, value]) => value.quantity > 0)
                            .map(([_, value]) => ({
                                id: value.id,
                                quantity: value.quantity
                            }))
                    )
                }]
            };

            estimateCost(costPayload)
                .then((data) => {
                    setEstimateTotal(data.data.total);
                })
                .catch((error) => console.error('Error estimating cost:', error));
        }
    }, [formData.pricingParameters, formData.counterStates, selectedHour]); // Trigger whenever these dependencies change

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
                </div>
                <div className={styles.billFormStep3}>
                    <h3>Order Summary</h3>
                    <b>Schedule</b>
                    <table className="table table-hover">
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
                    <table className="table table-hover">
                        <tbody>
                            {getSummary(formData.pricingParameters)}

                            {/* Include extras in the Order Details */}
                            {formData?.counterStates.map(service => (
                                <React.Fragment key={service.service}>
                                    {Object.entries(service.parameters).map(([param, value]) => (
                                        value.quantity > 0 && (
                                            <tr key={param}>
                                                <td>{value.quantity} {param} <br /> <p style={{ fontSize: "small" }}>({value.duration} minutes each)</p></td>
                                                <td>£{(value.quantity * value.price).toFixed(2)}</td>
                                            </tr>
                                        )
                                    ))}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                    <b>Sub Total: £{estimateTotal.toFixed(2)}</b>
                </div>
            </div>
        </>
    );
}
