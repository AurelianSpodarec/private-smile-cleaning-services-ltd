import React, { useState } from 'react';

import ToggleSwitch from './ToggleSwitch';

import * as styles from './BookingForm.module.css'; 

export default function Step2() {

    const [toggleStates, setToggleStates] = useState({
      deep_clean: false,
      kitchen_area: false,
      inside_fridge: false,
      oven_cleaning: false,
      inside_windows: false
    });
    
    const handleToggle = (key, value) => {
      setToggleStates((prevStates) => ({
        ...prevStates,
        [key]: value,
      }));
    };

    return(
        <>
            <div className="row">
                <div className="col">
                    <span>Book Service / <b>Step 2 of 6</b></span>
                    <h2>Do you need some additional services?</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-9">
                    <div className="row pb-15">
                        <div className="col">
                            <img className={styles.homeLayoutImg} src="/img/booking/bedroom.png" alt='do you need deep clean?' />
                            <span className={styles.spaceLeft}><b>Deep Clean</b></span>
                        </div>
                        <div className="col">
                            <ToggleSwitch
                                initialValue={toggleStates.deep_clean}
                                onToggle={(value) => handleToggle('deep_clean', value)}
                            />
                        </div>
                    </div>
                    <div className="row pb-15">
                        <div className="col">
                            <img className={styles.homeLayoutImg} src="/img/booking/bedroom.png" alt='do you need kitchen area?' />
                            <span className={styles.spaceLeft}><b>Kitchen Area</b></span>
                        </div>
                        <div className="col">
                            <ToggleSwitch
                                initialValue={toggleStates.kitchen_area}
                                onToggle={(value) => handleToggle('kitchen_area', value)}
                            />
                        </div>
                    </div>
                    <div className="row pb-15">
                        <div className="col">
                            <img className={styles.homeLayoutImg} src="/img/booking/bedroom.png" alt='do you need inside of fridge cleaning?' />
                            <span className={styles.spaceLeft}><b>Inside Of Fridge</b></span>
                        </div>
                        <div className="col">
                            <ToggleSwitch
                                initialValue={toggleStates.inside_fridge}
                                onToggle={(value) => handleToggle('inside_fridge', value)}
                            />
                        </div>
                    </div>
                    <div className="row pb-15">
                        <div className="col">
                            <img className={styles.homeLayoutImg} src="/img/booking/bedroom.png" alt='do you need oven cleaning?' />
                            <span className={styles.spaceLeft}><b>Oven Cleaning</b></span>
                        </div>
                        <div className="col">
                            <ToggleSwitch
                                initialValue={toggleStates.oven_cleaning}
                                onToggle={(value) => handleToggle('oven_cleaning', value)}
                            />
                        </div>
                    </div>
                    <div className="row pb-15">
                        <div className="col">
                            <img className={styles.homeLayoutImg} src="/img/booking/bedroom.png" alt='do you need windows cleaning?' />
                            <span className={styles.spaceLeft}><b>Inside of windows</b></span>
                        </div>
                        <div className="col">
                            <ToggleSwitch
                                initialValue={toggleStates.inside_windows}
                                onToggle={(value) => handleToggle('inside_windows', value)}
                            />
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