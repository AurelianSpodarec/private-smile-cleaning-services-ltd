import React, { useState, useEffect } from 'react';
import * as styles from './BookingForm.module.css';
import { getSummary } from './utils';

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

    const cleaningSuppliesExtra = JSON.parse(localStorage.getItem('selectedService'))?.extras.find(
        (extra) => extra.name === 'Cleaning Products'
    );

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
                                <span className={styles.checkboxLabelDescription}>Our agent will bring the cleaning products for additional £{cleaningSuppliesExtra?.price.toFixed(2)}</span>
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
                <div className={styles.billForm}>
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

                            {/* Include the cleaning supplies option in the Order Details */}
                            {selectedOption === 'yes' && cleaningSuppliesExtra && (
                                <tr>
                                    <td>Cleaning Supplies <br /> <p style={{ fontSize: "small" }}>Eco-friendly, sustainable products</p></td>
                                    <td>£{cleaningSuppliesExtra.price.toFixed(2)}</td>
                                </tr>
                            )}

                            {/* Include extras from Step2 */}
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
                </div>
            </div>
        </>
    );
}
