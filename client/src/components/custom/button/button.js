import React from 'react';
import styles from '../styles.scss';

const renderContent = (title, icon) => {
    let elements;
    if (title && icon) {
        elements = (
            <>
                {icon}&nbsp;&nbsp;{title}
            </>
        );
    } else if (title && !icon) {
        elements = <>{title}</>;
    } else if (!title && icon) {
        elements = <>{icon}</>;
    }
    return elements;
};

export const Button = (props) => {
    const { icon, title, onClick, name, type, disabled } = props;
    return (
        <button className={`${styles['btn-primary']} ${props.styles}`} onClick={onClick} name={name} type={type} disabled={disabled}>
            {renderContent(title, icon)}
        </button>
    );
};

export const ButtonOutlined = (props) => {
    const { icon, title, onClick, name, type, disabled } = props;
    return (
        <button className={`${styles['btn-outlined']} ${props.styles}`} onClick={onClick} name={name} type={type} disabled={disabled}>
            {renderContent(title, icon)}
        </button>
    );
};

export const ButtonLight = (props) => {
    const { icon, title, onClick, name, type, disabled } = props;
    return (
        <button className={`${styles['btn-light']} ${props.styles}`} onClick={onClick} name={name} type={type} disabled={disabled}>
            {renderContent(title, icon)}
        </button>
    );
};

export const ButtonCircled = (props) => {
    const { icon, title, onClick, name, type, disabled } = props;
    return (
        <button className={`${styles['btn-circled']} ${props.styles}`} onClick={onClick} name={name} type={type} disabled={disabled}>
            {renderContent(title, icon)}
        </button>
    );
};
