import React, { useState } from 'react';
import HoursSelection from './HoursSelection';

export default function Step3() {
    const [selectedHour, setSelectedHour] = useState(null);

    const handleHourSelect = (hour) => {
        setSelectedHour(hour);
        console.log('Selected hour:', hour);
    };

    return(
        <>
            <div className="row">
                <div className="col">
                    <span>Book Service / <b>Step 3 of 6</b></span>
                    <h2>Estimate number of hours needed for the cleaning</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-9">
                    <HoursSelection onSelect={handleHourSelect} />
                    <p>Selected hour: {selectedHour}</p>
                </div>
                <div className="col-3">
                    summary
                </div>
            </div>
        </>
    )
}