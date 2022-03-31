import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch, faEllipsisH, faFilter } from '@fortawesome/free-solid-svg-icons';
import Breadcrumb from '../../components/ui/breadcrumb/Breadcrumb';
import { InputRounded, Button, ButtonOutlined, CheckBox } from '../../components/custom/components';
import Pagination from '../../components/ui/pagination/Pagination';
import styles from './monitor.scss';

const Monitor = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const page = queryParams.get('page');
    const [pageNumber, setPageNumber] = useState(parseInt(page) || 1);
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        setJobs([]);
        let arr = [];
        for (let i = 0; i < 9; i++) {
            arr.push(Math.ceil(Math.random() * 100));
        }
        setTimeout(() => {
            setJobs(arr);
        }, 500);
    }, [pageNumber]);
    const tableRows = () => {
        if (jobs.length === 0) {
            return (
                <div className={styles['loading-container']}>
                    <FontAwesomeIcon icon={faCircleNotch} className={styles['loading-icon']} />
                    <p>Data chunks on the way...</p>
                </div>
            );
        }
        const rows = jobs.map((e) => {
            return (
                <tr>
                    <td>
                        <CheckBox />
                    </td>
                    <td>
                        <Link to={`/monitor/${e}`} key={e} className={styles['row-link']}>
                            MySQL v8.1 Duplex {e}
                        </Link>
                    </td>
                    <td>MySQL v5.6</td>
                    <td>IST 12th Oct, 2021 07:00PM</td>
                    <td>IST 12th Oct, 2021 07:00PM</td>
                    <td>RUNNING</td>
                    <td>vaibhav.bachhav@pacific.io</td>
                    <td>12th Jan, 2021</td>
                </tr>
            );
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>
                            <CheckBox isInverted={true} />
                        </th>
                        <th>NAME</th>
                        <th>TYPE</th>
                        <th>START DATETIME</th>
                        <th>END DATETIME</th>
                        <th>STATUS</th>
                        <th>CREATED BY</th>
                        <th>CREATED DATE</th>
                    </tr>
                </thead>
                <tbody className="table-body">{rows}</tbody>
            </table>
        );
    };
    return (
        <div className={styles['container']}>
            <Breadcrumb />
            <div className={styles['data-container']}>
                <div className={styles['search-container']}>
                    <InputRounded type="text" placeholder="search jobs" overriddenStyles={styles['search-input']} />
                    <div className={styles['action-container']}>
                        <Button title="FILTER" icon={<FontAwesomeIcon icon={faFilter} className={styles['filter-icon']} />} styles={styles['new-btn']} />
                        <ButtonOutlined icon={<FontAwesomeIcon icon={faEllipsisH} className={styles['more-icon']} />} styles={styles['extra-btn']} />
                    </div>
                </div>
                <div className={styles['table-container']}>{tableRows()}</div>
                <div className={styles['pagination-container']}>
                    <Pagination pages={5} pageNumber={pageNumber} setPageNumber={setPageNumber} navigate={navigate} location={location} />
                </div>
            </div>
        </div>
    );
};

export default Monitor;
