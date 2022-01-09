import React from 'react';
import styles from './under-development.scss';

const UnderDevelopment = () => {
    return (
        <>
            <div className={styles['image-container']}>
                <img src="/assets/images/under-development.png" alt="under-development" />
            </div>
            <h1>UNDER DEVELOPMENT</h1>
            <p>The page or resource you are trying to access is under development</p>
        </>
    );
};

export default UnderDevelopment;
