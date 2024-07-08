import React, { useState, useEffect } from 'react';
import * as styles from './BookingForm.module.css';

export default function Step4({ formData, onStepDataChange }) {
    const [selectedOption, setSelectedOption] = useState(formData?.step4 || '');

    const handleOptionChange = (value) => {
        setSelectedOption(value);
        // Store selected option in localStorage
        const updatedFormData = { ...formData, step4: value };
        localStorage.setItem('bookingFormData', JSON.stringify(updatedFormData));
    };

    useEffect(() => {
        onStepDataChange({ step4: selectedOption });
    }, [selectedOption, onStepDataChange]);

    return (
        <>
            <div className="row">
                <div className="col-9">
                    <span>Book Service / <b>Step 4 of 6</b></span>
                    <img src="/img/booking/cleaning-supplies.png" alt="cleaning supplies" className={styles.heroImage} />
                    <h2>Do you need cleaning supplies?</h2>
                    <p>We use eco-friendly, sustainable products that are gentle on the environment.</p>

                    <div className={styles.checkboxContainer}>
                        <div
                            className={`${styles.checkboxOption} ${selectedOption === 'yes' ? styles.selected : ''}`}
                            onClick={() => handleOptionChange('yes')}
                        >
                            <input
                                type="checkbox"
                                checked={selectedOption === 'yes'}
                                onChange={() => handleOptionChange('yes')}
                                className={styles.checkboxInput}
                            />
                            <label className={styles.checkboxLabel}>
                                <span className={styles.checkboxLabelTitle}>Yes, Please</span>
                                <span className={styles.checkboxLabelDescription}>Our agent will bring the cleaning products for additional £6.00</span>
                            </label>
                        </div>
                        <div
                            className={`${styles.checkboxOption} ${selectedOption === 'no' ? styles.selected : ''}`}
                            onClick={() => handleOptionChange('no')}
                        >
                            <input
                                type="checkbox"
                                checked={selectedOption === 'no'}
                                onChange={() => handleOptionChange('no')}
                                className={styles.checkboxInput}
                            />
                            <label className={styles.checkboxLabel}>
                                <span className={styles.checkboxLabelTitle}>No, Thanks</span>
                                <span className={styles.checkboxLabelDescription}>We will use cleaning products available at your place</span>
                            </label>
                        </div>
                    </div>
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
                    {formData?.step3 && <p>Hours: {formData.step3}</p>}
                    {selectedOption && <p>Cleaning Supplies: {selectedOption === 'yes' ? 'Yes, Please' : 'No, Thanks'}</p>}
                </div>
            </div>
        </>
    );
}
