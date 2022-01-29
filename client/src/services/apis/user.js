/* eslint-disable no-useless-catch */
/* eslint-disable import/prefer-default-export */
import commonInstance from '../instances/common.instance';

export const getAllUsers = async () => {
    const response = await commonInstance.get('/user');
    return response.data.data;
};

export const getUserById = async (userId) => {
    const response = await commonInstance.get(`/user/${userId}`);
    return response.data.data;
};

export const getUserByEmail = async (email) => {
    const response = await commonInstance.get(`/user/${email}`);
    return response.data.data;
};

export const createUser = async (data) => {
    const response = await commonInstance.post('/user', { ...data });
    return response.data.data;
};

export const deleteUserById = async (userId) => {
    const response = await commonInstance.delete(`/user/${userId}`);
    return response.data.data;
};

export const updateUserById = async (userId, data) => {
    const response = await commonInstance.put(`/user/${userId}`, { ...data });
    return response.data.data;
};
