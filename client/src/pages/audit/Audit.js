import React from 'react';
import UnderDevelopment from '../../components/ui/others/UnderDevelopment';
import styles from './audit.scss';

const Audit = () => {
    return (
        <div className={styles['container']}>
            <section className={styles['data-container']}>
                <UnderDevelopment />
            </section>
        </div>
    );
};

export default Audit;
