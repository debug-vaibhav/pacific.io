import axios from 'axios';

const commonInstance = axios.create({
    baseURL: `http://${process.env.API_SERVER_URL}/api`,
    headers: { 'Content-Type': 'application/json' }
});
export default commonInstance;
