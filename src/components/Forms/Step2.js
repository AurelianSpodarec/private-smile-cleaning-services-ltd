import React, { useState, useEffect } from 'react';
import ToggleSwitch from './ToggleSwitch';
import * as styles from './BookingForm.module.css';
import { serviceImageMap } from './serviceImageMap';

export default function Step2({ formData, onStepDataChange }) {
    const initialState = formData?.step2 || {};
    const [toggleStates, setToggleStates] = useState(initialState);
    const [extras, setExtras] = useState([]);

    useEffect(() => {
        fetch('https://smile.launch27.com/latest/booking/services')
            .then(response => response.json())
            .then(data => {
                const firstServiceWithExtras = data.find(service => service.extras.length > 0);
                if (firstServiceWithExtras) {
                    setExtras(firstServiceWithExtras.extras);
                }
            })
            .catch(error => console.error('Error fetching extras:', error));
    }, []);

    useEffect(() => {
        // Sync component state with formData when the component mounts or formData changes
        if (formData?.step2) {
            setToggleStates(formData.step2);
        }
    }, [formData]);

    useEffect(() => {
        // Update the parent component with the current state of the toggles
        onStepDataChange({ step2: toggleStates });
    }, [toggleStates, onStepDataChange]);

    const handleToggle = (key, value) => {
        setToggleStates((prevStates) => ({
            ...prevStates,
            [key]: value,
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
                                <ToggleSwitch
                                    initialValue={toggleStates[extra.name] || false}
                                    onToggle={(value) => handleToggle(extra.name, value)}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.billForm}>
                    <h3>Summary</h3>
                    {/* Display summary from step 1 */}
                    {formData?.bedrooms !== undefined && (
                        <p>Bedrooms: {formData.bedrooms}</p>
                    )}
                    {formData?.pricingParameters && Object.keys(formData.pricingParameters).map(param => (
                        <p key={param}>{param}: {formData.pricingParameters[param]}</p>
                    ))}
                    <h3>Extras</h3>
                    {/* Display summary from step 2 */}
                    {Object.entries(toggleStates).map(([key, value]) => (
                        value ? <p key={key}>{key.replace('_', ' ')}</p> : null
                    ))}
                </div>
            </div>
        </>
    );
}
