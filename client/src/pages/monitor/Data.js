import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch, faFileDownload, faFilter, faSync } from '@fortawesome/free-solid-svg-icons';
import Breadcrumb from '../../components/ui/breadcrumb/Breadcrumb';
import { InputRounded, Button, ButtonOutlined, Chip } from '../../components/custom/components';
import Pagination from '../../components/ui/pagination/Pagination';
import styles from './data.scss';

const Data = () => {
    const history = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const page = queryParams.get('page');
    const [pageNumber, setPageNumber] = useState(parseInt(page) || 1);
    const [rows, setRows] = useState([]);
    useEffect(() => {
        setRows([]);
        let arr = [];
        for (let i = 0; i < 9; i++) {
            arr.push(Math.ceil(Math.random() * 100));
        }
        setTimeout(() => {
            setRows(arr);
        }, 500);
    }, [pageNumber]);
    const tableRows = () => {
        if (rows.length === 0) {
            return (
                <div className={styles['loading-container']}>
                    <FontAwesomeIcon icon={faCircleNotch} className={styles['loading-icon']} />
                    <p>Data chunks on the way...</p>
                </div>
            );
        }
        const dataRows = rows.map((e) => {
            return (
                <tr key={e}>
                    <td>CUST-86453</td>
                    <td>Tailspin Toys (Head)</td>
                    <td>acsd12-wqee123</td>
                    <td>CATEGORY1234</td>
                    <td>BUYID-784</td>
                    <td>2</td>
                    <td>vaibhav.bachhav@pacific.io</td>
                    <td>12th Jan, 2021</td>
                </tr>
            );
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>CUSTOMERID</th>
                        <th>CUSTOMERNAME</th>
                        <th>BILLTOCUSTOMERID</th>
                        <th>CUSTOMERCATEGORYID</th>
                        <th>BUYINGGROUPID</th>
                        <th>CREDITLIMIT</th>
                        <th>CREATED BY</th>
                        <th>CREATED DATE</th>
                    </tr>
                </thead>
                <tbody className="table-body">{dataRows}</tbody>
            </table>
        );
    };
    return (
        <div className={styles['container']}>
            <Breadcrumb />
            <div className={styles['data-container']}>
                <div className={styles['search-container']}>
                    <Chip text="RUNNING" icon={<FontAwesomeIcon icon={faSync} />} green />
                    <div className={styles['action-container']}>
                        <ButtonOutlined icon={<FontAwesomeIcon icon={faFilter} className={styles['filter-icon']} />} styles={styles['filter-btn']} />
                        <Button title="EXPORT" icon={<FontAwesomeIcon icon={faFileDownload} className={styles['export-icon']} />} styles={styles['export-btn']} />
                    </div>
                </div>
                <div className={styles['table-container']}>{tableRows()}</div>
                <div className={styles['pagination-container']}>
                    <Pagination pages={5} pageNumber={pageNumber} setPageNumber={setPageNumber} history={history} location={location} />
                </div>
            </div>
        </div>
    );
};

export default Data;
