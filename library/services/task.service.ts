import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { CreateTaskDTO } from 'lib/dto/task.dto';
import { getBaseURL } from 'lib/utils/getBaseURL.util';

const API = ({ headers = {}, params = {} } = {}): AxiosInstance => {
  const user = JSON.parse(localStorage.getItem('user') as string) ?? {};

  const BASE_URL = getBaseURL('APP_TASK_API');

  const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + user.jwt,
      ...headers,
    },
    params,
  });

  return instance;
};

const TaskServices = {
  postCreateTask: (data: CreateTaskDTO): Promise<AxiosResponse> => {
    return API().post('/api/tasks', data);
  },
  getTaskList: (params?: Record<string, string>): Promise<AxiosResponse> => {
    return API({ params }).get('/api/tasks');
  },
  getTaskDetail: (taskId: string): Promise<AxiosResponse> => {
    return API().get(`/api/tasks/${taskId}`);
  },
};

export default TaskServices;
