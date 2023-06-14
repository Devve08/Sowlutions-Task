import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import rootReducer from '../reducerLayer/common/rootReducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch