import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import Breadcrumb from '../../components/ui/breadcrumb/Breadcrumb';
import { Input, Button, ButtonOutlined, Select, InputLabeled } from '../../components/custom/components';
import styles from './newUser.scss';

const roles = [
    {
        key: 1,
        text: 'Software Engineer',
        value: 'softwareEngineer',
    },
    {
        key: 2,
        text: 'QA Engineer',
        value: 'qaEngineer',
    },
    {
        key: 3,
        text: 'Manager',
        value: 'manager',
    },
];

const NewUser = (props) => {
    const [role, setRole] = useState('softwareEngineer');
    const onRoleChange = (value) => {
        setRole(value);
    };
    return (
        <div className={styles['container']}>
            <Breadcrumb />
            <div className={styles['data-container']}>
                <div className={styles['header-container']}>
                    <h3>Add New User</h3>
                    <p>Select appropriate choices to create new user</p>
                </div>
                <hr />
                <div className={styles['selection-container']}>
                    <div className={styles['input-container']}>
                        <div className={styles['name-container']}>
                            <div className={styles['firstname-lastname-container']}>
                                <InputLabeled label="firstname" overriddenStyles={styles['name-fields']} />
                                <InputLabeled label="lastname" overriddenStyles={styles['name-fields']} />
                            </div>
                        </div>
                        <Select name="role" id="role" label="role" overriddenStyles={styles['role-selector']} options={roles} value={role} onChange={onRoleChange} />
                        <div className={styles['email-container']}>
                            <InputLabeled label="email" overriddenStyles={styles['email-fields']} type="email" />
                        </div>
                    </div>
                    <div className={styles['action-container']}>
                        <div className={styles['create-reset-container']}>
                            <Button name="create-btn" title="create" styles={styles['create-btn']} />
                            <ButtonOutlined name="reset-btn" title="reset" styles={styles['reset-btn']} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewUser;
