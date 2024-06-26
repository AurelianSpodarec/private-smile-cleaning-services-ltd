import React, { useState } from 'react';
import CounterInput from './CounterInput';

import * as styles from './BookingForm.module.css'; 

export default function Step1() {
    const [bedroomCount, setBedroomCount] = useState(0);
    const [receptionCount, setReceptionCount] = useState(0);
    const [bathroomCount, setBathroomCount] = useState(0);

    const incrementBedrooms = () => setBedroomCount(bedroomCount + 1);
    const decrementBedRooms = () => setBedroomCount(bedroomCount > 0 ? bedroomCount - 1 : 0);

    const incrementReceptions = () => setReceptionCount(receptionCount + 1);
    const decrementReceptions = () => setReceptionCount(receptionCount > 0 ? receptionCount - 1 : 0);

    const incrementBathrooms = () => setBathroomCount(bathroomCount + 1);
    const decrementBathrooms = () => setBathroomCount(bathroomCount > 0 ? bathroomCount - 1 : 0);

    return(
        <>
            <div className="row">
                <div className="col">
                    <span>Book Service / <b>Step 1 of 6</b></span>
                    <h2>Tell us about your property</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-9">
                    <div className="row pb-15">
                        <div className="col">
                            <img className={styles.homeLayoutImg} src="/img/booking/bedroom.png" alt='How many bedrooms' />
                            <span className={styles.spaceLeft}><b>Bedroom</b></span>
                        </div>
                        <div className="col">
                            <CounterInput 
                                count={bedroomCount} 
                                onIncrement={incrementBedrooms} 
                                onDecrement={decrementBedRooms} 
                            />
                        </div>
                    </div>
                    <div className="row pb-15">
                        <div className="col">
                            <img className={styles.homeLayoutImg} src="/img/booking/livingroom.png" alt='how many receptions/livingrooms' />
                            <span className={styles.spaceLeft}><b>Reception / Livingroom</b></span>
                        </div>
                        <div className="col">
                            <CounterInput 
                                count={receptionCount} 
                                onIncrement={incrementReceptions} 
                                onDecrement={decrementReceptions} 
                            />
                        </div>
                    </div>
                    <div className="row pb-15">
                        <div className="col">
                            <img className={styles.homeLayoutImg} src="/img/booking/bathroom.png" alt='how many bathrooms' />
                            <span className={styles.spaceLeft}><b>Bathroom</b></span>
                        </div>
                        <div className="col">
                            <CounterInput 
                                count={bathroomCount} 
                                onIncrement={incrementBathrooms} 
                                onDecrement={decrementBathrooms} 
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