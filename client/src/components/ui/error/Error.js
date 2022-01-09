import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../custom/components';
import styles from './error.scss';

const Error = () => {
    return (
        <section className={styles['container']}>
            <div className={styles['image-container']}>
                <img src="/assets/images/404.png" alt="404" />
            </div>
            <h1>Not Found</h1>
            <p>The resource you are trying to access isn't available or you are not authorized to access it.</p>
            <Link to="/">
                <Button title="GO TO HOME PAGE" styles={styles['home-btn']}></Button>
            </Link>
        </section>
    );
};

export default Error;
