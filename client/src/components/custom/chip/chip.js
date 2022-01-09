import React from 'react';
import styles from '../styles.scss';

export const Chip = (props) => {
    const { icon, text, green, red, yellow, orange, overriddenStyles } = props;
    if (!text && icon) {
        return <div className={`${styles['chip-container']} ${overriddenStyles}`}>{icon}</div>;
    } else if (text && !icon) {
        return (
            <div className={`${styles['chip-container-text']} ${overriddenStyles}`}>
                <span>{text}</span>
            </div>
        );
    } else if (text && icon && !green) {
        return (
            <div className={`${styles['chip-container']} ${overriddenStyles}`}>
                <span>{text}</span>
                &nbsp;&nbsp;{icon}
            </div>
        );
    } else {
        return (
            <div className={`${styles['green-chip-container']} ${overriddenStyles}`}>
                <span>{text}</span>
                &nbsp;&nbsp;{icon}
            </div>
        );
    }
};
