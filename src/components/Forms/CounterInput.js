import React from 'react';
import * as styles from './CounterInput.module.css';

const CounterInput = ({ count, onIncrement, onDecrement }) => {
  return (
    <div className={styles.counterInput}>
      <button onClick={onDecrement} className={styles.counterButton}>-</button>
      <span className="counter-value">{count}</span>
      <button onClick={onIncrement} className={styles.counterButton}>+</button>
    </div>
  );
};

export default CounterInput;
