/* eslint-disable @typescript-eslint/no-unused-vars */
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import {
  ChangelogFilterQuery,
  ChangelogOptionQuery,
} from 'lib/components/changelog/Changelog.vue.d';
import { FetchOptionResponse } from 'lib/components/filtercontainer/FilterContainer.vue.d';
import { getBaseURL } from 'lib/utils/getBaseURL.util';

// Const user = JSON.parse(localStorage.getItem('user')!);
const API = ({ headers = {}, params = {} } = {}): AxiosInstance => {
  const user = JSON.parse(localStorage.getItem('user') as string) ?? {};
  const BASE_URL = getBaseURL('APP_LOGS_API');

  const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + user.token,
      ...headers,
    },
    params,
  });

  return instance;
};

const AuditServices = {
  getChangelog: (params?: ChangelogFilterQuery): Promise<AxiosResponse> => {
    return API({ params }).get('/change-log');
  },

  getChangelogOptions: (
    params?: ChangelogOptionQuery,
  ): Promise<AxiosResponse<FetchOptionResponse<ChangelogOptionQuery>>> => {
    return API({ params }).get('/change-log/options');
  },
};

export default AuditServices;
