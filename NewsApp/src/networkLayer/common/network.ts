import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {I18nManager, Platform} from 'react-native';

function prepareEnvironmentUrl(val: any) {
  switch (val) {
    case 'prod':
      return `https://gnews.io/api/v4`;
    case 'staging':
      return 'http://35.179.56.127:8080/';
    case 'local':
      return Platform.OS == 'android'
        ? 'http://192.168.1.104:8080/'
        : 'http://localhost:8080/';
    default:
      break;
  }
}

const BASE_URL = prepareEnvironmentUrl('prod');

function isStatusValid(status: any) {
  return status >= 200 && status <= 300;
}

export function network(contentType: any) {
  return Promise.resolve(
    axios.create({
      baseURL: `${BASE_URL}`,
      validateStatus: status => {
        return isStatusValid(status);
      },
      headers: {
        'Content-Type': contentType ? contentType : 'application/json',
        'Accept-Language': I18nManager.isRTL ? 'ar' : 'en',
      },
      timeout: 10000,
    }),
  );
}
