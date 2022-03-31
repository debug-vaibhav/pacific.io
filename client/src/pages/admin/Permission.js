import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch, faEllipsisH, faPlusCircle, faFilter } from '@fortawesome/free-solid-svg-icons';
import Breadcrumb from '../../components/ui/breadcrumb/Breadcrumb';
import { InputRounded, Button, ButtonOutlined, Chip, CheckBox } from '../../components/custom/components';
import Pagination from '../../components/ui/pagination/Pagination';
import ToasterContext from '../../contexts/toaster-context';
import styles from './user.scss';

const Admin = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const page = queryParams.get('page');
    const [pageNumber, setPageNumber] = useState(parseInt(page) || 1);
    const [users, setUsers] = useState([]);
    const toasterContext = useContext(ToasterContext);
    useEffect(() => {
        let arr = [];
        for (let i = 0; i < 9; i++) {
            arr.push(Math.ceil(Math.random() * 10000));
        }
        setTimeout(() => {
            setUsers(arr);
        }, 100);
    }, [pageNumber]);
    const tableRows = () => {
        if (users.length === 0) {
            return (
                <div className={styles['loading-container']}>
                    <FontAwesomeIcon icon={faCircleNotch} className={styles['loading-icon']} />
                    <p>Data chunks on the way...</p>
                </div>
            );
        }
        const rows = users.map((e) => {
            return (
                <tr key={e}>
                    <td>
                        <CheckBox />
                    </td>
                    <td>Vaibhav</td>
                    <td>Bachhav</td>
                    <td>vaibhav.bachhav@pacific.io</td>
                    <td>1</td>
                    <td>Yes</td>
                    <td>1</td>
                    <td>12th Jan, 2021</td>
                    <td>1</td>
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
                        <th>FIRSTNAME</th>
                        <th>LASTNAME</th>
                        <th>EMAIL</th>
                        <th>ROLE ID</th>
                        <th>IS ACTIVE</th>
                        <th>UPDATED BY</th>
                        <th>UPDATED DATE</th>
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
                    <InputRounded type="text" placeholder="search users" overriddenStyles={styles['search-input']} />
                    <div className={styles['action-container']}>
                        <Link to="/user/new">
                            <Button title="NEW USER" icon={<FontAwesomeIcon icon={faPlusCircle} className={styles['add-icon']} />} styles={styles['new-btn']} />
                        </Link>
                    </div>
                </div>
                <div className={styles['table-container']}>{tableRows()}</div>
                <div className={styles['pagination-container']}>
                    <Pagination pages={7} pageNumber={pageNumber} setPageNumber={setPageNumber} navigate={navigate} location={location} />
                </div>
            </div>
        </div>
    );
};

export default Admin;
