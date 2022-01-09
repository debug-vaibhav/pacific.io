import React from 'react';
import UnderDevelopment from '../../components/ui/others/UnderDevelopment';
import styles from './integration.scss';

const Integration = () => {
    return (
        <div className={styles['container']}>
            <section className={styles['data-container']}>
                <UnderDevelopment />
            </section>
        </div>
    );
};

export default Integration;
