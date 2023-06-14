import {Platform} from 'react-native';
import { network } from './network';

import { prepareFormData } from './networkHelpers';

/**
 * Name: GET
 * @param params ==> {potential query params}
 * @returns {Promise<AxiosResponse<any>>}
 */
export function networkCallGet(path :any, params:any) {
  return network('').then((call) => {
    return call.get(path, {params: params});
  });
}

/**
 * Name: Post
 * @param path
 * @param params
 * @returns {Promise<AxiosResponse<any>>}
 */
export function networkCallPost(path:any, params: any) {
  return network('').then(call => {
    return call.post(path, params);
  });
}

/**
 * Name: Patch
 * @param path
 * @param params
 * @returns {Promise<AxiosResponse<any>>}
 */
export function networkCallPatch(path: any, params: any) {
  return network('').then(call => {
    return call.patch(path, params);
  });
}

/**
 * Name: Put
 * @param path
 * @param params
 * @returns {Promise<AxiosResponse<any>>}
 */
export function networkCallPut(path:any, params: any) {
  return network('').then(call => {
    return call.put(path, params);
  });
}

/**
 * Name: Delete
 * @param path
 * @param params
 * @returns {Promise<AxiosResponse<any>>}
 */
export function networkCallDelete(path: any, params: any) {
  return network('').then(call => {
    return call.delete(path, params);
  });
}

/**
 * Name: Form Data
 * @param path
 * @param params
 * @returns {Promise<AxiosResponse<any>>}
 */
export function networkCallFormData(path: any, params: any) {
  return network('multipart/form-data').then(call => {
    const data = new FormData();
    data.append('file', {
      name: params.fileName,
      type: params.fileType,
      uri:
        Platform.OS === 'android'
          ? params.fileUri
          : params.fileUri.replace('file://', ''),
    });

    return call.post(path, data);
  });
}

/**
 * Name: Form Data
 * @param path
 * @param params
 * @returns {Promise<AxiosResponse<any>>}
 */
export function networkCallFormDataPost(path: any, params: any, fileParams: any) {
  return network('multipart/form-data').then(call => {
    const data = prepareFormData(params);
    if (fileParams) {
      data.append('file', {
        name: fileParams.fileName,
        type: fileParams.fileType,
        uri:
          Platform.OS === 'android'
            ? fileParams.fileUri
            : fileParams.fileUri.replace('file://', ''),
      });
    }
    return call.post(path, data);
  });
}

/**
 * Name: Form Data
 * @param path
 * @param params
 * @returns {Promise<AxiosResponse<any>>}
 */
export function networkCallFormDataPatch(path: any, params : any, fileParams: any) {
  return network('multipart/form-data').then(call => {
    const data = prepareFormData(params);
    if (fileParams) {
      data.append('file', {
        name: fileParams.fileName,
        type: fileParams.fileType,
        uri:
          Platform.OS === 'android'
            ? fileParams.fileUri
            : fileParams.fileUri.replace('file://', ''),
      });
    }
    return call.patch(path, data);
  });
}
