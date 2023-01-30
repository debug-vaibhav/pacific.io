import React, { useRef, useContext } from 'react';
import { Button, ButtonLight } from '../../components/custom/components';
import AuthContext from '../../contexts/auth-context';

import styles from './login.scss';

const Login = (props) => {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const authContext = useContext(AuthContext);

    const authenticate = (event) => {
        authContext.login(event, usernameRef.current.value, passwordRef.current.value);
    };

    return (
        <div className={styles['form-container']}>
            <h1 className={styles['form-header']}>Welcome</h1>
            <p className={styles['form-sub-header']}>Please login to your account</p>
            <br />
            <form onSubmit={authenticate}>
                <div className={styles['form-element']}>
                    <span className={styles['form-element-header']}>Username or Email</span>
                    <input type="email" name="email" className={styles['form-element-input']} ref={usernameRef} />
                </div>
                <br />
                <div className={styles['form-element']}>
                    <span className={styles['form-element-header']}>Password</span>
                    <input type="password" name="password" className={styles['form-element-input']} ref={passwordRef} />
                </div>
                <br />
                <div className={`${styles['link-btn-wrapper']} flex-justify-content-space-between flex-align-items-center`}>
                    <p className={styles['forgot-password-link']}>Forgot Password ?</p>
                    <div className={`${styles['submit-btn-container']} flex-justify-content-space-between flex-align-items-center`}>
                        <Button title="Login" styles={styles['submit-btn']} type="submit" />
                    </div>
                </div>
            </form>
            <ButtonLight title="Login using SSO" styles={styles['sso-btn']} />
            <div className="flex-justify-content-space-between flex-align-items-center">
                <span className={styles['terms-link']}>Terms & Condition | Privacy Policy</span>
            </div>
        </div>
    );
};

export default Login;
