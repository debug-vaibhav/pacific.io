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
    /**
     * If user is not logged in and he/she came to visit from link like http://localhost:8081/admin/user
     * we save that previous location into location.state and then we would ask them to login first
     * once they login, we will send them back to page which they tried to visit i.e. http://localhost:8081/admin/user
     *
     * If user's token is saved into localStorage and he refreshes the page they will land up to same page
     */
    let from =
        location.state && location.state.from
            ? location.state.from.pathname + location.state.from.search + location.state.from.hash
            : location.pathname.startsWith('/auth')
            ? '/'
            : location.pathname + location.search + location.hash || '/';

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUser(storedUser);
            navigate(from, { replace: true });
        } else {
            navigate('/auth/login', { replace: true, state: { from: location } });
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
            navigate(from.startsWith('/auth') ? '/' : from, { replace: true });
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
