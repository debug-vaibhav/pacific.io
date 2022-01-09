import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie, faUpload, faDownload, faCogs, faDesktop, faBook, faWrench, faUser, faLink } from '@fortawesome/free-solid-svg-icons';
import styles from './sidenav.scss';

const Sidenav = () => {
    const location = useLocation();
    const SideMenu = () => {
        const menuList = [
            { name: 'Dashboard', url: '/dashboard', icon: faChartPie },
            { name: 'Data Source', url: '/source', icon: faUpload },
            { name: 'Data Sink', url: '/sink', icon: faDownload },
            { name: 'Jobs', url: '/job', icon: faCogs },
            { name: 'Audit', url: '/audit', icon: faBook },
            { name: 'Monitoring', url: '/monitor', icon: faDesktop },
            { name: 'Integration', url: '/integration', icon: faLink },
            { name: 'Admin', url: '/admin', icon: faUser },
        ];
        const links = [];
        for (const menuItem of menuList) {
            if (location.pathname.startsWith(menuItem.url) || (location.pathname === '/' && menuItem.url === '/dashboard')) {
                links.push(
                    <NavLink className={styles['link']} to={menuItem.url} key={menuItem.name}>
                        <div className={styles['sidenav-list-item-active-wrapper']}>
                            <div className={`${styles['sidenav-list-item-active']} flex-align-items-center`}>
                                <FontAwesomeIcon icon={menuItem.icon} className={styles['sidenav-icon-active']} />
                                <span>{menuItem.name}</span>
                            </div>
                            <div className={styles['sidenav-list-item-active-indicator']}>&nbsp;</div>
                        </div>
                    </NavLink>
                );
            } else {
                links.push(
                    <NavLink className={styles['link']} to={menuItem.url} key={menuItem.name}>
                        <div className={`${styles['sidenav-list-item']} flex-align-items-center`}>
                            <FontAwesomeIcon icon={menuItem.icon} className={styles['sidenav-icon']} />
                            <span>{menuItem.name}</span>
                        </div>
                    </NavLink>
                );
            }
        }
        return links;
    };
    return (
        <div className={styles['sidenav-container']}>
            <ul className={styles['sidenav-list']}>
                <SideMenu />
            </ul>
        </div>
    );
};

export default Sidenav;
