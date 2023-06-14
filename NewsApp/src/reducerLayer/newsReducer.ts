import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getNewsAction} from '../actionHandlerLayer/newsActionHandler';

export interface CounterState {
  news: any[];
  isLoading: boolean;
  errorMessages: string;
  successMessages: string;
}

const initialState: CounterState = {
  news: [],
  isLoading: false,
  errorMessages: '',
  successMessages: '',
};

export const getAllNews = createAsyncThunk('getNews', async (data: string) => {
  const response = await getNewsAction(data);
  return response;
});

const newsReducer = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllNews.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getAllNews.fulfilled, (state, {payload}: any) => {
      (state.isLoading = false),
        (state.news = payload?.articles),
        (state.errorMessages = '');
    });
    builder.addCase(getAllNews.rejected, (state, err: any) => {
      (state.isLoading = false), (state.errorMessages = err.error?.message);
    });
  },
});

export default newsReducer.reducer;
