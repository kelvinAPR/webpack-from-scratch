import axiosInstance from '../config/http';

export const fetchAllKpi = async () => await axiosInstance.get('/kpi');

export const fetchKPIFromSupervisor = async () =>
  await axiosInstance.get('/kpi?type=supervisor');

export const submitKpi = async payload =>
  await axiosInstance.patch('/kpi/submit', payload);

export const getSubordinatesKpi = async () =>
  await axiosInstance.get('/user/subordinate');

export const approveSubordinateKpis = async payload =>
  await axiosInstance.patch('/Kpi/approve', payload);

export const declineSubordinateKpis = async payload =>
  await axiosInstance.patch('/Kpi/reject', payload);

export const editKpi = async (payload, kpiKey) =>
  await axiosInstance.patch(`/kpi/${kpiKey}`, payload);

export const addKpiTaskRequest = async payload =>
  await axiosInstance.post('/kpi/tasks', payload);

export const getKpiTasksRequest = async () =>
  await axiosInstance.get('/kpi/tasks');

export const deleteKpiTasksRequest = async kpiTaskKeys =>
  await axiosInstance.delete('/kpi/tasks', kpiTaskKeys);

export const modificationRequest = async (payload, kpiKey) =>
  await axiosInstance.patch(`/kpi/${kpiKey}/edit-request`, payload);

export const massKpiUploadRequest = async (data, config) =>
  await axiosInstance.post('/Kpi/kpiMassUpload', data, config);

export const downloadTemplateRequest = async responseType =>
  await axiosInstance.get('/Kpi/kpiMassUploadTemplate', responseType);

export const addKPIActivity = async payload =>
  await axiosInstance.post('/kpi/activities', payload);

export const approveEditRequest = async kpiKey =>
  await axiosInstance.patch(`/kpi/${kpiKey}/edit-request/approve`);

export const rejectEditRequest = async kpiKey =>
  await axiosInstance.patch(`/kpi/${kpiKey}/edit-request/reject`);
