import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './step.scss';

const Step = (props) => {
    const { name, header, active, onStepChange } = props;
    return (
        <div className={styles['container']}>
            <div className={styles['icon-container']}>
                <hr className={`${styles['icon-left-line']} ${active && styles['icon-left-line-active']}`} />
                <FontAwesomeIcon icon={faExclamationCircle} className={`${styles['step-icon']} ${active && styles['step-icon-active']}`} onClick={() => onStepChange(name)} />
                <hr className={`${styles['icon-right-line']} ${active && styles['icon-right-line-active']}`} />
            </div>
            <h6 className={`${styles['step-name']} ${active && styles['step-name-active']}`}>{name}</h6>
            <p className={`${styles['step-header']} ${active && styles['step-header-active']}`}>{header}</p>
        </div>
    );
};

export default Step;
