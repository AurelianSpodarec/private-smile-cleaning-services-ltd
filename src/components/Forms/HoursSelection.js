import React, { useState } from 'react';
import * as styles from './HoursSelection.module.css';

const hours = [3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8];

const HoursSelection = ({ onSelect, disabledOptions = [], recommendedHour }) => {
  const [selectedHour, setSelectedHour] = useState(null);

  const handleHourClick = (hour) => {
    if (!disabledOptions.includes(hour)) {
      setSelectedHour(hour);
      if (onSelect) {
        onSelect(hour);
      }
    }
  };

  return (
    <div className={styles.hoursContainer}>
      
      <div className={styles.hoursSelectionContainer}>
        {hours.map((hour) => (
          <div
            key={hour}
            className={`${styles.hourButton} ${hour === selectedHour ? styles.selected : ''} ${hour === recommendedHour ? styles.recommended : ''}`}
            onClick={() => handleHourClick(hour)}
            style={{ pointerEvents: disabledOptions.includes(hour) ? 'none' : 'auto', opacity: disabledOptions.includes(hour) ? 0.5 : 1 }}
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
