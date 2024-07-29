import React, { useState, useEffect } from 'react';
import * as styles from './BookingForm.module.css';

const API_KEY = 'ak_lyflbtreoGGLHcAKHUlpc0NIdk0fO';
const URL = `https://api.ideal-postcodes.co.uk/v1/autocomplete/addresses?api_key=${API_KEY}&q=`;

export default function Step6({ formData, onStepDataChange }) {
    const [postcode, setPostcode] = useState(formData?.step6?.postcode || '');
    const [cleanerAccess, setCleanerAccess] = useState(formData?.step6?.cleanerAccess || '');
    const [cleanerAccessDetails, setCleanerAccessDetails] = useState(formData?.step6?.cleanerAccessDetails || '');
    const [parkingSpot, setParkingSpot] = useState(formData?.step6?.parkingSpot || '');
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);

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
    }, [postcode, cleanerAccess, cleanerAccessDetails, parkingSpot]);

    const handlePostcodeChange = async (e) => {
        const inputValue = e.target.value;
        setPostcode(inputValue);

        if (inputValue.length >= 1) {
            try {
                const response = await fetch(`${URL}${inputValue}`);
                const data = await response.json();
                if (data.result) {
                    setResults(data.result.hits || []);
                    setError(null);
                } else {
                    setResults([]);
                    setError('');
                }
            } catch (err) {
                setResults([]);
                setError('Error al buscar el código postal');
            }
        } else {
            setResults([]);
        }
    };

    const handleSelectPostcode = (suggestion) => {
        setPostcode(suggestion);
        setResults([]);
    };

    const handleCleanerAccessChange = (value) => {
        setCleanerAccess(value);
    };

    const handleCleanerAccessDetailsChange = (e) => {
        setCleanerAccessDetails(e.target.value);
    };

    const handleParkingSpotChange = (value) => {
        setParkingSpot(value);
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
                                        <li key={index} onClick={() => handleSelectPostcode(result.suggestion)}>
                                            {result.suggestion}
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {error && <p className={styles.postcodeError}>{error}</p>}
                        </div>

                        <div className={styles.sectionTitle}>Cleaner access</div>
                        <div className={styles.subTitle}>Recommended for first clean</div>
                        <div className={styles.radioGroup}>
                            {['Someone at home', 'Spare Keys', 'Concierge', 'Key Safe', 'Hidden Key'].map(option => (
                                <label key={option} className={styles.radioOption}>
                                    <input
                                        type="radio"
                                        name="cleanerAccess"
                                        value={option}
                                        checked={cleanerAccess === option}
                                        onChange={(e) => handleCleanerAccessChange(e.target.value)}
                                        className={styles.radioInput}
                                    />
                                    <span className={styles.radioLabel}>
                                        <span className={styles.radioLabelText}>{option}</span>
                                    </span>
                                </label>
                            ))}
                            <textarea
                                placeholder="Please provide key location, or person we should look for when asking for access"
                                className={styles.additionalDetail}
                                value={cleanerAccessDetails}
                                onChange={handleCleanerAccessDetailsChange}
                            ></textarea>
                        </div>

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
                    <h3>Summary</h3>
                    {formData?.bedrooms !== undefined && (
                        <p>Bedrooms: {formData.bedrooms}</p>
                    )}
                    {formData?.pricingParameters && Object.keys(formData.pricingParameters).map(param => (
                        <div key={param}>
                            <p><b>{param}</b>:</p>
                            {typeof formData.pricingParameters[param] === 'object' ? (
                                Object.entries(formData.pricingParameters[param]).map(([subParam, subValue]) => (
                                    <p key={subParam}>{subParam}: {subValue}</p>
                                ))
                            ) : (
                                <p>{param}: {formData.pricingParameters[param]}</p>
                            )}
                        </div>
                    ))}
                    <h3>Extras</h3>
                    {formData?.step2 && Object.entries(formData.step2).map(([key, value]) => (
                        value ? <p key={key}>{key.replace('_', ' ')}</p> : null
                    ))}
                    <h3>Booked Time:</h3>
                    {formData?.step3 && <p>Selected Hours: {formData.step3}</p>}
                    {formData?.step4 && <p>Cleaning Supplies: {formData.step4 === 'yes' ? 'Yes, Please' : 'No, Thanks'}</p>}
                    {formData?.step5?.frequency && <p>Frequency: {formData.step5.frequency}</p>}
                    {formData?.step5?.frequency === 'Daily' && formData.step5.startDate && formData.step5.endDate && (
                        <p>Date Range: {new Date(formData.step5.startDate).toLocaleDateString()} - {new Date(formData.step5.endDate).toLocaleDateString()}</p>
                    )}
                    {formData?.step5?.frequency === 'Multiple per Week' && formData.step5.selectedDays.length > 0 && formData.step5.startDate && formData.step5.endDate && (
                        <>
                            <p>Days: {formData.step5.selectedDays.join(', ')}</p>
                            <p>Date Range: {new Date(formData.step5.startDate).toLocaleDateString()} - {new Date(formData.step5.endDate).toLocaleDateString()}</p>
                        </>
                    )}
                    {formData?.step5?.frequency === 'Weekly' && formData.step5.startDate && formData.step5.endDate && (
                        <p>Date Range: {new Date(formData.step5.startDate).toLocaleDateString()} - {new Date(formData.step5.endDate).toLocaleDateString()}</p>
                    )}
                    {formData?.step5?.frequency && formData.step5.frequency !== 'Daily' && formData.step5.frequency !== 'Multiple per Week' && formData.step5.frequency !== 'Weekly' && formData.step5.selectedDate && (
                        <p>{formData.step5.frequency === 'Once' ? 'Date' : 'Day'}: {new Date(formData.step5.selectedDate).toLocaleDateString()}</p>
                    )}
                    {formData?.step5?.selectedTime && <p>Starting Time: {formData.step5.selectedTime}</p>}
                    {formData?.step5?.beginTime && <p>Beginning Time: {formData.step5.beginTime}</p>}
                    <h3>Address:</h3>
                    {postcode && <p>Postcode: {postcode}</p>}
                    {cleanerAccess && <p>Cleaner Access: {cleanerAccess}</p>}
                    {cleanerAccessDetails && <p>Cleaner Access Details: {cleanerAccessDetails}</p>}
                    {parkingSpot && <p>Parking Spot: {parkingSpot}</p>}
                </div>
            </div>
        </>
    );
}
