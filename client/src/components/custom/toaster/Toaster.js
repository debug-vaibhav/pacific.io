import React, { useContext } from 'react';
import { createPortal } from 'react-dom';
import ToasterContext from '../../../contexts/toaster-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationCircle, faTimesCircle, faBan } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle as farTimesCircle } from '@fortawesome/free-regular-svg-icons';
import styles from './toaster.scss';

export const Toaster = (props) => {
    const { id, status, message } = props;
    const toasterContext = useContext(ToasterContext);

    let content;
    switch (status) {
        case 'success':
            content = (
                <>
                    <div className={styles['icon-container']}>
                        <FontAwesomeIcon icon={faCheckCircle} className={styles['success-status-icon']} />
                    </div>
                    <div className={styles['msg-container']}>
                        <span className={styles['success-msg-header']}>{`${status[0].toUpperCase()}${status.slice(1)}`} !</span>
                        <span className={styles['msg-description']}>{message}</span>
                    </div>
                </>
            );
            break;
        case 'warning':
            content = (
                <>
                    <div className={styles['icon-container']}>
                        <FontAwesomeIcon icon={faBan} className={styles['warning-status-icon']} />
                    </div>
                    <div className={styles['msg-container']}>
                        <span className={styles['warning-msg-header']}>{`${status[0].toUpperCase()}${status.slice(1)}`} !</span>
                        <span className={styles['msg-description']}>{message}</span>
                    </div>
                </>
            );
            break;
        case 'danger':
            content = (
                <>
                    <div className={styles['icon-container']}>
                        <FontAwesomeIcon icon={faTimesCircle} className={styles['danger-status-icon']} />
                    </div>
                    <div className={styles['msg-container']}>
                        <span className={styles['danger-msg-header']}>{`${status[0].toUpperCase()}${status.slice(1)}`} !</span>
                        <span className={styles['msg-description']}>{message}</span>
                    </div>
                </>
            );
            break;
        default:
            content = (
                <>
                    <div className={styles['icon-container']}>
                        <FontAwesomeIcon icon={faExclamationCircle} className={styles['info-status-icon']} />
                    </div>
                    <div className={styles['msg-container']}>
                        <span className={styles['info-msg-header']}>{`${status[0].toUpperCase()}${status.slice(1)}`} !</span>
                        <span className={styles['msg-description']}>{message}</span>
                    </div>
                </>
            );
            break;
    }

    return createPortal(
        <div className={`${styles['container']}`}>
            {content}
            <div className={styles['action-container']}>
                <FontAwesomeIcon icon={farTimesCircle} className={styles['close-icon']} onClick={() => toasterContext.removeToast(id)} />
            </div>
        </div>,
        document.getElementById('toaster')
    );
};
