/* eslint-disable no-useless-catch */
/* eslint-disable import/prefer-default-export */
import commonInstance from '../instances/common.instance';

export const getSources = async (page, limit) => {
    const response = await commonInstance.get(`/source?page=${page}&limit=${limit}`);
    return response.data.data;
};

export const getSourceById = async (sourceId) => {
    const response = await commonInstance.get(`/source/${sourceId}`);
    return response.data.data;
};

export const createSource = async (data) => {
    const response = await commonInstance.post('/source', { ...data });
    return response.data.data;
};

export const deleteSourceById = async (sourceId) => {
    const response = await commonInstance.delete(`/source/${sourceId}`);
    return response.data.data;
};

export const updateSourceById = async (sourceId, data) => {
    const response = await commonInstance.put(`/source/${sourceId}`, { ...data });
    return response.data.data;
};
