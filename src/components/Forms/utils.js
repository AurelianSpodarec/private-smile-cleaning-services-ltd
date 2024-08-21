import React from 'react';

export const toHours = (quantity, minutes) => {
  const totalMinutes = quantity * minutes;
  const hours = (totalMinutes / 60).toFixed(1);
  return parseFloat(hours);
}

export const getSummary = (servicePricingParameters) => {
  let totalHours = 0;
  let totalPrice = 0;
  let details = [];

  Object.entries(servicePricingParameters).forEach(([param, value]) => {
    if (value.quantity > 0) {
      const hoursForThisService = toHours(value.quantity, value.duration);
      totalHours += hoursForThisService;
      totalPrice += value.quantity * value.price;
      details.push(`${value.quantity} ${param}`);
    }
  });

  return (
    <tr>
      <td>{totalHours.toFixed(1)} Hours Cleaning <br/> <p style={{fontSize: "small"}}>({details.join(', ')})</p> </td>
      <td>£{totalPrice.toFixed(2)}</td>
    </tr>
  );
};

export default {
  getSummary,
  toHours
};