import React from 'react';
import { Outlet } from 'react-router-dom';
import FormToggle from './FormToggle';

import styles from './auth.scss';

const Auth = () => {
    return (
        <div className={styles['auth-container']}>
            <div className={styles['cover-container']}>
                <img src="/assets/images/cover.png" alt="Cover Image" />
            </div>
            <div className={styles['form-container']}>
                <FormToggle />
                <Outlet />
            </div>
        </div>
    );
};

export default Auth;
