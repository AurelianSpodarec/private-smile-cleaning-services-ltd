import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import * as styles from './Scheduler.module.css';

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function Step5() {
    const [frequency, setFrequency] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState('');
    const [selectedDays, setSelectedDays] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [beginTime, setBeginTime] = useState('');

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

    return(
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
                    summary
                </div>
            </div>
        </>
    )
}