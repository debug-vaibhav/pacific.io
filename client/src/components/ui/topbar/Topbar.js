import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faBell, faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { ButtonCircled } from '../../custom/components';
import { Dropdown } from '../../../components/custom/components';
import AuthContext from '../../../contexts/auth-context';

import styles from './topbar.scss';

const search = (event) => {};

const Topbar = () => {
    const authContext = useContext(AuthContext);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    return (
        <div className={`${styles['topbar-container']} flex-justify-content-space-between flex-align-items-center`}>
            <div className={`${styles['logo-container']} flex-align-items-center`}>
                <img src="/assets/images/logo.png" alt="Pacific Logo" />
                <span>Pacific</span>
            </div>
            {/* <div className={`${styles['search-container']} flex-align-items-center`}>
                <input type="text" placeholder="Search here..." />
                <ButtonCircled icon={<FontAwesomeIcon icon={faSearch} />} handleClick={search} styles={styles['search-btn']} />
            </div> */}
            <div className={`${styles['profile-notification-container']} flex-justify-content-flex-end flex-align-items-center`}>
                <div className={styles['notification-container']}>
                    <div className={styles['notification-wrapper']} onClick={() => setIsNotificationOpen(true)}>
                        <FontAwesomeIcon icon={faBell} className={styles['notification-icon']} />
                        {!isNotificationOpen && (
                            <svg className={styles['notification-icon-active-indicator']}>
                                <circle cx="4" cy="4" r="4" fill="red" />
                            </svg>
                        )}
                    </div>
                    {isNotificationOpen && (
                        <Dropdown overriddenStyles={styles['notification-dropdown-wrapper']} isVisible={isNotificationOpen} setIsVisible={setIsNotificationOpen}>
                            <h4 className={styles['notification-header']}>Notifications</h4>
                            <div className={styles['notification-list-container']}>
                                <ul className={styles['notification-list']}>
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map((i) => (
                                        <li className={styles['notification-list-item']} key={i}>
                                            <div className={styles['notification-list-item-wrapper']}>
                                                <div className={styles['notification-list-item-icon']}>
                                                    <FontAwesomeIcon size="lg" icon={faCheckCircle} className={styles['notification-alert-icon']} />
                                                </div>
                                                <div className={styles['notification-list-item-msg']}>
                                                    <h5>Completed</h5>
                                                    <small>Data source created successfully</small>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Dropdown>
                    )}
                </div>
                <div className={`${styles['profile-container']} flex-align-items-center`}>
                    <div className={styles['profile-wrapper']} onClick={() => setIsProfileMenuOpen(true)}>
                        <FontAwesomeIcon icon={faUserCircle} className={styles['profile-icon']} />
                        <span>Vaibhav K B</span>
                    </div>
                    {isProfileMenuOpen && (
                        <Dropdown overriddenStyles={styles['profile-menu-dropdown-wrapper']} isVisible={isProfileMenuOpen} setIsVisible={setIsProfileMenuOpen}>
                            <div className={styles['profile-owner-container']}>
                                <div className={styles['avatar-wrapper']}>
                                    <img src="/assets/images/avatar.jpg" alt="avatar" />
                                </div>
                                <div className={styles['avatar-details-wrapper']}>
                                    <span>Vaibhav Kailas Bachhav</span>
                                    <span>vaibhav.bachhav@pacific.io</span>
                                </div>
                            </div>
                            <ul className={styles['profile-menu-list']}>
                                <li className={styles['profile-menu-list-item']}>Profile</li>
                                <li className={styles['profile-menu-list-item']}>Settings</li>
                                <li className={styles['profile-menu-list-item']} onClick={authContext.logout}>
                                    Logout
                                </li>
                            </ul>
                        </Dropdown>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Topbar;
