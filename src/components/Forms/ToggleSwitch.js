import React, { useState, useEffect } from 'react';
import * as styles from './ToggleSwitch.module.css';

const ToggleSwitch = ({ initialValue = false, onToggle }) => {
  const [isOn, setIsOn] = useState(initialValue);

  const toggleSwitch = () => {
    const newValue = !isOn;
    setIsOn(newValue);
    if (onToggle) {
      onToggle(newValue);
    }
  };

  useEffect(() => {
    setIsOn(initialValue);
  }, [initialValue]);

  return (
    <div className={`${styles.toggleSwitch} ${isOn ? styles.toggleSwitchOn : ''}`} onClick={toggleSwitch}>
      <div className={styles.toggleThumb}></div>
      
    </div>
  );
};

export default ToggleSwitch;
