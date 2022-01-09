import React, { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles.scss';

export const Option = (props) => {
    const { id, name, value, selectedValue, text, onChange, isOptionsVisible, setIsOptionsVisible } = props;
    const handleClick = (event, value) => {
        event.stopPropagation();
        onChange(value);
        setIsOptionsVisible(!isOptionsVisible);
    };
    return (
        <div
            className={selectedValue === value ? styles['select-option-selected'] : styles['select-option']}
            value={value}
            onClick={(event) => {
                handleClick(event, event.target.getAttribute('value'));
            }}
        >
            <input
                type="radio"
                name={name}
                id={id}
                value={value}
                onClick={(event) => {
                    handleClick(event, event.target.value);
                }}
            />
            <label
                htmlFor={id}
                value={value}
                onClick={(event) => {
                    handleClick(event, event.target.getAttribute('value'));
                }}
            >
                {text}
            </label>
        </div>
    );
};

export const Select = (props) => {
    const { name, id, label, overriddenStyles, options, value, onChange } = props;
    const getTextFromValue = useCallback(
        (optionValue) => {
            let text = options[0].text;
            for (const option of options) {
                if (option.value === optionValue) {
                    text = option.text;
                    break;
                }
            }
            return text;
        },
        [options]
    );
    const initialOption = getTextFromValue(value);
    const [selected, setSelected] = useState(initialOption);
    const [isOptionsVisible, setIsOptionsVisible] = useState(false);
    useEffect(() => {
        setSelected(getTextFromValue(value));
    }, [value, options]);
    return (
        <div className={`${styles['select-container']} ${overriddenStyles}`} id={id}>
            <summary>{label}</summary>
            <div className={`${styles['selected-option-container']} ${isOptionsVisible && styles['select-menu-active']}`} onClick={() => setIsOptionsVisible(!isOptionsVisible)}>
                <div className={styles['selected-value']}>
                    <span>{selected}</span>
                </div>
                <div className={styles['icon-container']}>
                    <FontAwesomeIcon icon={faChevronDown} className={styles['dropdown-icon']} />
                </div>
            </div>
            {isOptionsVisible && (
                <div className={styles['options-container']}>
                    {options.map((option) => (
                        <Option
                            key={option.key}
                            id={option.key}
                            value={option.value}
                            text={option.text}
                            name={name}
                            selectedValue={value}
                            onChange={onChange}
                            isOptionsVisible={isOptionsVisible}
                            setIsOptionsVisible={setIsOptionsVisible}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};
