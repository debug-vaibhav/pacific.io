import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './modal.scss';

const Backdrop = (props) => {
    const { onClose } = props;
    return <div className={styles['backdrop']} onClick={onClose} />;
};

const ModalOverlay = (props) => {
    const { show, onClose, children } = props;
    return (
        <div className={`${styles['overlay']} ${show && styles['overlay-active']} ${!show && styles['overlay-inactive']}`} onClick={onClose}>
            {children}
        </div>
    );
};

const modalDOMElement = document.getElementById('modal');

export const Modal = (props) => {
    const { show, onClose, children } = props;
    return (
        <>
            {show && createPortal(<Backdrop onClose={onClose} />, modalDOMElement)}
            {createPortal(<ModalOverlay show={show}>{children}</ModalOverlay>, modalDOMElement)}
        </>
    );
};
