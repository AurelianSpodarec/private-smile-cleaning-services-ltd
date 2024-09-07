import React, { useEffect, useState } from 'react';
import { getSettings, sendBooking, estimateCost } from '../../utils/launch27-client';
import * as styles from './ConfirmAndPay.module.css';
import * as styles2 from './BookingForm.module.css';
import { getSummary } from './utils';
import { Link, navigate } from 'gatsby'

const API_KEY = 'ak_lyflbtreoGGLHcAKHUlpc0NIdk0fO';
const URL = `https://api.ideal-postcodes.co.uk/v1/postcodes/`;

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
    const [hideBillingAddress, setHideBillingAddress] = useState(false)
    const [addressLine1, setAddressLine1] = useState('')
    const [addressLine2, setAddressLine2] = useState('')
    const [town, setTown] = useState('')
    const [county, setCounty] = useState('')
    const [postCode, setPostCode] = useState('') // The one in the billing address form

    // postcode fetching
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);
    const [estimateTotal, setEstimateTotal] = useState(0);
    
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

    useEffect(() => {
        if (formData) {
            updateEstimate(formData);
        }
    }, [formData]);

    const updateEstimate = (updatedFormData) => {
        const selectedService = JSON.parse(localStorage.getItem('selectedService'));

        if (selectedService && formData?.step5?.selectedDate) {
            const formattedDate = new Date(formData.step5.selectedDate).toISOString().split('T')[0] + "T08:00:00";

            // Prepare extras, including cleaning supplies if selected
            const extras = updatedFormData.counterStates.flatMap((service) =>
                Object.entries(service.parameters)
                    .filter(([_, value]) => value.quantity > 0)
                    .map(([_, value]) => ({
                        id: value.id,
                        quantity: value.quantity
                    }))
            );

            // Add cleaning supplies if selected
            if (formData.step4 && formData.step4 !== 'no') {
                extras.push({
                    id: formData.step4.id,
                    quantity: 1
                });
            }

            const costPayload = {
                service_date: formattedDate,
                frequency_id: formData?.step5?.frequencyId || 1,
                services: [{
                    id: selectedService.id,
                    pricing_parameters: Object.entries(updatedFormData.pricingParameters).map(([name, param]) => ({
                        id: param.id,
                        quantity: param.quantity,
                    })),
                    extras: extras
                }]
            };

            estimateCost(costPayload)
                .then((data) => {
                    setEstimateTotal(data.data);
                })
                .catch((error) => console.error('Error estimating cost:', error));
        }
    };

    if (!formData || !address) {
        return <div>Loading...</div>;
    }

    const {
        pricingParameters,
        step2,
        step3,
        step4,
        step5,
        step6,
    } = formData;

    const getAccessOptions = () => {
        const values = formData?.step6
        const fieldId = values.cleanerAccess.id
        const valueId = values.cleanerAccess.values[0].id
        const fields = JSON.parse(localStorage.getItem("customFields"));
        const matchingField = fields.filter(f => f.id == fieldId).pop()
        const matchingOption = matchingField.options.filter(o => o.id == valueId).pop()
        
        return matchingOption.label
    }

    const calculateTotal = () => {
        let total = 0;
        const selectedService = JSON.parse(localStorage.getItem("selectedService"))
        total += selectedService.price
        
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
        if (step4 !== 'no') total += step4.price;
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
            if (typeof window !== 'undefined') {
                const hostname = window.location.hostname;
        
                if (hostname === 'smile.cleaning') {
                    console.error('Error booking service:', error);
                    alert("Error booking service");
                } else {
                    navigate("/order-confirmed");
                }
            }
        }
    };

    const toggleBillingAddress = (e) => {
        setHideBillingAddress(e.target.checked)
    }

    const handlePostcodeChange = async (e) => {
        const inputValue = e.target.value;
        setPostCode(e.target.value)
        
        if (inputValue.length >= 6) {
            try {
                const response = await fetch(`${URL}${inputValue}?api_key=${API_KEY}`);
                const data = await response.json();
                if (data.result) {
                    setResults(data.result);
                    setError(null);
                } else {
                    setResults([]);
                    setError('No results found');
                }
            } catch (err) {
                setResults([]);
                setError('Error fetching postcode');
            }
        } else {
            setResults([]);
        }
    }

    const handleSelectPostcode = (selected) => {
         // TODO: send this somewhere
        setAddressLine1(selected.line_1);
        setAddressLine2(selected.line_2 + " " + selected.line_3)
        setTown(selected.post_town)
        setCounty(selected.traditional_county)
        setResults([]);
    }

    return (
        <div className="container pt-120 pb-120">
            <div className={styles.confirmAndPay}>
                <h2>Confirm and Pay</h2>
                <div className={styles.section}>
                    <h3>Address</h3>
                    <table className="table table-borderless">
                        <tbody>
                            <tr>
                                <td>Cleaning Address</td>
                                <td style={{textAlign: "right"}}>{step6?.postcode}</td>
                            </tr>
                            <tr>
                                <td>Cleaner Access</td>
                                <td style={{textAlign: "right"}}>{getAccessOptions()}</td>
                            </tr>
                            <tr>
                                <td>Note</td>
                                <td style={{textAlign: "right"}}>{step6?.cleanerAccessDetails || '-'}</td>
                            </tr>
                            <tr>
                                <td>Parking Spot</td>
                                <td style={{textAlign: "right"}}>{step6?.parkingSpot}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.section}>
                    <h3>Schedule</h3>
                    <table className="table table-borderless">
                        <tbody>
                            <tr>
                                <td>Recurring</td>
                                <td style={{textAlign: "right"}}>{step5?.frequency}</td>
                            </tr>
                            <tr>
                                <td>Start Date</td>
                                <td style={{textAlign: "right"}}>{new Date(step5.selectedDate).toLocaleDateString()}</td>
                            </tr>
                            <tr>
                                <td>Preferred Time</td>
                                <td style={{textAlign: "right"}}>{step5.selectedTime}</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    
                </div>
                <div className={styles.section}>
                    <h3>Order details</h3>
                    <table className="table table-borderless">
                        <tbody>
                            {getSummary(formData.pricingParameters)}
                             {/* Include the cleaning supplies option in the Order Details */}
                             {formData?.step4 && (
                                <tr>
                                    <td>Cleaning Supplies <br /> <p style={{ fontSize: "small" }}>Eco-friendly, sustainable products</p></td>
                                    <td style={{textAlign: "right"}}>£{formData?.step4.price.toFixed(2)}</td>
                                </tr>
                            )}
                            {/* Include extras from Step2 */}
                            {formData?.counterStates.map(service => (
                                <React.Fragment key={service.service}>
                                    {Object.entries(service.parameters).map(([param, value]) => (
                                        value.quantity > 0 && (
                                            <tr key={param}>
                                                <td>{value.quantity} {param} <br /> <p style={{ fontSize: "small" }}>({value.duration} minutes each)</p></td>
                                                <td style={{textAlign: "right"}}>£{(value.quantity * value.price).toFixed(2)}</td>
                                            </tr>
                                        )
                                    ))}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>

                    <hr/>
                    <table className="table table-borderless">
                        <tbody>
                            <tr>
                                <td>Sub Total</td>
                                <td style={{textAlign: "right"}}>£{estimateTotal.tax?.before_tax.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>VAT ({estimateTotal.tax?.tax_percent}%)</td>
                                <td style={{textAlign: "right"}}>£{estimateTotal.tax?.tax_amount.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td style={{fontSize: "x-large"}}>Total: </td>
                                <td style={{textAlign: "right", fontSize: "x-large"}}>£{estimateTotal.tax?.after_tax.toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>
                   
                </div>
                <div className={styles.section}>
                    <h3>Payment Method</h3>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.inputContainer}>
                            <label className={styles.inputLabel} htmlFor="cardName">Card Holder Name</label>
                            <input id="cardName" type="text" className={styles.textInput} required />
                        </div>
                        <div className={styles.inputContainer}>
                            <label className={styles.inputLabel} htmlFor="cardNumber">Card Number</label>
                            <input id="cardNumber" type="text" className={styles.textInput} value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <div className={styles.inputContainer}>
                                    <label className={styles.inputLabel} htmlFor="expiry">Expiry (MM/YY)</label>
                                    <input id="expiry" type="text" className={styles.textInput} value={cardExpiration} onChange={(e) => setCardExpiration(e.target.value)} required />
                                </div>
                            </div>
                            <div className='col'>
                                <div className={styles.inputContainer}>
                                    <label className={styles.inputLabel} htmlFor="cvv">SVN</label>
                                    <input id="cvv" type="text" className={styles.textInput} value={cardCVC} onChange={(e) => setCardCVC(e.target.value)} required />
                                </div>
                            </div>
                        </div>
                        <h4>Billing Address</h4>
                        <p>Billing address should match the card address</p>
                        <div className='row'>
                            <div className='col'>
                                <div className={styles.inputContainer}>
                                    <label className={styles.inputLabel} htmlFor="firstName">First Name</label>
                                    <input id="firstName" type="text" className={styles.textInput} value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                                </div>
                            </div>
                            <div className='col'>
                                <div className={styles.inputContainer}>
                                    <label className={styles.inputLabel} htmlFor="lastName">Last Name</label>
                                    <input id="lastName" type="text" className={styles.textInput} value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                                </div>
                            </div>
                        </div>
                        <div className={styles.inputContainer}>
                            <label className={styles.inputLabel} htmlFor="email">Email</label>
                            <input id="email" type="email" className={styles.textInput} value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className={styles.inputContainer}>
                            <input className="form-check-input" type="checkbox" value={hideBillingAddress} onClick={toggleBillingAddress} id="sameAddress" />
                            <label className={styles.formCheckLabel} for="sameAddress">
                                Same address as cleaning address
                            </label>
                        </div>
                        {!hideBillingAddress && (
                            <>
                                <div className={styles.inputContainer}>
                                    <label className={styles.inputLabel} htmlFor="postcode">Postcode</label>
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="search-box"><i className="fal fa-search"></i></span>
                                        <input id="postcode" type="text" className="form-control" value={postCode} onChange={handlePostcodeChange} placeholder="Enter your location or postcode" aria-describedby="search-box" required />
                                    </div>
                                    {results.length > 0 && (
                                        <ul className={styles2.postCode}>
                                            {results.map((result, index) => (
                                                <li key={index} onClick={() => handleSelectPostcode(result)}>
                                                    {result.line_1}, {result.line_2}, {result.line_3}, {result.post_town}, {result.postcode}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                                <div className={styles.inputContainer}>
                                    <label className={styles.inputLabel} htmlFor="addressLine1">Address Line 1</label>
                                    <input id="addressLine1" type="text" className={styles.textInput} value={addressLine1} onChange={(e) => setAddressLine1(e.target.value)} required />
                                </div>
                                <div className={styles.inputContainer}>
                                    <label className={styles.inputLabel} htmlFor="addressLine2">Address Line 2 (optional)</label>
                                    <input id="addressLine2" type="text" className={styles.textInput} value={addressLine2} onChange={(e) => setAddressLine2(e.target.value)} />
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <div className={styles.inputContainer}>
                                            <label className={styles.inputLabel} htmlFor="town">Town / City</label>
                                            <input id="town" type="text" className={styles.textInput} value={town} onChange={(e) => setTown(e.target.value)} required />
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className={styles.inputContainer}>
                                            <label className={styles.inputLabel} htmlFor="county">County (if applicable)</label>
                                            <input id="county" type="text" className={styles.textInput} value={county} onChange={(e) => setCounty(e.target.value)} required />
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                        <hr/>
                        <p>By selecting the button below, I aggree to Smile Cleaning's <Link to="/page/terms-of-use/">Terms and Conditions</Link> and <Link to="/page/privacy-policy/">Privacy Policy</Link></p>
                        <button type="submit" className="btn btn-primary" style={{width: "100%"}}>Confirm and Pay</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ConfirmAndPay;
