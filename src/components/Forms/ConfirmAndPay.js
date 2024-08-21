import React, { useEffect, useState } from 'react';
import { getSettings, sendBooking } from '../../utils/launch27-client';
import * as styles from './ConfirmAndPay.module.css';

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
        const fetchSettings = async () => {
            const settingsResponse = await getSettings();
            if (settingsResponse) {
                setSettings(settingsResponse.data);
            }
        };

        fetchSettings();
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
            Object.values(pricingParameters).forEach(param => {
                total += param.quantity * param.price;
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
    
        const startTime = timeString.split(' - ')[0]; 
        const [hours, minutes] = startTime.split(':').map(Number); 
        if (isNaN(hours) || isNaN(minutes)) {
            console.error("Invalid time string provided:", timeString);
            return null;
        }
        date.setUTCHours(hours);
        date.setUTCMinutes(minutes);
        date.setUTCSeconds(0);

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
    
        const selectedService = JSON.parse(localStorage.getItem('selectedService'));
    
        // Define the customFieldsData here
        const customFieldsData = [
            formData.step6.cleanerAccess,
            formData.step6.cleanerAccessDetails
        ].filter(field => field && (field.values && field.values[0] && (field.values[0].id || field.values[0].value)));
    
        // Format the service date using the formatServiceDate function
        const serviceDate = formatServiceDate(formData.step5.selectedDate, formData.step5.selectedTime);
    
        if (!serviceDate) {
            console.error("Failed to format service date. Aborting submission.");
            return;
        }
    
        // Extract pricing parameters and extras
        const pricingParameters = Object.values(formData.pricingParameters).map(param => ({
            id: param.id,
            quantity: param.quantity
        }));
    
        const extras = [
            // Extract extras from counterStates
            ...(formData.counterStates || []).flatMap(service =>
                Object.values(service.parameters)
                    .filter(param => param.quantity > 0) // Only include extras with a quantity > 0
                    .map(param => ({
                        id: param.id,
                        quantity: param.quantity
                    }))
            ),
            // Extract extras from step2
            ...(Object.entries(formData.step2 || {})
                .filter(([key, value]) => value)
                .map(([key]) => {
                    const extraService = selectedService.extras.find(extra => extra.name === key);
                    return extraService ? { id: extraService.id, quantity: 1 } : null;
                })
                .filter(Boolean)
            )
        ];
    
        const bookingData = {
            user: {
                email: email,
                first_name: firstName,
                last_name: lastName,
            },
            address: formData.step6.postcode,
            city: address.city,
            state: address.county,
            zip: address.postcode,
            phone: formData.phone,
            sms_notifications: formData.smsNotifications || false,
            location_id: 1, // Adjust this value based on your specific setup
            frequency_id: formData.step5.frequencyId,
            service_date: serviceDate,
            arrival_window: formData.step5.selectedSlot.arrivalWindow,
            services: [
                {
                    id: selectedService.id, // Grab service ID from localStorage
                    pricing_parameters: pricingParameters,
                    extras: extras // This now excludes extras with quantity = 0
                }
            ],
            custom_fields: customFieldsData,
            payment_method: 'stripe', // Update based on selected payment method
            card_cvc: cardCVC,
            card_expires: cardExpiration,
            card_number: cardNumber,
            stripe_token: settings.stripe_public_key,
            booking_type: "default",
            meta: [
                {
                    code: "form",
                    value: "widget"
                }
            ]
        };
    
        try {
            const response = await sendBooking(bookingData); // Use the sendBooking service function
            if (response.data) {
                console.log('Booking successful', response.data);
                alert("Booking successful");
                localStorage.clear();
                window.location.reload();
            }
        } catch (error) {
            console.error('Error booking service:', error);
            alert("Error booking service");
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
                    {step5?.selectedDate && <p><strong>Date:</strong> {new Date(step5.selectedDate).toLocaleDateString()}</p>}
                    {step5?.selectedTime && <p><strong>Preferred Time:</strong> {step5.selectedTime}</p>}
                </div>
                <div className={styles.section}>
                    <h3>Order details</h3>
                    {Object.entries(pricingParameters).map(([param, value]) => (
                        <p key={param}>{param}: {value.quantity} x £{value.price.toFixed(2)} = £{(value.quantity * value.price).toFixed(2)} ({value.duration} minutes each)</p>
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
