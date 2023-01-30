import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './breadcrumb.scss';

const Breadcrumb = () => {
    const location = useLocation();
    let path = 'Source';
    let subPath = 'View Data Source';
    let subPathOne;
    let pathname = location.pathname.toLowerCase();
    switch (true) {
        case pathname === '/source':
            path = 'Sources';
            subPath = 'View Data Sources';
            break;
        case pathname === '/source/new':
            path = 'Sources';
            subPath = 'Add Data Source';
            break;
        case pathname === '/sink':
            path = 'Sinks';
            subPath = 'View Data Sinks';
            break;
        case pathname === '/job':
            path = 'Jobs';
            subPath = 'View Jobs';
            break;
        case pathname === '/job/new':
            path = 'Jobs';
            subPath = 'Add Job';
            break;
        case pathname.startsWith('/monitor/'):
            path = 'Monitoring';
            subPath = 'View Job';
            subPathOne = pathname.split('/')[2];
            break;
        case pathname === '/monitor':
            path = 'Monitoring';
            subPath = 'View Jobs';
            break;
        case pathname === '/admin/user':
            path = 'Users';
            subPath = 'View users';
            break;
        case pathname === '/admin/user/new':
            path = 'Users';
            subPath = 'Add User';
            break;
        case pathname === '/admin/role':
            path = 'Roles';
            subPath = 'View roles';
            break;
        case pathname === '/admin/role/new':
            path = 'Roles';
            subPath = 'Add role';
            break;
        case pathname === '/admin/permission':
            path = 'Permissions';
            subPath = 'View permissions';
            break;
        case pathname === '/admin/permission/new':
            path = 'Permissions';
            subPath = 'Add Permission';
            break;
        default:
            path = 'Sources';
            subPath = 'View Data Sources';
            break;
    }
    return (
        <div className={styles['container']}>
            <span className={styles['breadcrumb']}>
                <span className={styles['path']}>{path}</span>&nbsp;&nbsp;&rsaquo;&nbsp;&nbsp;<span className={styles['subpath']}>{subPath}</span>
                {subPathOne && (
                    <>
                        &nbsp;&nbsp;&rsaquo;&nbsp;&nbsp;
                        <span className={styles['subpath']}>{subPathOne}</span>
                    </>
                )}
            </span>
        </div>
    );
};

export default Breadcrumb;
