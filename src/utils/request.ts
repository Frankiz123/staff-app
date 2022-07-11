/**
 if (response.status === 204 || response.status === 205) {
   if (response.status >= 200 && response.status < 300) {
     * Parses the JSON returned by a network request
    */

import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AxiosConfigs } from 'utils/constants';
import qs from 'qs';

class MyRequest {
  request: AxiosInstance;
  token: string | null = null;

  constructor() {
    this.request = axios.create({
      baseURL: AxiosConfigs.BASE_URL,
      headers: { 'Access-Control-Allow-Origin': '*' },
    });

    /**
     * Handling Expired token
     */
    this.request.interceptors.response.use(
      async (res) => {
        if (res?.data?.error?.includes('Invalid token')) {
          //TODO: PERFORM LOGOUT
          await AsyncStorage.clear();
        }
        return res;
      },
      (err) => Promise.reject(err),
    );
  }

  /**
   *
   * @returns the current user Token
   */
  async getToken() {
    if (this.token != null) {
      return this.token;
    }
    const token = await AsyncStorage.getItem('@token');
    if (token != null) {
      this.token = token;
    }
    return this.token;
  }
  /**
   * used to handle all Api Calls
   * @param action : backend action to be called
   * @param payload
   * @returns
   */
  async runAction(action: string, payload: any, isTokend = true) {
    const token = await this.getToken();

    const data = {
      ...payload,
      action,
    };

    if (isTokend) {
      data.token = await this.getToken();
    }

    const config: AxiosRequestConfig<any> = {
      method: 'post',
      url: '',
      headers: {
        'user-agent': 'ClinicSoftware-App-2020-89',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: qs.stringify(data),
    };
    return this.request(config);
  }
}

const request = new MyRequest();
export default request;
