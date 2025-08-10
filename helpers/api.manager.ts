import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { InternalAxiosRequestConfig } from 'axios';
import { Platform } from 'react-native';

import { PUBLIC_API_URLs } from '@/constants/apis';
import { configuration } from '@/constants/config';

const apiManager = axios.create({
  baseURL: configuration.API_URL,
});

// Get token in a platform-compatible way
const getAccessToken = async () => {
  try {
    // Use localStorage in web and AsyncStorage in native
    if (Platform.OS === 'web') {
      return window.localStorage.getItem('access-token');
    } else {
      return await AsyncStorage.getItem('access-token');
    }
  } catch (error) {
    console.error('Error getting access token:', error);
    return null;
  }
};

apiManager.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const requestUrl = config.url ?? '';
    if (!PUBLIC_API_URLs.find((url: string) => url.includes(requestUrl))) {
      const token = await getAccessToken();
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
    }
    return config;
  },
  (err) => err
);

apiManager.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    if (!err.response) {
      console.error('HTTP_ERROR', 'network error!');
      return err;
    }
    console.error('HTTP_ERROR', err.response?.data?.message || err.message);
    return err;
  }
);

export default apiManager;
