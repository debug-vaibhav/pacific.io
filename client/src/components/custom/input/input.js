import React from 'react';
import styles from '../styles.scss';

export const InputRounded = (props) => {
    const { overriddenStyles, placeholder, value, onChangeHandler, type } = props;
    return <input className={`${styles['input-rounded']} ${overriddenStyles}`} placeholder={placeholder} value={value} onChange={onChangeHandler} type={type} />;
};

export const Input = (props) => {
    const { overriddenStyles, placeholder, value, onChangeHandler, type } = props;
    return <input className={`${styles['input-primary']} ${overriddenStyles}`} placeholder={placeholder} value={value} onChange={onChangeHandler} type={type} />;
};

export const InputLabeled = (props) => {
    const { overriddenStyles, placeholder, value, onChangeHandler, type, label } = props;
    return (
        <div className={`${styles['input-labeled-container']} ${overriddenStyles}`}>
            <summary>{label}</summary>
            <input className={`${styles['input-primary']}`} placeholder={placeholder} value={value} onChange={onChangeHandler} type={type} />
        </div>
    );
};

export const TextareaLabeled = (props) => {
    const { overriddenStyles, placeholder, value, onChangeHandler, type, label, rows } = props;
    return (
        <div className={`${styles['textarea-labeled-container']} ${overriddenStyles}`}>
            <summary>{label}</summary>
            <textarea className={`${styles['textarea-primary']}`} placeholder={placeholder} value={value} onChange={onChangeHandler} rows={rows} />
        </div>
    );
};

export const CheckBox = (props) => {
    const { name, checked, onChangeHandler, label, isInverted } = props;
    return (
        <span>
            <input className={isInverted ? styles['checkbox-inverted'] : styles['checkbox']} name={name} type="checkbox" checked={checked} onChange={onChangeHandler} />
            {label}
        </span>
    );
};
