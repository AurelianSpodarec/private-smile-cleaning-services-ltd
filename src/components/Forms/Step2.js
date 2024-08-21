import React, { useState, useEffect } from 'react';
import ToggleSwitch from './ToggleSwitch';
import CounterInput from './CounterInput';
import * as styles from './BookingForm.module.css';
import { serviceImageMap } from './serviceImageMap';
import { getSummary } from './utils';

export default function Step2({ formData, onStepDataChange }) {
    const initialState = formData?.step2 || {};
    const [toggleStates, setToggleStates] = useState(initialState);
    const [counterStates, setCounterStates] = useState(formData?.counterStates || []);
    const [extras, setExtras] = useState([]);

    useEffect(() => {
        // Load selected service from localStorage
        const selectedService = JSON.parse(localStorage.getItem('selectedService'));
        if (selectedService && selectedService.extras) {
            // Filter out unwanted extras
            const filteredExtras = selectedService.extras.filter(
                (extra) => extra.name !== 'Cleaning Products' && extra.name !== 'Premium Booking Slot'
            );
            setExtras(filteredExtras);
        }
    }, []);

    useEffect(() => {
        // Sync component state with formData when the component mounts or formData changes
        if (formData?.step2) {
            setToggleStates(formData.step2);
        }
        if (formData?.counterStates) {
            setCounterStates(formData.counterStates);
        }
    }, [formData]);

    useEffect(() => {
        // Update the parent component with the current state of the toggles and counters
        onStepDataChange({ step2: toggleStates, counterStates: counterStates });
    }, [toggleStates, counterStates, onStepDataChange]);

    const handleToggle = (key, value) => {
        setToggleStates((prevStates) => ({
            ...prevStates,
            [key]: value,
        }));
    };

    const handleCounterIncrement = (extra) => {
        setCounterStates(prev => {
            const existingIndex = prev.findIndex(p => p.service === extra.name);
            if (existingIndex >= 0) {
                const updatedExtra = {
                    ...prev[existingIndex],
                    parameters: {
                        ...prev[existingIndex].parameters,
                        [extra.name]: {
                            quantity: (prev[existingIndex].parameters[extra.name]?.quantity || 0) + 1,
                            id: extra.id,
                            price: extra.price,
                            duration: extra.duration
                        }
                    }
                };
                return [
                    ...prev.slice(0, existingIndex),
                    updatedExtra,
                    ...prev.slice(existingIndex + 1)
                ];
            } else {
                const newExtra = {
                    service: extra.name,
                    parameters: {
                        [extra.name]: {
                            quantity: 1,
                            id: extra.id,
                            price: extra.price,
                            duration: extra.duration
                        }
                    }
                };
                return [...prev, newExtra];
            }
        });
    };

    const handleCounterDecrement = (extra) => {
        setCounterStates(prev => {
            const existingIndex = prev.findIndex(p => p.service === extra.name);
            if (existingIndex >= 0) {
                const updatedExtra = {
                    ...prev[existingIndex],
                    parameters: {
                        ...prev[existingIndex].parameters,
                        [extra.name]: {
                            quantity: Math.max((prev[existingIndex].parameters[extra.name]?.quantity || 0) - 1, 0),
                            id: extra.id,
                            price: extra.price,
                            duration: extra.duration
                        }
                    }
                };
                return [
                    ...prev.slice(0, existingIndex),
                    updatedExtra,
                    ...prev.slice(existingIndex + 1)
                ];
            }
            return prev;
        });
    };

    return (
        <>
            <div className="row">
                <div className="col">
                    <span>Book Service / <b>Step 2 of 6</b></span>
                    <h2>Do you need some additional services?</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-9">
                    {extras.map(extra => (
                        <div key={extra.id} className="pb-15">
                            <div className="row">
                                <div className="col">
                                    <img
                                        className={styles.homeLayoutImg}
                                        src={serviceImageMap[extra.name] || '/img/booking/default.png'}
                                        alt={`do you need ${extra.name.toLowerCase()}?`}
                                    />
                                    <span className={styles.spaceLeft}><b>{extra.name}</b></span>
                                </div>
                                <div className="col">
                                    {extra.quantity_based ? (
                                        <CounterInput
                                            count={counterStates.find(p => p.service === extra.name)?.parameters[extra.name]?.quantity || 0}
                                            onIncrement={() => handleCounterIncrement(extra)}
                                            onDecrement={() => handleCounterDecrement(extra)}
                                        />
                                    ) : (
                                        <ToggleSwitch
                                            initialValue={toggleStates[extra.name] || false}
                                            onToggle={(value) => handleToggle(extra.name, value)}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
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
                        {getSummary(formData.pricingParameters)}

                        {/* Add extras to the Order Details */}
                        {counterStates.map(service => (
                            <React.Fragment key={service.service}>
                                {Object.entries(service.parameters).map(([param, value]) => (
                                    value.quantity > 0 && (
                                        <tr key={param}>
                                            <td>{value.quantity} {param} <br/> <p style={{fontSize: "small"}}>({value.duration} minutes each)</p></td>
                                            <td>£{(value.quantity * value.price).toFixed(2)}</td>
                                        </tr>
                                    )
                                ))}
                            </React.Fragment>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
