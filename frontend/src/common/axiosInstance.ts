import axios from 'axios';
const axiosInstance = axios.create({
  baseURL: 'http://localhost:57967/api/v1',
});
export default axiosInstance;
