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
        // Add logic to calculate total cost based on formData
        let total = 0;
        // Example calculations based on assumed structure
        if (bedrooms) {
            total += bedrooms * 39; // Assume £39 per bedroom
        }
        if (pricingParameters) {
            Object.keys(pricingParameters).forEach(param => {
                total += pricingParameters[param] * 13; // Assume £13 per unit
            });
        }
        if (step2) {
            Object.keys(step2).forEach(extra => {
                if (step2[extra]) total += 52; // Assume £52 per extra
            });
        }
        if (step4 === 'yes') total += 6; // Cleaning supplies cost
        // Add other costs as necessary
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
                    <h3>Order details</h3>
                    {bedrooms !== undefined && (
                        <p>Bedrooms: {bedrooms} x £39.00 = £{bedrooms * 39}</p>
                    )}
                    {pricingParameters && Object.keys(pricingParameters).map(param => (
                        <p key={param}>{param}: {pricingParameters[param]} x £13.00 = £{pricingParameters[param] * 13}</p>
                    ))}
                    {step2 && Object.entries(step2).map(([key, value]) => (
                        value ? <p key={key}>{key.replace('_', ' ')}: £52.00</p> : null
                    ))}
                    {step4 === 'yes' && <p>Cleaning Supplies: £6.00</p>}
                    <p><strong>Sub Total:</strong> £{total}</p>
                    <p><strong>VAT (20%):</strong> £{(total * 0.2).toFixed(2)}</p>
                    <p><strong>Total:</strong> £{(total * 1.2).toFixed(2)}</p>
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
