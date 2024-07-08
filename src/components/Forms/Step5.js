import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import * as styles from './Scheduler.module.css';

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function Step5({ formData, onStepDataChange }) {
    const parseDate = (date) => (date ? new Date(date) : new Date());
    
    const [frequency, setFrequency] = useState(formData?.step5?.frequency || '');
    const [selectedDate, setSelectedDate] = useState(parseDate(formData?.step5?.selectedDate));
    const [selectedTime, setSelectedTime] = useState(formData?.step5?.selectedTime || '');
    const [selectedDays, setSelectedDays] = useState(formData?.step5?.selectedDays || []);
    const [startDate, setStartDate] = useState(parseDate(formData?.step5?.startDate));
    const [endDate, setEndDate] = useState(parseDate(formData?.step5?.endDate));
    const [beginTime, setBeginTime] = useState(formData?.step5?.beginTime || '');

    useEffect(() => {
        const updatedFormData = {
            ...formData,
            step5: {
                frequency,
                selectedDate,
                selectedTime,
                selectedDays,
                startDate,
                endDate,
                beginTime,
            }
        };
        localStorage.setItem('bookingFormData', JSON.stringify(updatedFormData));
        onStepDataChange(updatedFormData);
    }, [frequency, selectedDate, selectedTime, selectedDays, startDate, endDate, beginTime]);

    const handleFrequencyChange = (value) => {
        setFrequency(value);
        setSelectedDays([]);
        setStartDate(new Date());
        setEndDate(new Date());
    };

    const handleDayToggle = (day) => {
        setSelectedDays((prevDays) =>
            prevDays.includes(day)
                ? prevDays.filter((d) => d !== day)
                : [...prevDays, day]
        );
    };

    const handleTimeChange = (value) => {
        setSelectedTime(value);
    };

    const handleWeeklyStartChange = (date) => {
        const day = date.getDay();
        const sunday = new Date(date);
        sunday.setDate(date.getDate() - day);
        const saturday = new Date(sunday);
        saturday.setDate(saturday.getDate() + 6);
        setStartDate(sunday);
        setEndDate(saturday);
    };

    const handleBeginTimeChange = (value) => {
        setBeginTime(value);
    };

    return (
        <>
            <div className="row">
                <div className="col">
                    <span>Book Service / <b>Step 5 of 6</b></span>
                    <h2>When do you want your rooms to be cleaned?</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-9">
                    {/* SCHEDULER COMPONENT BEGINS */}
                    <div className={styles.formContainer}>
                        <div className={styles.sectionTitle}>When do you want your rooms to be cleaned?</div>
                        <div className={styles.frequencyButtons}>
                            {['Once', 'Daily', 'Multiple per Week', 'Weekly', 'Fortnightly', '4-Weekly'].map((freq) => (
                                <div
                                    key={freq}
                                    className={`${styles.frequencyButton} ${frequency === freq ? styles.selected : ''}`}
                                    onClick={() => handleFrequencyChange(freq)}
                                >
                                    {freq}
                                </div>
                            ))}
                        </div>

                        {frequency === 'Daily' && (
                            <>
                                <div className={styles.sectionTitle}>Select Date Range</div>
                                <div className={styles.dateRangeContainer}>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        selectsStart
                                        startDate={startDate}
                                        endDate={endDate}
                                        className={`${styles.datePickerInput} ${styles.dateRangeInput}`}
                                        placeholderText="Start Date"
                                    />
                                    <DatePicker
                                        selected={endDate}
                                        onChange={(date) => setEndDate(date)}
                                        selectsEnd
                                        startDate={startDate}
                                        endDate={endDate}
                                        minDate={startDate}
                                        className={`${styles.datePickerInput} ${styles.dateRangeInput}`}
                                        placeholderText="End Date"
                                    />
                                </div>
                            </>
                        )}

                        {frequency === 'Multiple per Week' && (
                            <>
                                <div className={styles.sectionTitle}>Select Days of the Week</div>
                                <div className={styles.daySelection}>
                                    {daysOfWeek.map((day) => (
                                        <div
                                            key={day}
                                            className={`${styles.dayButton} ${selectedDays.includes(day) ? styles.selected : ''}`}
                                            onClick={() => handleDayToggle(day)}
                                        >
                                            {day}
                                        </div>
                                    ))}
                                </div>

                                <div className={styles.sectionTitle}>Select Date Range</div>
                                <div className={styles.dateRangeContainer}>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        selectsStart
                                        startDate={startDate}
                                        endDate={endDate}
                                        className={`${styles.datePickerInput} ${styles.dateRangeInput}`}
                                        placeholderText="Start Date"
                                    />
                                    <DatePicker
                                        selected={endDate}
                                        onChange={(date) => setEndDate(date)}
                                        selectsEnd
                                        startDate={startDate}
                                        endDate={endDate}
                                        minDate={startDate}
                                        className={`${styles.datePickerInput} ${styles.dateRangeInput}`}
                                        placeholderText="End Date"
                                    />
                                </div>
                            </>
                        )}

                        {frequency === 'Weekly' && (
                            <>
                                <div className={styles.sectionTitle}>Select Date Range (Full Weeks)</div>
                                <div className={styles.dateRangeContainer}>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={handleWeeklyStartChange}
                                        selectsStart
                                        startDate={startDate}
                                        endDate={endDate}
                                        className={`${styles.datePickerInput} ${styles.dateRangeInput}`}
                                        placeholderText="Start Date"
                                    />
                                    <DatePicker
                                        selected={endDate}
                                        onChange={(date) => setEndDate(date)}
                                        selectsEnd
                                        startDate={startDate}
                                        endDate={endDate}
                                        minDate={startDate}
                                        className={`${styles.datePickerInput} ${styles.dateRangeInput}`}
                                        placeholderText="End Date"
                                    />
                                </div>
                            </>
                        )}

                        {frequency === 'Fortnightly' && (
                            <>
                                <div className={styles.sectionTitle}>Select Start Date</div>
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    selectsStart
                                    startDate={startDate}
                                    className={styles.datePickerInput}
                                    placeholderText="Start Date"
                                />
                            </>
                        )}

                        {frequency === '4-Weekly' && (
                            <>
                                <div className={styles.sectionTitle}>Select Start Date</div>
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    selectsStart
                                    startDate={startDate}
                                    className={styles.datePickerInput}
                                    placeholderText="Start Date"
                                />
                            </>
                        )}

                        {frequency && frequency !== 'Daily' && frequency !== 'Multiple per Week' && frequency !== 'Weekly' && (
                            <>
                                <div className={styles.sectionTitle}>Choose {frequency === 'Once' ? 'Date' : 'Day'}</div>
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={(date) => setSelectedDate(date)}
                                    dateFormat={frequency === 'Once' ? 'MMMM d, yyyy' : 'cccc'}
                                    className={styles.datePickerInput}
                                />
                            </>
                        )}

                        <div className={styles.sectionTitle}>Preferred Starting Time</div>
                        <div className={styles.radioGroup}>
                            {['Anytime (08:00 - 18:00)', 'Morning (08:00 - 12:00)', 'Afternoon (12:00 - 18:00)'].map((time) => (
                                <label key={time} className={styles.radioOption}>
                                    <input
                                        type="radio"
                                        name="startingTime"
                                        value={time}
                                        checked={selectedTime === time}
                                        onChange={(e) => handleTimeChange(e.target.value)}
                                        className={styles.radioInput}
                                    />
                                    <span className={styles.radioLabel}>
                                        <span className={styles.radioLabelText}>{time}</span>
                                    </span>
                                </label>
                            ))}
                        </div>

                        <div className={styles.premiumSchedulingHeader}>Premium Scheduling (+£6.00)</div>
                        <div className={styles.radioGroup}>
                            {['Morning (08:00 - 10:00)', 'Morning (10:00 - 12:00)', 'Afternoon (12:00 - 14:00)', 'Afternoon (14:00 - 16:00)', 'Afternoon (16:00 - 18:00)'].map((time) => (
                                <label key={time} className={styles.radioOption}>
                                    <input
                                        type="radio"
                                        name="startingTime"
                                        value={time}
                                        checked={selectedTime === time}
                                        onChange={(e) => handleTimeChange(e.target.value)}
                                        className={styles.radioInput}
                                    />
                                    <span className={styles.radioLabel}>
                                        <span className={styles.radioLabelText}>{time}</span>
                                    </span>
                                </label>
                            ))}
                        </div>

                        {frequency && (frequency === 'Fortnightly' || frequency === '4-Weekly') && (
                            <div className={styles.sectionTitle}>Preferred Beginning Time</div>
                        )}
                        {frequency && (frequency === 'Fortnightly' || frequency === '4-Weekly') && (
                            <div className={styles.radioGroup}>
                                {['Morning (08:00 - 10:00)', 'Morning (10:00 - 12:00)', 'Afternoon (12:00 - 14:00)', 'Afternoon (14:00 - 16:00)', 'Afternoon (16:00 - 18:00)'].map((time) => (
                                    <label key={time} className={styles.radioOption}>
                                        <input
                                            type="radio"
                                            name="beginTime"
                                            value={time}
                                            checked={beginTime === time}
                                            onChange={(e) => handleBeginTimeChange(e.target.value)}
                                            className={styles.radioInput}
                                        />
                                        <span className={styles.radioLabel}>
                                            <span className={styles.radioLabelText}>{time}</span>
                                        </span>
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>
                    {/* SCHEDULER COMPONENT ENDS */}
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
                    {frequency && <p>Frequency: {frequency}</p>}
                    {frequency === 'Daily' && startDate && endDate && (
                        <p>Date Range: {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}</p>
                    )}
                    {frequency === 'Multiple per Week' && selectedDays.length > 0 && startDate && endDate && (
                        <>
                            <p>Days: {selectedDays.join(', ')}</p>
                            <p>Date Range: {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}</p>
                        </>
                    )}
                    {frequency === 'Weekly' && startDate && endDate && (
                        <p>Date Range: {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}</p>
                    )}
                    {frequency && frequency !== 'Daily' && frequency !== 'Multiple per Week' && frequency !== 'Weekly' && selectedDate && (
                        <p>{frequency === 'Once' ? 'Date' : 'Day'}: {selectedDate instanceof Date ? selectedDate.toLocaleDateString() : selectedDate}</p>
                    )}
                    {selectedTime && <p>Starting Time: {selectedTime}</p>}
                    {beginTime && <p>Beginning Time: {beginTime}</p>}
                </div>
            </div>
        </>
    );
}
