import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import * as styles from './Scheduler.module.css';
import { getFrequencies, getBookingSpots, estimateCost } from '../../utils/launch27-client';
import { getSummary } from './utils';

export default function Step5({ formData, onStepDataChange }) {
    const parseDate = (date) => (date ? new Date(date) : new Date());

    const [frequencies, setFrequencies] = useState([]);
    const [frequency, setFrequency] = useState(formData?.step5?.frequency || '');
    const [selectedDate, setSelectedDate] = useState(parseDate(formData?.step5?.selectedDate));
    const [selectedTime, setSelectedTime] = useState(formData?.step5?.selectedTime || '');
    const [spots, setSpots] = useState([]);
    const [frequencyId, setFrequencyId] = useState(formData?.step5?.frequencyId || null);
    const [estimateTotal, setEstimateTotal] = useState(0);

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

        // Add or remove premium booking slot extra if selected
        if (selectedSlot.isPremium) {
            const selectedService = JSON.parse(localStorage.getItem('selectedService'));
            const premiumExtra = selectedService?.extras.find((extra) => extra.name === 'Premium Booking Slot');

            if (premiumExtra) {
                updatedFormData.counterStates = updatedFormData.counterStates || [];
                const existingPremium = updatedFormData.counterStates.find((cs) => cs.service === 'Premium Booking Slot');

                if (!existingPremium) {
                    updatedFormData.counterStates.push({
                        service: 'Premium Booking Slot',
                        parameters: {
                            'Premium Booking Slot': {
                                quantity: 1,
                                id: premiumExtra.id,
                                price: premiumExtra.price,
                                duration: 0, // no additional time for premium slot
                            },
                        },
                    });
                }
            }
        } else {
            updatedFormData.counterStates = updatedFormData.counterStates.filter((cs) => cs.service !== 'Premium Booking Slot');
        }

        localStorage.setItem('bookingFormData', JSON.stringify(updatedFormData));
        onStepDataChange(updatedFormData);

        // Call function to update cost estimate
        updateEstimate(updatedFormData);
    }, [frequency, frequencyId, selectedDate, selectedTime, selectedSlot]);

    useEffect(() => {
        getFrequencies()
            .then((response) => setFrequencies(response.data))
            .catch((error) => console.error('Error fetching frequencies:', error));
    }, []);

    useEffect(() => {
        if (selectedDate) {
            fetchAvailableSpots(selectedDate, 1);
        }
    }, [selectedDate]);

    const fetchAvailableSpots = (date, days) => {
        const formattedDate = date.toLocaleDateString('en-GB', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        }).split('/').reverse().join('-');
        
        getBookingSpots(formattedDate, days, 'new')
            .then((response) => {
                const availableSpots = response.data;
                if (availableSpots[0].spots) {
                    console.log("we have spots!");
                    setSpots(availableSpots);
                } else {
                    console.log("we do not have spots!");
                    setSpots([]);
                }
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

    const updateEstimate = (updatedFormData) => {
        const selectedService = JSON.parse(localStorage.getItem('selectedService'));

        if (selectedService && selectedDate) {
            const formattedDate = selectedDate.toISOString().split('T')[0] + "T08:00:00"; // Use selected date
           
            // Prepare extras, including cleaning supplies if selected
            const extras = updatedFormData.counterStates.flatMap((service) =>
                Object.entries(service.parameters)
                    .filter(([_, value]) => value.quantity > 0)
                    .map(([_, value]) => ({
                        id: value.id,
                        quantity: value.quantity
                    }))
            );

            // Add cleaning supplies if selected
            if (updatedFormData.step4 && updatedFormData.step4 !== 'no') {
                extras.push({
                    id: updatedFormData.step4.id,
                    quantity: 1
                });
            }

            const costPayload = {
                service_date: formattedDate,
                frequency_id: frequencyId || 1, // Adjust as needed
                services: [{
                    id: selectedService.id,
                    pricing_parameters: Object.entries(updatedFormData.pricingParameters).map(([name, param]) => ({
                        id: param.id,
                        quantity: param.quantity,
                    })),
                    extras: extras
                }]
            };

            estimateCost(costPayload)
                .then((data) => {
                    setEstimateTotal(data.data.total);
                })
                .catch((error) => console.error('Error estimating cost:', error));
        }
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
                    <h3>Order Summary</h3>
                    <b>Schedule</b>
                    <table className="table table-hover">
                        <tbody>
                            <tr>
                                <td>Recurring</td>
                                <td>{frequency}</td>
                            </tr>
                            <tr>
                                <td>Start Date</td>
                                <td>{selectedDate ? selectedDate.toLocaleDateString() : '-'}</td>
                            </tr>
                            <tr>
                                <td>Preferred Time</td>
                                <td>{selectedTime}</td>
                            </tr>
                        </tbody>
                    </table>

                    <b>Order Details</b>
                    <table className="table table-hover">
                        <tbody>
                            {getSummary(formData.pricingParameters)}

                            {/* Include the cleaning supplies option in the Order Details */}
                            {formData?.step4 && (
                                <tr>
                                    <td>Cleaning Supplies <br /> <p style={{ fontSize: "small" }}>Eco-friendly, sustainable products</p></td>
                                    <td>£{formData?.step4.price.toFixed(2)}</td>
                                </tr>
                            )}

                            {/* Include extras from Step2 */}
                            {formData?.counterStates.map(service => (
                                <React.Fragment key={service.service}>
                                    {Object.entries(service.parameters).map(([param, value]) => (
                                        value.quantity > 0 && (
                                            <tr key={param}>
                                                <td>{value.quantity} {param} <br /> <p style={{ fontSize: "small" }}>({value.duration} minutes each)</p></td>
                                                <td>£{(value.quantity * value.price).toFixed(2)}</td>
                                            </tr>
                                        )
                                    ))}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                    <b>Sub Total: £{estimateTotal.toFixed(2)}</b>
                </div>
            </div>
        </>
    );
}
