/* eslint-disable no-useless-catch */
/* eslint-disable import/prefer-default-export */
import commonInstance from '../instances/common.instance';

export const getUsers = async (token, page, limit) => {
    try {
        const response = await commonInstance.get(`/user?page=${page}&limit=${limit}`, { headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' } });
        return response;
    } catch (error) {
        return error;
    }
};

export const getUserById = async (userId) => {
    try {
        const response = await commonInstance.get(`/user/${userId}`);
        return response;
    } catch (error) {
        return error;
    }
};

export const getUserByEmail = async (email) => {
    try {
        const response = await commonInstance.get(`/user/${email}`);
        return response;
    } catch (error) {
        return error;
    }
};

export const createUser = async (data) => {
    try {
        const response = await commonInstance.post('/user', { ...data });
        return response;
    } catch (error) {
        return error;
    }
};

export const deleteUserById = async (userId) => {
    try {
        const response = await commonInstance.delete(`/user/${userId}`);
        return response;
    } catch (error) {
        return error;
    }
};

export const updateUserById = async (userId, data) => {
    try {
        const response = await commonInstance.put(`/user/${userId}`, { ...data });
        return response;
    } catch (error) {
        return error;
    }
};
