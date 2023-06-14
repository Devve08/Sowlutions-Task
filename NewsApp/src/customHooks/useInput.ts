import {useState, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../kits/hooks';
import {getAllNews} from '../reducerLayer/newsReducer';

function useInput() {
  const [inputValue, setInputValue] = useState<string>('');

  const getInputValue = (e: any) => {
    setInputValue(e);
  };

  return {inputValue, getInputValue};
}

export default useInput;
