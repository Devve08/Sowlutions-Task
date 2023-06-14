import prepareErrorResponse from '../ErrorHandlerLayer/ErrorHandler';
import {getNews} from '../networkLayer/news/news';

export function getNewsAction(data: string) {
  return getNews(data)
    .then(({data}) => {
      return Promise.resolve(data);
    })
    .catch((error: any) => {
      return Promise.reject(prepareErrorResponse(error));
    });
}
