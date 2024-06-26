import React, { useState } from 'react';
import * as styles from './HoursSelection.module.css';

const hours = [3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8];
const recommendedHour = 4; // Example recommended hour

const HoursSelection = ({ onSelect }) => {
  const [selectedHour, setSelectedHour] = useState(null);

  const handleHourClick = (hour) => {
    setSelectedHour(hour);
    if (onSelect) {
      onSelect(hour);
    }
  };

  return (
    <div className={styles.hoursContainer}>
      <div className={styles.hoursTitle}>Estimate number of hours needed for the cleaning</div>
      <div className={styles.hoursSelectionContainer}>
        {hours.map((hour) => (
          <div
            key={hour}
            className={`${styles.hourButton} ${hour === selectedHour ? styles.selected : ''} ${hour === recommendedHour ? styles.recommended : ''}`}
            onClick={() => handleHourClick(hour)}
          >
            {hour}
          </div>
        ))}
      </div>
      <div>*Recommended hours based on chosen rooms</div>
    </div>
  );
};

export default HoursSelection;
