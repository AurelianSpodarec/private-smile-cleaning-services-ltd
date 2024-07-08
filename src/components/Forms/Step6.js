import React, { useState, useEffect } from 'react';
import * as styles from './BookingForm.module.css';

export default function Step6({ formData, onStepDataChange }) {
    const [postcode, setPostcode] = useState(formData?.step6?.postcode || '');
    const [cleanerAccess, setCleanerAccess] = useState(formData?.step6?.cleanerAccess || '');
    const [cleanerAccessDetails, setCleanerAccessDetails] = useState(formData?.step6?.cleanerAccessDetails || '');
    const [parkingSpot, setParkingSpot] = useState(formData?.step6?.parkingSpot || '');

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

    const handlePostcodeChange = (e) => {
        setPostcode(e.target.value);
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
