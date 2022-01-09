import React from 'react';
import { Outlet } from 'react-router-dom';
import Topbar from '../topbar/Topbar';
import Sidenav from '../sidenav/Sidenav';

import styles from './main.scss';

const Main = () => {
    return (
        <div className={styles['container']}>
            <Topbar />
            <div className={styles['sidebar-main-container']}>
                <div className={styles['sidebar-container']}>
                    <Sidenav />
                </div>
                <div className={styles['main-container']}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Main;
