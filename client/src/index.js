import React, { useContext } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Auth from './pages/auth/Auth';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Main from './components/ui/main/Main';
import Dashboard from './pages/dashboard/Dashboard';
import Source from './pages/source/Source';
import NewSource from './pages/source/NewSource';
import Sink from './pages/sink/Sink';
import Job from './pages/job/Job';
import Audit from './pages/audit/Audit';
import Monitor from './pages/monitor/Monitor';
import Data from './pages/monitor/Data';
import Configuration from './pages/configuration/Configuration';
import User from './pages/admin/User';
import Role from './pages/admin/Role';
import Permission from './pages/admin/Permission';
import Integration from './pages/integration/Integration';
import NewJob from './pages/job/NewJob';
import Error from './components/ui/error/Error';

import { Toaster } from './components/custom/components';

import ToasterContext, { ToasterContextProvider } from './contexts/toaster-context';
import { AuthContextProvider } from './contexts/auth-context';

import './assets/styles/custom.scss';

const App = () => {
    const toasterContext = useContext(ToasterContext);
    return (
        <>
            {toasterContext.toasts.map((toast) => {
                const { id, status, message } = toast;
                return <Toaster key={id} id={id} status={status} message={message} />;
            })}
            <Router>
                <AuthContextProvider>
                    <Routes>
                        <Route path="/auth" element={<Auth />}>
                            <Route path="login" element={<Login />} />
                            <Route path="register" element={<Register />} />
                        </Route>
                        <Route path="/" element={<Main />}>
                            <Route path="" element={<Dashboard />} />
                            <Route path="dashboard" element={<Dashboard />} />
                            <Route path="source" element={<Source />} />
                            <Route path="source/new" element={<NewSource />} />
                            <Route path="sink" element={<Sink />} />
                            <Route path="job" element={<Job />} />
                            <Route path="job/new" element={<NewJob />} />
                            <Route path="audit" element={<Audit />} />
                            <Route path="monitor" element={<Monitor />} />
                            <Route path="monitor/:id" element={<Data />} />
                            <Route path="configuration" element={<Configuration />} />
                            <Route path="admin/user" element={<User />} />
                            <Route path="admin/role" element={<Role />} />
                            <Route path="admin/permission" element={<Permission />} />
                            <Route path="integration" element={<Integration />} />
                        </Route>
                        <Route path="*" element={<Error />} />
                    </Routes>
                </AuthContextProvider>
            </Router>
        </>
    );
};
render(
    <ToasterContextProvider>
        <App />
    </ToasterContextProvider>,
    document.getElementById('app')
);
