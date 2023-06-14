import {combineReducers} from 'redux';
import newsReducer from '../newsReducer';



const appReducer = combineReducers({
    news: newsReducer
});

const rootReducer = (state:any, action:any) => {
  return appReducer(state, action);
};

export default rootReducer;
