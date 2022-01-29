import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch, faEllipsisH, faPlusCircle, faFilter } from '@fortawesome/free-solid-svg-icons';
import Breadcrumb from '../../components/ui/breadcrumb/Breadcrumb';
import { InputRounded, Button, ButtonOutlined, Chip, CheckBox } from '../../components/custom/components';
import Pagination from '../../components/ui/pagination/Pagination';
import ToasterContext from '../../contexts/toaster-context';
import styles from './source.scss';

const Source = (props) => {
    const history = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const page = queryParams.get('page');
    const [pageNumber, setPageNumber] = useState(parseInt(page) || 1);
    const [sources, setSources] = useState([]);
    const toasterContext = useContext(ToasterContext);
    useEffect(() => {
        let arr = [];
        for (let i = 0; i < 9; i++) {
            arr.push(Math.ceil(Math.random() * 10000));
        }
        setTimeout(() => {
            setSources(arr);
        }, 100);
    }, [pageNumber]);
    const tableRows = () => {
        if (sources.length === 0) {
            return (
                <div className={styles['loading-container']}>
                    <FontAwesomeIcon icon={faCircleNotch} className={styles['loading-icon']} />
                    <p>Data chunks on the way...</p>
                </div>
            );
        }
        const rows = sources.map((e) => {
            return (
                <tr key={e}>
                    <td>
                        <CheckBox />
                    </td>
                    <td>MySQL v8.1 Duplex {e}</td>
                    <td>This SQL data connector pulls data from MySQL databse</td>
                    <td>
                        <Chip text="MySQL" />
                        &nbsp;&nbsp;
                        <Chip text="DATABASE" />
                        &nbsp;&nbsp;
                        <Chip text="DATA EXTRACTION PROCESS" />
                    </td>
                    <td>MySQL</td>
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
                        <th>LABELS</th>
                        <th>TYPE</th>
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
                    <InputRounded type="text" placeholder="search data sources" overriddenStyles={styles['search-input']} />
                    <div className={styles['action-container']}>
                        <ButtonOutlined
                            title="FILTER"
                            icon={<FontAwesomeIcon icon={faFilter} className={styles['filter-icon']} />}
                            styles={styles['new-btn']}
                            onClick={() => {
                                toasterContext.addToast('warning', 'Feature not available');
                            }}
                        />
                        <Link to="/source/new">
                            <Button title="NEW DATA SOURCE" icon={<FontAwesomeIcon icon={faPlusCircle} className={styles['add-icon']} />} styles={styles['new-btn']} />
                        </Link>
                        <ButtonOutlined
                            icon={<FontAwesomeIcon icon={faEllipsisH} className={styles['more-icon']} />}
                            styles={styles['extra-btn']}
                            onClick={() => {
                                toasterContext.addToast('warning', 'Feature not available');
                            }}
                        />
                    </div>
                </div>
                <div className={styles['table-container']}>{tableRows()}</div>
                <div className={styles['pagination-container']}>
                    <Pagination pages={7} pageNumber={pageNumber} setPageNumber={setPageNumber} history={history} location={location} />
                </div>
            </div>
        </div>
    );
};

export default Source;
