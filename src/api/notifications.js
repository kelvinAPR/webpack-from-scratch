import axiosInstance from '../config/http';

const fetchNotifications = async () => axiosInstance.get('/notifications');
export default fetchNotifications;
