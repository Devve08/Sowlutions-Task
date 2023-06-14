import {useState, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../kits/hooks';
import {getAllNews} from '../reducerLayer/newsReducer';
import useInput from './useInput';

function useFetch() {
  // const [news, setNews] = useState([]);
  const news = useAppSelector(state => state.news.news);
  const error = useAppSelector(state => state.news.errorMessages);
  const [numberOfArticles, setNumberOfArticles] = useState();
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleOnPress = (inputValue: string) => {
    setIsLoading(true);
    dispatch(getAllNews(inputValue)).finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (news?.length === 0) {
      dispatch(getAllNews(''))
        .then(res => {
          setNumberOfArticles(res?.payload?.totalArticles);
        })
        .finally(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  }, []);

  return {news, handleOnPress, isLoading, error};
}

export default useFetch;
