import axios from 'axios';

const authInstance = axios.create({
    baseURL: `http://${process.env.API_SERVER_URL}/api/v1/auth`,
    timeout: 3000,
    responseType: 'json',
    responseEncoding: 'utf8',
    headers: { 'Content-Type': 'application/json' },
});
export default authInstance;
