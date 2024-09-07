import React, { useState, useEffect } from 'react';
import * as styles from './BookingForm.module.css';
import { getCountyCode } from './countyCodes';
import { getCustomFields, estimateCost } from '../../utils/launch27-client';
import { getSummary } from './utils';

const API_KEY = 'ak_lyflbtreoGGLHcAKHUlpc0NIdk0fO';
const URL = `https://api.ideal-postcodes.co.uk/v1/postcodes/`;

export default function Step6({ formData, onStepDataChange }) {
    const [postcode, setPostcode] = useState(formData?.step6?.postcode || '');
    const [cleanerAccess, setCleanerAccess] = useState(formData?.step6?.cleanerAccess || '');
    const [cleanerAccessDetails, setCleanerAccessDetails] = useState(formData?.step6?.cleanerAccessDetails || '');
    const [parkingSpot, setParkingSpot] = useState(formData?.step6?.parkingSpot || '');
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);
    const [customFields, setCustomFields] = useState(null);
    const [propertyAccessOptions, setPropertyAccessOptions] = useState(null);
    const [estimateTotal, setEstimateTotal] = useState(0);

    useEffect(() => {
        // Fetch custom fields using the service client
        getCustomFields()
            .then((response) => {
                setCustomFields(response.data);
            })
            .catch((error) => console.error('Error fetching custom fields:', error));
    }, []);

    useEffect(() => {
        if (customFields) {
            const cleanerAccessOptions = customFields.filter((cf) => cf.label.trim() === "Property Access" && cf.control_type === "radio_buttons");
            localStorage.setItem('customFields', JSON.stringify(customFields))
            setPropertyAccessOptions(cleanerAccessOptions[0].options);
        }
    }, [customFields]);

    useEffect(() => {
        const updatedFormData = {
            ...formData,
            step6: {
                postcode,
                cleanerAccess,
                cleanerAccessDetails,
                parkingSpot,
            }
        };
        localStorage.setItem('bookingFormData', JSON.stringify(updatedFormData));
        onStepDataChange(updatedFormData);

        // Call function to update cost estimate
        updateEstimate(updatedFormData);
    }, [postcode, cleanerAccess, cleanerAccessDetails, parkingSpot]);

    const handlePostcodeChange = async (e) => {
        const inputValue = e.target.value;
        setPostcode(inputValue);

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
    };

    const handleSelectPostcode = (result) => {
        const address = `${result.line_1}, ${result.line_2}, ${result.line_3}, ${result.post_town}, ${result.postcode}`;
        const selectedAddress = {
            line1: result.line_1,
            line2: result.line_2,
            line3: result.line_3,
            city: result.post_town,
            postcode: result.postcode,
            county: getCountyCode(result.traditional_county)
        };
        localStorage.setItem("selectedAddress", JSON.stringify(selectedAddress));
        setPostcode(address);
        setResults([]);
    };

    const handleCleanerAccessChange = (value) => {
        if (cleanerAccessDetails) {
            setCleanerAccessDetails(''); // Clear the notes if a radio button is selected
        }
        const customFieldID = customFields.filter((cf) => cf.label.trim() === "Property Access").pop().id;
        const customFieldStructure = {
            id: customFieldID,
            values: [
                {
                    id: parseInt(value),
                    other: null
                }
            ]
        };

        setCleanerAccess(customFieldStructure);
    };

    const handleCleanerAccessDetailsChange = (e) => {
        if (cleanerAccess) {
            setCleanerAccess(''); // Clear the radio button selection if a note is entered
        }
        const customFieldID = customFields.filter((cf) => cf.label.trim() === "Access Notes").pop().id;
        const customFieldStructure = {
            id: customFieldID,
            values: [
                {
                    value: e.target.value,
                    other: null
                }
            ]
        };

        setCleanerAccessDetails(customFieldStructure);
    };

    const handleParkingSpotChange = (value) => {
        setParkingSpot(value);
    };

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
                frequency_id: formData?.step5?.frequencyId || 1, // Adjust as needed
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
                    setEstimateTotal(data.data.total);
                })
                .catch((error) => console.error('Error estimating cost:', error));
        }
    };

    return (
        <>
            <div className="row">
                <div className="col">
                    <span>Book Service / <b>Step 6 of 6</b></span>
                    <h2>Where's the Address?</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-9">
                    <div className={styles.formContainer}>
                        <div className={styles.inputContainer}>
                            <label className={styles.inputLabel} htmlFor="postcode">Postcode</label>
                            <input
                                id="postcode"
                                type="text"
                                className={styles.textInput}
                                placeholder="Enter your postcode"
                                value={postcode}
                                onChange={handlePostcodeChange}
                            />
                            {results.length > 0 && (
                                <ul className={styles.postCode}>
                                    {results.map((result, index) => (
                                        <li key={index} onClick={() => handleSelectPostcode(result)}>
                                            {result.line_1}, {result.line_2}, {result.line_3}, {result.post_town}, {result.postcode}
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {error && <p className={styles.postcodeError}>{error}</p>}
                        </div>

                        <div className={styles.sectionTitle}>Cleaner access</div>
                        <div className={styles.subTitle}>Recommended for first clean</div>
                        <div className={styles.radioGroup}>
                            {propertyAccessOptions && propertyAccessOptions.length > 0 ? (
                                propertyAccessOptions.map(option => (
                                    <label key={option.id} className={styles.radioOption}>
                                        <input
                                            type="radio"
                                            name="cleanerAccess"
                                            value={option.id}
                                            checked={cleanerAccess?.values?.[0]?.id == option.id}
                                            onChange={(e) => handleCleanerAccessChange(e.target.value)}
                                            className={styles.radioInput}
                                        />
                                        <span className={styles.radioLabel}>
                                            <span className={styles.radioLabelText}>{option.label}</span>
                                        </span>
                                    </label>
                                ))
                            ) : (
                                <p>Loading options...</p>
                            )}
                        </div>

                        <textarea
                            placeholder="Please provide key location, or person we should look for when asking for access"
                            className={styles.additionalDetail}
                            value={cleanerAccessDetails?.values?.[0]?.value || ''}
                            onChange={handleCleanerAccessDetailsChange}
                        ></textarea>

                        <div className={styles.sectionTitle}>Cleaner parking spot</div>
                        <div className={styles.radioGroup}>
                            {['Private Parking Spot', 'On street - No parking restrictions', 'I will provide a permit', 'Pay and Display (Separate Charge)'].map(option => (
                                <label key={option} className={styles.radioOption}>
                                    <input
                                        type="radio"
                                        name="parkingSpot"
                                        value={option}
                                        checked={parkingSpot === option}
                                        onChange={(e) => handleParkingSpotChange(e.target.value)}
                                        className={styles.radioInput}
                                    />
                                    <span className={styles.radioLabel}>
                                        <span className={styles.radioLabelText}>{option}</span>
                                    </span>
                                </label>
                            ))}
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
                                <td>{formData?.step5?.frequency || '-'}</td>
                            </tr>
                            <tr>
                                <td>Start Date</td>
                                <td>{formData?.step5?.selectedDate ? new Date(formData.step5.selectedDate).toLocaleDateString() : '-'}</td>
                            </tr>
                            <tr>
                                <td>Preferred Time</td>
                                <td>{formData?.step5?.selectedTime || '-'}</td>
                            </tr>
                        </tbody>
                    </table>

                    <b>Order Details</b>
                    <table className="table table-hover">
                        <tbody>
                            {getSummary(formData.pricingParameters)}

                            {/* Include the cleaning supplies option in the Order Details */}
                            {formData?.step4 && (
                                <tr>
                                    <td>Cleaning Supplies <br /> <p style={{ fontSize: "small" }}>Eco-friendly, sustainable products</p></td>
                                    <td>£{formData?.step4.price.toFixed(2)}</td>
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
                    <b>Sub Total: £{estimateTotal.toFixed(2)}</b>
                </div>
            </div>
        </>
    );
}
