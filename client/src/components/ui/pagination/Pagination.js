import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { ButtonOutlined } from '../../custom/components';
import styles from './pagination.scss';

const Pagination = ({ pages, pageNumber, setPageNumber, navigate, location }) => {
    const [pageBtns, setPageBtns] = useState({
        first: '1',
        second: '2',
        third: '3',
        fourth: 'extraNext',
    });
    const [disablePrevBtn, setDisablePrevBtn] = useState(false);
    const [disableNextBtn, setDisableNextBtn] = useState(false);
    useEffect(() => {
        if (pages === 1) {
            setPageBtns({
                first: '1',
            });
        } else if (pages === 2) {
            setPageBtns({
                first: '1',
                second: '2',
            });
        } else if (pages === 3) {
            setPageBtns({
                first: '1',
                second: '2',
                third: '3',
            });
        }
    }, []);
    useEffect(() => {
        if (pageNumber === 1) {
            setDisablePrevBtn(true);
        } else {
            setDisablePrevBtn(false);
        }
        if (pageNumber === pages) {
            setDisableNextBtn(true);
        } else {
            setDisableNextBtn(false);
        }
        if (pages > 3) {
            if (pageNumber >= pages - 2) {
                setPageBtns({
                    first: 'extraPrev',
                    second: (pages - 2).toString(),
                    third: (pages - 1).toString(),
                    fourth: pages.toString(),
                });
            } else if (pageNumber <= 3) {
                setPageBtns({
                    first: '1',
                    second: '2',
                    third: '3',
                    fourth: 'extraNext',
                });
            } else {
                setPageBtns({
                    first: 'extraPrev',
                    second: (pageNumber - 1).toString(),
                    third: pageNumber.toString(),
                    fourth: 'extraNext',
                });
            }
        }
    }, [pageNumber]);
    const handlePreviousClick = () => {
        if (pageNumber > 1) {
            setPageNumber(pageNumber - 1);
            navigate(`${location.pathname}?page=${pageNumber - 1}`);
        }
    };
    const handleNextClick = () => {
        if (pageNumber < pages) {
            setPageNumber(pageNumber + 1);
            navigate(`${location.pathname}?page=${pageNumber + 1}`);
        }
    };
    const handlePageBtnClick = (pageId) => {
        const id = pageId.split('-')[1];
        if (!isNaN(parseInt(id))) {
            setPageNumber(parseInt(id));
            navigate(`${location.pathname}?page=${parseInt(id)}`);
        }
    };
    const renderPageBtns = () => {
        const pageBtnsArray = [];
        for (const pageBtn in pageBtns) {
            pageBtnsArray.push(
                <ButtonOutlined
                    key={`page-${pageBtns[pageBtn]}`}
                    name={`page-${pageBtns[pageBtn]}`}
                    styles={pageBtns[pageBtn] === pageNumber.toString() ? styles['active-page-btn'] : styles['inactive-page-btn']}
                    title={pageBtns[pageBtn].includes('extra') ? <FontAwesomeIcon icon={faEllipsisH} className={styles['nav-icon']} /> : pageBtns[pageBtn]}
                    onClick={() => handlePageBtnClick(`page-${pageBtns[pageBtn]}`)}
                />
            );
        }
        return pageBtnsArray;
    };
    return (
        <div className={styles['pagination-container']}>
            <ButtonOutlined
                name="previous"
                styles={styles['navigation-page-btn']}
                title={<FontAwesomeIcon icon={faChevronLeft} className={disablePrevBtn ? styles['nav-icon-disabled'] : styles['nav-icon']} onClick={handlePreviousClick} />}
                disabled={disablePrevBtn}
            />
            {renderPageBtns()}
            <ButtonOutlined
                name="next"
                styles={styles['navigation-page-btn']}
                title={<FontAwesomeIcon icon={faChevronRight} className={disableNextBtn ? styles['nav-icon-disabled'] : styles['nav-icon']} onClick={handleNextClick} />}
                disabled={disableNextBtn}
            />
        </div>
    );
};

export default Pagination;
