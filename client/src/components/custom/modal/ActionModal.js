import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { Modal } from './Modal';
import { Button, ButtonOutlined } from '../../../components/custom/components';
import styles from './actionModal.scss';

export const ActionModal = (props) => {
    return (
        <Modal show={true}>
            <div className={styles['modal-container']}>
                <div className={styles['msg-dialogue-container']}>
                    <FontAwesomeIcon icon={faExclamationTriangle} className={styles['warning-icon']} />
                    <span>Please confirm the deletion ?</span>
                </div>
                <div className={styles['modal-action-container']}>
                    <ButtonOutlined title="CANCEL" styles={styles['modal-cancel-btn']} />
                    <Button title="CONFIRM" styles={styles['modal-confirm-btn']} />
                </div>
            </div>
        </Modal>
    );
};
