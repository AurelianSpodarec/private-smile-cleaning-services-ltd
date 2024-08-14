import React, { useEffect, useState } from 'react';
import * as styles from './ConfirmAndPay.module.css';

const SETTINGS_URL = 'https://smile.launch27.com/latest/settings';

const ConfirmAndPay = () => {
    const [settings, setSettings] = useState(null);
    const [formData, setFormData] = useState(null);
    const [address, setSelectedAddress] = useState(null);
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cardCVC, setCardCVC] = useState('');
    const [cardExpiration, setCardExpiration] = useState('');

    useEffect(() => {
        fetch(SETTINGS_URL)
            .then(response => response.json())
            .then(data => {
                setSettings(data);
            })
            .catch(error => console.error('Error fetching settings:', error));
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const data = localStorage.getItem('bookingFormData');
            if (data) {
                setFormData(JSON.parse(data));
            }
            const selectedAddress = localStorage.getItem("selectedAddress");
            if (selectedAddress) {
                setSelectedAddress(JSON.parse(selectedAddress));
            }
        }
    }, []);

    if (!formData || !address) {
        return <div>Loading...</div>;
    }

    const {
        bedrooms,
        pricingParameters,
        step2,
        step3,
        step4,
        step5,
        step6,
        customFields
    } = formData;

    const calculateTotal = () => {
        let total = 0;
        if (bedrooms) {
            total += bedrooms * 39;
        }
        if (pricingParameters) {
            pricingParameters.forEach(service => {
                Object.values(service.parameters).forEach(param => {
                    total += param.quantity * param.price;
                });
            });
        }
        if (step2) {
            formData.counterStates.forEach(service => {
                Object.values(service.parameters).forEach(param => {
                    total += param.quantity * param.price;
                });
            });
        }
        if (step4 === 'yes') total += 6;
        return total;
    };

    const total = calculateTotal();

    const formatServiceDate = (dateString, timeString) => {
        const date = new Date(dateString);
    
        // Extract just the start time (HH:MM) from the timeString "08:00 - 12:00"
        const startTime = timeString.split(' - ')[0]; 
    
        const [hours, minutes] = startTime.split(':').map(Number); // Ensure we convert hours and minutes to numbers
        if (isNaN(hours) || isNaN(minutes)) {
            console.error("Invalid time string provided:", timeString);
            return null; // Return null if there's an error in the time string
        }
        date.setUTCHours(hours);
        date.setUTCMinutes(minutes);
        date.setUTCSeconds(0); // Set seconds to 0 to match the required format
    
        const year = date.getUTCFullYear();
        const month = String(date.getUTCMonth() + 1).padStart(2, '0');
        const day = String(date.getUTCDate()).padStart(2, '0');
        const hour = String(date.getUTCHours()).padStart(2, '0');
        const minute = String(date.getUTCMinutes()).padStart(2, '0');
        const second = String(date.getUTCSeconds()).padStart(2, '0');
        return `${year}-${month}-${day}T${hour}:${minute}:${second}`;
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        const customFieldsData = [
            step6.cleanerAccess,
            step6.cleanerAccessDetails
        ].filter(field => field && (field.values && field.values[0] && (field.values[0].id || field.values[0].value)));
        

        const serviceDate = formatServiceDate(step5.selectedDate, step5.selectedTime);

        if (!serviceDate) {
            console.error("Failed to format service date. Aborting submission.");
            return;
        }

        const bookingData = {
            user: {
                email: email,
                first_name: firstName,
                last_name: lastName,
            },
            address: step6.postcode,
            city: address.city,
            state: address.county,
            zip: address.postcode,
            phone: formData.phone,
            sms_notifications: formData.smsNotifications,
            frequency_id: step5.frequencyId,
            service_date: serviceDate,
            arrival_window: step5.selectedSlot.arrivalWindow,
            services: pricingParameters.map(service => ({
                id: service.id,
                pricing_parameters: Object.values(service.parameters).map(param => ({
                    id: param.id,
                    quantity: param.quantity
                }))
            })),
            custom_fields: customFieldsData,
            payment_method: 'stripe',
            card_cvc: cardCVC,
            card_expires: cardExpiration,
            card_number: cardNumber,
            stripe_token: settings.stripe_public_key
        };

        try {
            const response = await fetch('https://smile.launch27.com/latest/booking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bookingData)
            });
            const result = await response.json();
            console.log('Booking successful', result);
            alert("Booking successful")
            localStorage.clear()
            window.location.reload();
        } catch (error) {
            console.error('Error booking service:', error);
            alert("Error booking service")
        }
    };

    return (
        <div className="container pt-120 pb-120">
            <div className={styles.confirmAndPay}>
                <h2>Confirm and Pay</h2>
                <div className={styles.section}>
                    <h3>Address</h3>
                    <p><strong>Postcode:</strong> {step6?.postcode}</p>
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
                    {pricingParameters && pricingParameters.map(service => (
                        <div key={service.service}>
                            <p><b>{service.service}</b>:</p>
                            {Object.entries(service.parameters).map(([param, value]) => (
                                <p key={param}>{param}: {value.quantity} x £{value.price.toFixed(2)} = £{(value.quantity * value.price).toFixed(2)} ({value.duration} minutes each)</p>
                            ))}
                        </div>
                    ))}
                    {step2 && formData.counterStates.map(service => (
                        <div key={service.service}>
                            <p><b>{service.service}</b>:</p>
                            {Object.entries(service.parameters).map(([param, value]) => (
                                <div key={param}>
                                    <p>{param}:</p>
                                    <ul>
                                        <li>Quantity: {value.quantity}</li>
                                        <li>Price: £{value.price.toFixed(2)}</li>
                                        <li>Duration: {value.duration} minutes</li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    ))}
                    {step4 === 'yes' && <p>Cleaning Supplies: £6.00</p>}
                    <p><strong>Sub Total:</strong> £{total}</p>
                    <p><strong>VAT (20%):</strong> £{(total * 0.2).toFixed(2)}</p>
                    <p><strong>Total:</strong> £{(total * 1.2).toFixed(2)}</p>
                </div>
                <div className={styles.section}>
                    <h3>User Information</h3>
                    <div className={styles.inputContainer}>
                        <label className={styles.inputLabel} htmlFor="email">Email</label>
                        <input id="email" type="email" className={styles.textInput} placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className={styles.inputContainer}>
                        <label className={styles.inputLabel} htmlFor="firstName">First Name</label>
                        <input id="firstName" type="text" className={styles.textInput} placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                    </div>
                    <div className={styles.inputContainer}>
                        <label className={styles.inputLabel} htmlFor="lastName">Last Name</label>
                        <input id="lastName" type="text" className={styles.textInput} placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                    </div>
                </div>
                <div className={styles.section}>
                    <h3>Payment Method</h3>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.inputContainer}>
                            <label className={styles.inputLabel} htmlFor="cardName">Card Holder Name</label>
                            <input id="cardName" type="text" className={styles.textInput} placeholder="Card Holder Name" required />
                        </div>
                        <div className={styles.inputContainer}>
                            <label className={styles.inputLabel} htmlFor="cardNumber">Card Number</label>
                            <input id="cardNumber" type="text" className={styles.textInput} value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} placeholder="1234 5678 9012 3456" required />
                        </div>
                        <div className={styles.inputContainer}>
                            <label className={styles.inputLabel} htmlFor="expiry">Expiry</label>
                            <input id="expiry" type="text" className={styles.textInput} value={cardExpiration} onChange={(e) => setCardExpiration(e.target.value)} placeholder="MM/YY" required />
                        </div>
                        <div className={styles.inputContainer}>
                            <label className={styles.inputLabel} htmlFor="cvv">CVV</label>
                            <input id="cvv" type="text" className={styles.textInput} value={cardCVC} onChange={(e) => setCardCVC(e.target.value)} placeholder="123" required />
                        </div>
                        <div className={styles.inputContainer}>
                            <label className={styles.inputLabel} htmlFor="billingAddress">Billing Address</label>
                            <input id="billingAddress" type="text" className={styles.textInput} placeholder="Billing Address" required />
                        </div>
                        <div className={styles.inputContainer}>
                            <label className={styles.inputLabel} htmlFor="postcode">Postcode</label>
                            <input id="postcode" type="text" className={styles.textInput} placeholder="Postcode" required />
                        </div>
                        <button type="submit" className="btn btn-primary">Confirm and Pay</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ConfirmAndPay;
