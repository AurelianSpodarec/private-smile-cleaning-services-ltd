import React, { useState, useEffect } from 'react';
import ToggleSwitch from './ToggleSwitch';
import CounterInput from './CounterInput';
import * as styles from './BookingForm.module.css';
import { serviceImageMap } from './serviceImageMap';

export default function Step2({ formData, onStepDataChange }) {
    const initialState = formData?.step2 || {};
    const [toggleStates, setToggleStates] = useState(initialState);
    const [counterStates, setCounterStates] = useState(formData?.counterStates || {});
    const [extrasByService, setExtrasByService] = useState([]);

    useEffect(() => {
        fetch('https://smile.launch27.com/latest/booking/services')
            .then(response => response.json())
            .then(data => {
                // Filter extras based on selected services from Step1
                const selectedServices = formData?.services || {};
                const filteredExtras = data
                    .filter(service => selectedServices[service.name])
                    .map(service => ({
                        serviceName: service.name,
                        extras: service.extras,
                    }));
                setExtrasByService(filteredExtras);
            })
            .catch(error => console.error('Error fetching extras:', error));
    }, [formData]);

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

    const handleCounterIncrement = (key) => {
        setCounterStates((prevStates) => ({
            ...prevStates,
            [key]: (prevStates[key] || 0) + 1,
        }));
    };

    const handleCounterDecrement = (key) => {
        setCounterStates((prevStates) => ({
            ...prevStates,
            [key]: prevStates[key] > 0 ? prevStates[key] - 1 : 0,
        }));
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
                    {extrasByService.map(({ serviceName, extras }) => (
                        <div key={serviceName} className="pb-15">
                            <h3 className={styles.serviceName}>{serviceName}</h3>
                            <div className={styles.divider}></div>
                            {extras.map(extra => (
                                <div key={extra.id} className="row pb-15">
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
                                                count={counterStates[extra.name] || 0}
                                                onIncrement={() => handleCounterIncrement(extra.name)}
                                                onDecrement={() => handleCounterDecrement(extra.name)}
                                            />
                                        ) : (
                                            <ToggleSwitch
                                                initialValue={toggleStates[extra.name] || false}
                                                onToggle={(value) => handleToggle(extra.name, value)}
                                            />
                                        )}
                                    </div>
                                </div>
                            ))}
                            <div className={styles.divider}></div>
                        </div>
                    ))}
                </div>
                <div className={styles.billForm}>
                    <h3>Summary</h3>
                    {/* Display summary from step 1 */}
                    {formData?.bedrooms !== undefined && (
                        <p>Bedrooms: {formData.bedrooms}</p>
                    )}
                    {formData?.pricingParameters && Object.keys(formData.pricingParameters).map(param => {
                        const paramValue = formData.pricingParameters[param];
                        if (typeof paramValue === 'object') {
                            return (
                                <div key={param}>
                                    <p><b>{param}</b>:</p>
                                    {Object.keys(paramValue).map(subParam => (
                                        <p key={subParam}>{subParam}: {paramValue[subParam]}</p>
                                    ))}
                                </div>
                            );
                        }
                        return <p key={param}>{param}: {paramValue}</p>;
                    })}
                    <h3>Extras</h3>
                    {/* Display summary from step 2 */}
                    {Object.entries(toggleStates).map(([key, value]) => (
                        value ? <p key={key}>{key.replace('_', ' ')}</p> : null
                    ))}
                    {Object.entries(counterStates).map(([key, value]) => (
                        value > 0 ? <p key={key}>{key.replace('_', ' ')}: {value}</p> : null
                    ))}
                </div>
            </div>
        </>
    );
}
