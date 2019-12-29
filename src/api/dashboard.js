import axiosInstance from '../config/http';

export const getDashboardInfo = async () =>
  await axiosInstance.get('/Admin/dashboard');
