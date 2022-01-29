import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { signin } from '../services/apis/auth';
import ToasterContext from './toaster-context';

const AuthContext = React.createContext({
    user: null,
    login: () => {},
    logout: () => {},
});

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const toasterContext = useContext(ToasterContext);
    let from = location.state ? location.state.from.pathname : location.pathname;

    useEffect(() => {
        const userStoredInLocalStorage = JSON.parse(localStorage.getItem('user'));
        if (userStoredInLocalStorage) {
            setUser(userStoredInLocalStorage);
            navigate(from, { replace: true });
        } else {
            navigate('/auth/login', { replace: true });
        }
    }, []);

    const login = async (event, username, password) => {
        event.preventDefault();
        const response = await signin(username, password);
        if (response.status === 201) {
            const loggedInUser = response.data.data;
            setUser(loggedInUser);
            localStorage.setItem('user', JSON.stringify(loggedInUser));
            toasterContext.addToast('success', response.data.message);
            navigate(from, { replace: true });
        } else {
            toasterContext.addToast('danger', response.response.data.errors[0].description);
        }
    };

    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
        navigate('/auth/login', { replace: true });
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
