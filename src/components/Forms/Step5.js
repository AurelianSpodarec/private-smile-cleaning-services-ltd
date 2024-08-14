import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import * as styles from './Scheduler.module.css';

const FREQUENCY_URL = 'https://smile.launch27.com/latest/booking/frequencies';
const SPOTS_URL = 'https://smile.launch27.com/latest/booking/spots';

export default function Step5({ formData, onStepDataChange }) {
    const parseDate = (date) => (date ? new Date(date) : new Date());

    const [frequencies, setFrequencies] = useState([]);
    const [frequency, setFrequency] = useState(formData?.step5?.frequency || '');
    const [selectedDate, setSelectedDate] = useState(parseDate(formData?.step5?.selectedDate));
    const [selectedTime, setSelectedTime] = useState(formData?.step5?.selectedTime || '');
    const [spots, setSpots] = useState([]);
    const [frequencyId, setFrequencyId] = useState(formData?.step5?.frequencyId || null);

    const [selectedSlot, setSelectedSlot] = useState({
        hours: formData?.step5?.selectedSlot?.hours || '',
        arrivalWindow: formData?.step5?.selectedSlot?.arrivalWindow || '',
        isPremium: formData?.step5?.selectedSlot?.isPremium || false,
    });

    useEffect(() => {
        const updatedFormData = {
            ...formData,
            step5: {
                frequency,
                frequencyId,
                selectedDate,
                selectedTime,
                selectedSlot,
            },
        };
        localStorage.setItem('bookingFormData', JSON.stringify(updatedFormData));
        onStepDataChange(updatedFormData);
    }, [frequency, frequencyId, selectedDate, selectedTime, selectedSlot]);

    useEffect(() => {
        fetch(FREQUENCY_URL)
            .then((response) => response.json())
            .then((data) => {
                setFrequencies(data);
            })
            .catch((error) => console.error('Error fetching frequencies:', error));
    }, []);

    useEffect(() => {
        if (selectedDate) {
            fetchAvailableSpots(selectedDate, 1); // Fetching spots for 1 day
        }
    }, [selectedDate]);

    const fetchAvailableSpots = (date, days) => {
        const formattedDate = date.toISOString().split('T')[0]; // Format date to YYYY-MM-DD
        fetch(SPOTS_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ date: formattedDate, days, mode: 'new' }),
        })
            .then((response) => response.json())
            .then((data) => {
                setSpots(data);
            })
            .catch((error) => console.error('Error fetching spots:', error));
    };

    const handleFrequencyChange = (freq) => {
        setFrequency(freq.name);
        setFrequencyId(freq.id);
        setSelectedDate(null);
        setSelectedTime('');
        setSelectedSlot({ hours: '', arrivalWindow: '', isPremium: false });
    };

    const handleTimeChange = (timeSlot, startTime, endTime, isPremium) => {
        setSelectedTime(`${startTime} - ${endTime}`);
        setSelectedSlot({
            hours: timeSlot.hours,
            arrivalWindow: timeSlot.arrival_window,
            isPremium,
        });
    };

    const availableTimes = spots.length > 0 ? spots[0].spots.filter((spot) => spot.free) : [];
    const regularSpots = availableTimes.filter((spot) => spot.arrival_window === 240);
    const premiumSpots = availableTimes.filter((spot) => spot.arrival_window === 120);

    const formatTime = (hours, minutes, arrivalWindow) => {
        const startTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
        const endTime = new Date();
        endTime.setHours(hours, minutes + arrivalWindow);
        return `${startTime} - ${String(endTime.getHours()).padStart(2, '0')}:${String(endTime.getMinutes()).padStart(2, '0')}`;
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
                    <div className={styles.formContainer}>
                        <div className={styles.sectionTitle}>When do you want your rooms to be cleaned?</div>
                        <div className={styles.frequencyButtons}>
                            {frequencies.map((freq) => (
                                <div
                                    key={freq.id}
                                    className={`${styles.frequencyButton} ${frequency === freq.name ? styles.selected : ''}`}
                                    onClick={() => handleFrequencyChange(freq)}
                                >
                                    {freq.name}
                                </div>
                            ))}
                        </div>

                        <div className={styles.sectionTitle}>Select Date</div>
                        <DatePicker
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            className={styles.datePickerInput}
                            placeholderText="Select Date"
                        />

                        <div className={styles.sectionTitle}>Regular Booking Spots</div>
                        <div className={styles.radioGroup}>
                            {regularSpots.length > 0 ? (
                                regularSpots.map((timeSlot, index) => {
                                    const timeRange = formatTime(timeSlot.hours, timeSlot.minutes, timeSlot.arrival_window);
                                    return (
                                        <label key={index} className={styles.radioOption}>
                                            <input
                                                type="radio"
                                                name="startingTime"
                                                value={`${timeSlot.hours}-${timeSlot.minutes}-${timeSlot.arrival_window}-regular`}
                                                checked={selectedTime === timeRange}
                                                onChange={() =>
                                                    handleTimeChange(timeSlot, timeRange.split(' - ')[0], timeRange.split(' - ')[1], false)
                                                }
                                                className={styles.radioInput}
                                            />
                                            <span className={styles.radioLabel}>
                                                <span className={styles.radioLabelText}>{timeRange}</span>
                                            </span>
                                        </label>
                                    );
                                })
                            ) : (
                                <p>No available regular times for the selected date.</p>
                            )}
                        </div>

                        <div className={styles.sectionTitle}>Premium Booking Spots</div>
                        <div className={styles.radioGroup}>
                            {premiumSpots.length > 0 ? (
                                premiumSpots.map((timeSlot, index) => {
                                    const timeRange = formatTime(timeSlot.hours, timeSlot.minutes, timeSlot.arrival_window);
                                    return (
                                        <label key={index} className={styles.radioOption}>
                                            <input
                                                type="radio"
                                                name="startingTime"
                                                value={`${timeSlot.hours}-${timeSlot.minutes}-${timeSlot.arrival_window}-premium`}
                                                checked={selectedTime === timeRange}
                                                onChange={() =>
                                                    handleTimeChange(timeSlot, timeRange.split(' - ')[0], timeRange.split(' - ')[1], true)
                                                }
                                                className={styles.radioInput}
                                            />
                                            <span className={styles.radioLabel}>
                                                <span className={styles.radioLabelText}>{timeRange}</span>
                                            </span>
                                        </label>
                                    );
                                })
                            ) : (
                                <p>No available premium times for the selected date.</p>
                            )}
                        </div>
                    </div>
                </div>
                <div className={styles.billFormStep3}>
                    <h3>Summary</h3>
                    {formData?.bedrooms !== undefined && (
                        <p>Bedrooms: {formData.bedrooms}</p>
                    )}
                    {formData?.pricingParameters && formData.pricingParameters.map(service => (
                        <div key={service.service}>
                            <p><b>{service.service}</b>:</p>
                            {Object.entries(service.parameters).map(([param, value]) => (
                                <p key={param}>{param}: {value.quantity} x £{value.price.toFixed(2)} = £{(value.quantity * value.price).toFixed(2)} ({value.duration} minutes each)</p>
                            ))}
                        </div>
                    ))}
                    <h3>Extras</h3>
                    {formData?.step2 && Object.entries(formData.step2).map(([key, value]) => (
                        value ? <p key={key}>{key.replace('_', ' ')}</p> : null
                    ))}
                    <h3>Booked Time:</h3>
                    {formData?.step3 && <p>Selected Hours: {formData.step3}</p>}
                    {formData?.step4 && <p>Cleaning Supplies: {formData.step4 === 'yes' ? 'Yes, Please' : 'No, Thanks'}</p>}
                    {frequency && <p>Frequency: {frequency}</p>}
                    {selectedDate && <p>Date: {selectedDate.toLocaleDateString()}</p>}
                    {selectedTime && <p>Starting Time: {selectedTime}</p>}
                    {selectedSlot.isPremium ? <p>Premium Slot</p> : <p>Regular Slot</p>}
                </div>
            </div>
        </>
    );
}
