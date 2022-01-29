/* eslint-disable no-useless-catch */
/* eslint-disable import/prefer-default-export */
import authInstance from '../instances/auth.instance';

export const signin = async (email, password) => {
    try {
        const response = await authInstance.post('/login', { email: email.trim(), password: password.trim() });
        return response;
    } catch (error) {
        return error;
    }
};

export const singup = async (username, password, confirmPassword) => {
    try {
        const response = await authInstance.post('/signup', {
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            email: username.trim(),
            password: password.trim(),
            confirmPassword: confirmPassword.trim(),
        });
        return response;
    } catch (error) {
        return error;
    }
};
