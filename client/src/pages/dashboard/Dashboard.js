import React from 'react';
import UnderDevelopment from '../../components/ui/others/UnderDevelopment';
import { Button, ButtonOutlined, ButtonCircled, ButtonLight } from '../../components/custom/components';
import styles from './dashboard.scss';

const Dashboard = () => {
    return (
        <div className={styles['container']}>
            <section className={styles['data-container']}>
                <UnderDevelopment />
            </section>
            {/* <Button title="BUTTON"></Button>
            <ButtonOutlined title="BUTTON"></ButtonOutlined>
            <ButtonCircled title="B"></ButtonCircled>
            <ButtonLight title="BUTTON"></ButtonLight> */}
        </div>
    );
};

export default Dashboard;
