/* eslint-disable no-useless-catch */
/* eslint-disable import/prefer-default-export */
import authInstance from '../endpoints/auth.instance';

export const login = async (username, password) => {
    const response = await authInstance.post('/auth/login', { username: username.trim(), password: password.trim() });
    return response.data.data;
};
