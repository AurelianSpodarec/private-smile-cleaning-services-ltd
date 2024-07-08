import React, { useState, useEffect, useCallback } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import * as styles from './BookingForm.module.css';
import { navigate } from 'gatsby';

const steps = [Step1, Step2, Step3, Step4, Step5, Step6];

export default function BookingForm({ onFinish }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem('bookingFormData');
    return savedData ? JSON.parse(savedData) : {};
  });

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate('/confirm-and-pay');
    }
  };

  const handleUpdateData = useCallback((stepData) => {
    setFormData(prevData => {
      const updatedData = { ...prevData, ...stepData };
      localStorage.setItem('bookingFormData', JSON.stringify(updatedData));
      return updatedData;
    });
  }, []);

  const StepComponent = steps[currentStep];

  return (
    <>
      <div className='container pt-120 pb-120'>
        <div className={styles.bookingForm}>
          <StepComponent formData={formData || {}} onStepDataChange={handleUpdateData} />
          <div className="row">
            <div className="col">
              <div className="text-end mt-3">
                <button className="btn btn-primary" onClick={handleNextStep}>
                  {currentStep < steps.length - 1 ? 'Continue' : 'Finish'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
