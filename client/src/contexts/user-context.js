import React from 'react';

const UserContext = React.createContext({
    username: '',
    roles: [],
});

export default UserContext;
