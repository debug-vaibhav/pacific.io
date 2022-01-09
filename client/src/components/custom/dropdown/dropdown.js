import React, { useRef, useEffect } from 'react';
import styles from '../styles.scss';

const useOutsideClickAlerter = (ref, isVisible, setIsVisible) => {
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                if (isVisible) {
                    setIsVisible(false);
                }
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);
};

export const Dropdown = (props) => {
    const { overriddenStyles, children, isVisible, setIsVisible } = props;
    const dropdownRef = useRef();
    useOutsideClickAlerter(dropdownRef, isVisible, setIsVisible);
    return (
        <div className={`${styles['dropdown-container']} ${overriddenStyles} dropdown-box`} ref={dropdownRef}>
            {children}
        </div>
    );
};
