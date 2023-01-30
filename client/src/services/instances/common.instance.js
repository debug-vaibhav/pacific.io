import axios from 'axios';

const commonInstance = axios.create({
    baseURL: `http://${process.env.API_SERVER_URL}/api/v1`,
    timeout: 5000,
    responseType: 'json',
    responseEncoding: 'utf8',
});
export default commonInstance;
