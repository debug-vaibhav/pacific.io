import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch, faEllipsisH, faPlusCircle, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import Breadcrumb from '../../components/ui/breadcrumb/Breadcrumb';
import { InputRounded, Button, ButtonOutlined, CheckBox } from '../../components/custom/components';
import Pagination from '../../components/ui/pagination/Pagination';
import styles from './job.scss';

const Job = () => {
    const history = useNavigate();
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
                <tr key={e}>
                    <td>
                        <CheckBox />
                    </td>
                    <td>MySQL v8.1 Duplex {e}</td>
                    <td>This SQL data connector pulls data from MySQL databse</td>
                    <td>Asia/Kolkata</td>
                    <td>0 0 12 1/1 * ? *</td>
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
                        <th>DESCRIPTION</th>
                        <th>TIMEZONE</th>
                        <th>CRON EXPRESSION</th>
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
                        <ButtonOutlined title="ADHOC JOB" icon={<FontAwesomeIcon icon={faTachometerAlt} className={styles['adhoc-icon']} />} styles={styles['new-btn']} />
                        <Link to="/job/new">
                            <Button title="NEW JOB" icon={<FontAwesomeIcon icon={faPlusCircle} className={styles['add-icon']} />} styles={styles['new-btn']} />
                        </Link>
                        <ButtonOutlined icon={<FontAwesomeIcon icon={faEllipsisH} className={styles['more-icon']} />} styles={styles['extra-btn']} />
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

export default Job;
