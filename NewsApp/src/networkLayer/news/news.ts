import {
  networkCallGet,
  networkCallPatch,
  networkCallPost,
} from '../common/networkCalls';

/**
 * @param {RequestModel}
 * @returns {Promise<AxiosResponse<ResponseModel>>}
 */
export function getNews(data: string) {
  return networkCallGet(
    `/search?q=${
      data ? data : undefined
    }&max=10&apikey=a5724fbaa30ade07ff7c912941e2c7c8`,
    {},
  );
}
