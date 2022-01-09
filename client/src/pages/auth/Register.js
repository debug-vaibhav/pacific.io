import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/custom/components';

import ToasterContext from '../../contexts/toaster-context';

import styles from './register.scss';

const Register = () => {
    const navigate = useNavigate();
    const toasterContext = useContext(ToasterContext);

    return (
        <div className={styles['form-container']}>
            <h1 className={styles['form-header']}>Welcome</h1>
            <p className={styles['form-sub-header']}>Please enter following details to create account</p>
            <br />
            <div className={styles['form-element']}>
                <span className={styles['form-element-header']}>Username or Email</span>
                <input type="email" name="email" className={styles['form-element-input']} />
            </div>
            <br />
            <div className={styles['form-element']}>
                <span className={styles['form-element-header']}>Password</span>
                <input type="password" name="password" className={styles['form-element-input']} />
            </div>
            <br />
            <div className={styles['form-element']}>
                <span className={styles['form-element-header']}>Confirm Password</span>
                <input type="password" name="confirm-password" className={styles['form-element-input']} />
            </div>
            <br />
            <div className={`${styles['submit-btn-container']} flex-justify-content-space-between flex-align-items-center`}>
                <Button
                    title="Create Account"
                    styles={styles['submit-btn']}
                    onClick={() => {
                        toasterContext.addToast('warning', 'Please login using the single sign on');
                        navigate('/auth/login');
                    }}
                />
            </div>
            <div className="flex-justify-content-space-between flex-align-items-center">
                <span className={styles['terms-link']}>Terms & Condition | Privacy Policy</span>
            </div>
        </div>
    );
};

export default Register;
