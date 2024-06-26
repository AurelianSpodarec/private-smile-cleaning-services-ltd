import React, { useState } from 'react';

import * as styles from './BookingForm.module.css'; 

export default function Step4() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (value) => {
        setSelectedOption(value);
    };

    return(
        <>
            <div className="row">
                <div className="col-9">
                    <span>Book Service / <b>Step 4 of 6</b></span>
                    <img src="/img/booking/cleaning-supplies.png" alt="cleaning supplies" className={styles.heroImage}/>
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
                            <span className={styles.checkboxLabelDescription}>Our agent will bring the cleaning products for additional £6.00</span>
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
      </            div>

                </div>
                <div className="col-3">
                    summary
                </div>
            </div>
        </>
    )
}