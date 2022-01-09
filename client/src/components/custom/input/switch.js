import React, { useState } from 'react';
import styles from '../styles.scss';

export const Switch = (props) => {
    const { overriddenStyles } = props;
    const [isChecked, setIsChecked] = useState(false);
    return (
        <span className={`${styles['switch-container']} ${overriddenStyles}`} onClick={(event) => setIsChecked(!isChecked)}>
            <input type="checkbox" checked={isChecked} onChange={(event) => setIsChecked(!isChecked)} />
            <span className={styles['choice-container']}>
                <span className={styles['choice-primary']}>HOST:PORT</span>
                <span className={styles['choice-secondary']}>DB-URL</span>
            </span>
        </span>
    );
};
