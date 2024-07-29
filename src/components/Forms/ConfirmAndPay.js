import React, { useEffect, useState } from 'react';
import * as styles from './ConfirmAndPay.module.css';

const ConfirmAndPay = () => {
    const [formData, setFormData] = useState(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const data = localStorage.getItem('bookingFormData');
            if (data) {
                setFormData(JSON.parse(data));
            }
        }
    }, []);

    if (!formData) {
        return <div>Loading...</div>;
    }

    const {
        bedrooms,
        pricingParameters,
        step2,
        step3,
        step4,
        step5,
        step6
    } = formData;

    const calculateTotal = () => {
        let total = 0;

        if (bedrooms) {
            total += bedrooms * 39; // Assume £39 per bedroom
        }

        if (pricingParameters && typeof pricingParameters === 'object') {
            Object.keys(pricingParameters).forEach(param => {
                // Assuming £13 per unit for pricing parameters
                total += pricingParameters[param] * 13;
            });
        }

        if (step2 && typeof step2 === 'object') {
            Object.keys(step2).forEach(extra => {
                if (typeof step2[extra] === 'number') {
                    // If the extra is quantity-based, multiply by £25
                    total += step2[extra] * 25;
                } else if (step2[extra]) {
                    // If the extra is not quantity-based, add £52
                    total += 52;
                }
            });
        }

        if (step4 === 'yes') {
            total += 6; // Cleaning supplies cost
        }

        return total;
    };

    const total = calculateTotal();

    return (
        <div className="container pt-120 pb-120">
            <div className={styles.confirmAndPay}>
                <h2>Confirm and Pay</h2>
                <div className={styles.section}>
                    <h3>Address</h3>
                    <p><strong>Postcode:</strong> {step6?.postcode}</p>
                    <p><strong>Cleaner Access:</strong> {step6?.cleanerAccess}</p>
                    <p><strong>Note:</strong> {step6?.cleanerAccessDetails}</p>
                    <p><strong>Cleaner Parking Spot:</strong> {step6?.parkingSpot}</p>
                </div>
                <div className={styles.section}>
                    <h3>Schedule</h3>
                    <p><strong>Frequency:</strong> {step5?.frequency}</p>
                    {step5?.startDate && <p><strong>Start Date:</strong> {new Date(step5.startDate).toLocaleDateString()}</p>}
                    {step5?.selectedDate && <p><strong>Date:</strong> {new Date(step5.selectedDate).toLocaleDateString()}</p>}
                    {step5?.selectedTime && <p><strong>Preferred Time:</strong> {step5.selectedTime}</p>}
                </div>
                
                <div className={styles.section}>
                    <h3>Payment Method</h3>
                    <form>
                        <div className={styles.inputContainer}>
                            <label className={styles.inputLabel} htmlFor="cardName">Card Holder Name</label>
                            <input id="cardName" type="text" className={styles.textInput} placeholder="Card Holder Name" />
                        </div>
                        <div className={styles.inputContainer}>
                            <label className={styles.inputLabel} htmlFor="cardNumber">Card Number</label>
                            <input id="cardNumber" type="text" className={styles.textInput} placeholder="1234 5678 9012 3456" />
                        </div>
                        <div className={styles.inputContainer}>
                            <label className={styles.inputLabel} htmlFor="expiry">Expiry</label>
                            <input id="expiry" type="text" className={styles.textInput} placeholder="MM/YY" />
                        </div>
                        <div className={styles.inputContainer}>
                            <label className={styles.inputLabel} htmlFor="cvv">CVV</label>
                            <input id="cvv" type="text" className={styles.textInput} placeholder="123" />
                        </div>
                        <div className={styles.inputContainer}>
                            <label className={styles.inputLabel} htmlFor="billingAddress">Billing Address</label>
                            <input id="billingAddress" type="text" className={styles.textInput} placeholder="Billing Address" />
                        </div>
                        <div className={styles.inputContainer}>
                            <label className={styles.inputLabel} htmlFor="postcode">Postcode</label>
                            <input id="postcode" type="text" className={styles.textInput} placeholder="Postcode" />
                        </div>
                        <button type="submit" className="btn btn-primary">Confirm and Pay</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ConfirmAndPay;
