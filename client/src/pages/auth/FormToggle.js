import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './form-toggle.scss';

const FormToggle = () => {
    return (
        <div className={styles['link-container']}>
            <NavLink to="login" className={(data) => (data.isActive ? styles['login-link'] : styles['register-link'])}>
                Login
            </NavLink>
            <NavLink to="register" className={(data) => (data.isActive ? styles['login-link'] : styles['register-link'])}>
                Register
            </NavLink>
        </div>
    );
};

export default FormToggle;
