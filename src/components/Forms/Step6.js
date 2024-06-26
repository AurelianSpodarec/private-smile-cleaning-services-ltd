import React, { useState } from 'react';

import * as styles from './BookingForm.module.css'; 

export default function Step6() {
    const [cleanerAccess, setCleanerAccess] = useState('');
    const [parkingSpot, setParkingSpot] = useState('');

    return(
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
                            />
                        </div>

                        <div className={styles.sectionTitle}>Cleaner access</div>
                        <div className={styles.subTitle}>Recommended for first clean</div>
                        <div className={styles.radioGroup}>
                            <label className={styles.radioOption}>
                            <input
                                type="radio"
                                name="cleanerAccess"
                                value="Someone at home"
                                checked={cleanerAccess === 'Someone at home'}
                                onChange={(e) => setCleanerAccess(e.target.value)}
                                className={styles.radioInput}
                            />
                            <span className={styles.radioLabel}>
                                <span className={styles.radioLabelText}>Someone at home</span>
                            </span>
                            </label>
                            <label className={styles.radioOption}>
                            <input
                                type="radio"
                                name="cleanerAccess"
                                value="Spare Keys"
                                checked={cleanerAccess === 'Spare Keys'}
                                onChange={(e) => setCleanerAccess(e.target.value)}
                                className={styles.radioInput}
                            />
                            <span className={styles.radioLabel}>
                                <span className={styles.radioLabelText}>Spare Keys</span>
                            </span>
                            </label>
                            <label className={styles.radioOption}>
                            <input
                                type="radio"
                                name="cleanerAccess"
                                value="Concierge"
                                checked={cleanerAccess === 'Concierge'}
                                onChange={(e) => setCleanerAccess(e.target.value)}
                                className={styles.radioInput}
                            />
                            <span className={styles.radioLabel}>
                                <span className={styles.radioLabelText}>Concierge</span>
                            </span>
                            </label>
                            <label className={styles.radioOption}>
                            <input
                                type="radio"
                                name="cleanerAccess"
                                value="Key Safe"
                                checked={cleanerAccess === 'Key Safe'}
                                onChange={(e) => setCleanerAccess(e.target.value)}
                                className={styles.radioInput}
                            />
                            <span className={styles.radioLabel}>
                                <span className={styles.radioLabelText}>Key Safe</span>
                            </span>
                            </label>
                            <label className={styles.radioOption}>
                            <input
                                type="radio"
                                name="cleanerAccess"
                                value="Hidden Key"
                                checked={cleanerAccess === 'Hidden Key'}
                                onChange={(e) => setCleanerAccess(e.target.value)}
                                className={styles.radioInput}
                            />
                            <span className={styles.radioLabel}>
                                <span className={styles.radioLabelText}>Hidden Key</span>
                            </span>
                            </label>
                            <textarea
                            placeholder="Please provide key location, or person we should look for when asking for access"
                            className={styles.additionalDetail}
                            ></textarea>
                        </div>

                        <div className={styles.sectionTitle}>Cleaner parking spot</div>
                        <div className={styles.radioGroup}>
                            <label className={styles.radioOption}>
                            <input
                                type="radio"
                                name="parkingSpot"
                                value="Private Parking Spot"
                                checked={parkingSpot === 'Private Parking Spot'}
                                onChange={(e) => setParkingSpot(e.target.value)}
                                className={styles.radioInput}
                            />
                            <span className={styles.radioLabel}>
                                <span className={styles.radioLabelText}>Private Parking Spot</span>
                            </span>
                            </label>
                            <label className={styles.radioOption}>
                            <input
                                type="radio"
                                name="parkingSpot"
                                value="On street - No parking restrictions"
                                checked={parkingSpot === 'On street - No parking restrictions'}
                                onChange={(e) => setParkingSpot(e.target.value)}
                                className={styles.radioInput}
                            />
                            <span className={styles.radioLabel}>
                                <span className={styles.radioLabelText}>On street - No parking restrictions</span>
                            </span>
                            </label>
                            <label className={styles.radioOption}>
                            <input
                                type="radio"
                                name="parkingSpot"
                                value="I will provide a permit"
                                checked={parkingSpot === 'I will provide a permit'}
                                onChange={(e) => setParkingSpot(e.target.value)}
                                className={styles.radioInput}
                            />
                            <span className={styles.radioLabel}>
                                <span className={styles.radioLabelText}>I will provide a permit</span>
                            </span>
                            </label>
                            <label className={styles.radioOption}>
                            <input
                                type="radio"
                                name="parkingSpot"
                                value="Pay and Display (Separate Charge)"
                                checked={parkingSpot === 'Pay and Display (Separate Charge)'}
                                onChange={(e) => setParkingSpot(e.target.value)}
                                className={styles.radioInput}
                            />
                            <span className={styles.radioLabel}>
                                <span className={styles.radioLabelText}>Pay and Display (Separate Charge)</span>
                            </span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    summary
                </div>
            </div>
        </>
    )
}