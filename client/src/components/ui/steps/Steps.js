import React from 'react';
import Step from './Step';
import styles from './steps.scss';

const Steps = (props) => {
    const { steps, onStepChange } = props;
    return (
        <div className={styles['steps-container']}>
            {steps.map((step) => {
                return <Step key={step.name} {...step} onStepChange={onStepChange} />;
            })}
        </div>
    );
};

export default Steps;
