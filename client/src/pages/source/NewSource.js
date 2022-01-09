import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import Breadcrumb from '../../components/ui/breadcrumb/Breadcrumb';
import { Input, Button, ButtonOutlined, Select, InputLabeled } from '../../components/custom/components';
import styles from './newSource.scss';

const options = [
    {
        key: 1,
        text: 'Microsoft SQL Server',
        value: 'microsoftSqlServer',
    },
    {
        key: 2,
        text: 'MySQL',
        value: 'mysql',
    },
    {
        key: 3,
        text: 'MongoDB',
        value: 'mongoDb',
    },
    {
        key: 4,
        text: 'REST API',
        value: 'restApi',
    },
    {
        key: 5,
        text: 'FTP/SFTP',
        value: 'ftpSftp',
    },
];

const authOptions = [
    {
        key: 1,
        text: 'Basic Authentication',
        value: 'sqlServerAuthentication',
    },
    {
        key: 2,
        text: 'Access Token',
        value: 'accessToken',
    },
    {
        key: 3,
        text: 'API Key',
        value: 'apiKey',
    },
];

const NewSource = (props) => {
    const [dataSource, setDataSource] = useState('mysql');
    const [auth, setAuth] = useState('sqlServerAuthentication');
    const [show, setShow] = useState(false);
    const onDatasourceChange = (value) => {
        setDataSource(value);
    };
    const onAuthChange = (value) => {
        setAuth(value);
    };
    return (
        <div className={styles['container']}>
            <Breadcrumb />
            <div className={styles['data-container']}>
                <div className={styles['header-container']}>
                    <h3>Add New Data Source</h3>
                    <p>Select appropriate choices to create new data source or connector</p>
                </div>
                <hr />
                <div className={styles['selection-container']}>
                    <Select
                        name="dataSourceType"
                        id="dataSourceType"
                        label="Data Source Type"
                        overriddenStyles={styles['data-source-type-selector']}
                        options={options}
                        value={dataSource}
                        onChange={onDatasourceChange}
                    />
                    <div className={styles['connection-container']}>
                        <div className={styles['host-port-container']}>
                            <InputLabeled label="host" overriddenStyles={styles['host-port-fields']} />
                            <InputLabeled label="port" overriddenStyles={styles['host-port-fields']} />
                            <InputLabeled label="instance" overriddenStyles={styles['host-port-fields']} />
                            <InputLabeled label="database" overriddenStyles={styles['host-port-fields']} />
                        </div>
                    </div>
                    <Select name="authType" id="authType" label="Authentication Type" overriddenStyles={styles['auth-type-selector']} options={authOptions} value={auth} onChange={onAuthChange} />
                    <div className={styles['auth-container']}>
                        <div className={styles['username-password-container']}>
                            <InputLabeled label="username" overriddenStyles={styles['username-password-fields']} />
                            <InputLabeled label="password" overriddenStyles={styles['username-password-fields']} />
                        </div>
                    </div>
                    <div className={styles['action-container']}>
                        <div className={styles['create-reset-container']}>
                            <Button name="create-btn" title="create" styles={styles['create-btn']} />
                            <ButtonOutlined name="reset-btn" title="reset" styles={styles['reset-btn']} />
                        </div>
                        <div className={styles['test-connection-container']}>
                            <Button name="test-connection-btn" title="test connection" styles={styles['action-btns']} onClick={() => setShow(true)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewSource;
