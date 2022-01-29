import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie, faUpload, faDownload, faCogs, faDesktop, faBook, faUser, faLink, faUserCog, faUserTag, faUserShield } from '@fortawesome/free-solid-svg-icons';
import styles from './sidenav.scss';

const Sidenav = () => {
    const location = useLocation();
    const SideMenu = () => {
        const menuList = [
            { id: 'dashboard', name: 'Dashboard', url: '/dashboard', icon: faChartPie, subMenu: [], isActive: true },
            { id: 'source', name: 'Data Source', url: '/source', icon: faUpload, subMenu: [], isActive: false },
            { id: 'sink', name: 'Data Sink', url: '/sink', icon: faDownload, subMenu: [], isActive: false },
            { id: 'jobs', name: 'Jobs', url: '/job', icon: faCogs, subMenu: [], isActive: false },
            { id: 'audit', name: 'Audit', url: '/audit', icon: faBook, subMenu: [], isActive: false },
            { id: 'monitoring', name: 'Monitoring', url: '/monitor', icon: faDesktop, subMenu: [], isActive: false },
            { id: 'integration', name: 'Integration', url: '/integration', icon: faLink, subMenu: [], isActive: false },
            {
                id: 'admin',
                name: 'Admin',
                url: '/admin',
                icon: faUserCog,
                subMenu: [
                    { id: 'users', name: 'Users', url: '/admin/user', icon: faUser },
                    { id: 'roles', name: 'Roles', url: '/admin/role', icon: faUserTag },
                    { id: 'permissions', name: 'Permissions', url: '/admin/permission', icon: faUserShield },
                ],
                isActive: false,
            },
        ];
        const links = [];
        for (const menuItem of menuList) {
            if (location.pathname.startsWith(menuItem.url) || (location.pathname === '/' && menuItem.url === '/dashboard')) {
                if (menuItem.subMenu.length > 0) {
                    links.push(
                        <div className={styles['sidenav-list-item-active-submenu-wrapper']} key={menuItem.id}>
                            <div className={styles['sidenav-list-item-mainmenu']}>
                                <div className={`${styles['sidenav-list-item-active']} flex-align-items-center`}>
                                    <FontAwesomeIcon icon={menuItem.icon} className={styles['sidenav-icon-active']} />
                                    <span>{menuItem.name}</span>
                                </div>
                                <div className={styles['sidenav-list-item-active-indicator']}>&nbsp;</div>
                            </div>
                            <div className={styles['sidenav-list-item-submenu']}>
                                <ul>
                                    {menuItem.subMenu.map((menu) => {
                                        console.log(location.pathname, menu.url);
                                        if (location.pathname === menu.url) {
                                            return (
                                                <li key={menu.id} className={styles['sidenav-list-item-submenu-active']}>
                                                    <NavLink className={styles['link']} to={menu.url}>
                                                        <FontAwesomeIcon icon={menu.icon} className={`${styles['sidenav-submenu-icon']} ${styles['sidenav-submenu-icon-active']}`} />
                                                        <span>{menu.name}</span>
                                                    </NavLink>
                                                </li>
                                            );
                                        }
                                        return (
                                            <li key={menu.id}>
                                                <NavLink className={styles['link']} to={menu.url}>
                                                    <FontAwesomeIcon icon={menu.icon} className={styles['sidenav-submenu-icon']} />
                                                    <span>{menu.name}</span>
                                                </NavLink>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    );
                } else {
                    links.push(
                        <NavLink className={styles['link']} to={menuItem.url} key={menuItem.id}>
                            <div className={styles['sidenav-list-item-active-wrapper']}>
                                <div className={`${styles['sidenav-list-item-active']} flex-align-items-center`}>
                                    <FontAwesomeIcon icon={menuItem.icon} className={styles['sidenav-icon-active']} />
                                    <span>{menuItem.name}</span>
                                </div>
                                <div className={styles['sidenav-list-item-active-indicator']}>&nbsp;</div>
                            </div>
                        </NavLink>
                    );
                }
            } else {
                links.push(
                    <NavLink className={styles['link']} to={menuItem.subMenu.length === 0 ? menuItem.url : menuItem.subMenu[0].url} key={menuItem.id}>
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
