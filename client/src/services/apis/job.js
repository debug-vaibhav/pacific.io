/* eslint-disable no-useless-catch */
/* eslint-disable import/prefer-default-export */
import commonInstance from '../instances/common.instance';

export const getJobs = async (page, limit) => {
    const response = await commonInstance.get(`/job?page=${page}&limit=${limit}`);
    return response.data.data;
};

export const getJobById = async (jobId) => {
    const response = await commonInstance.get(`/job/${jobId}`);
    return response.data.data;
};

export const createJob = async (data) => {
    const response = await commonInstance.post('/job', { ...data });
    return response.data.data;
};

export const deleteJobById = async (jobId) => {
    const response = await commonInstance.delete(`/job/${jobId}`);
    return response.data.data;
};

export const updateJobById = async (jobId, data) => {
    const response = await commonInstance.put(`/job/${jobId}`, { ...data });
    return response.data.data;
};
