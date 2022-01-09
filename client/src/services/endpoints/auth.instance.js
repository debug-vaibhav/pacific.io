import axios from 'axios';

const authInstance = axios.create({ baseURL: `http://${process.env.API_SERVER_URL}/api`, headers: { 'Content-Type': 'application/json' } });
export default authInstance;
