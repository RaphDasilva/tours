import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://course-api.com/react-tours-project';

export const getTours = createAsyncThunk('tours/getTours', async () => {
  const result = await axios(url);
  return result.data;
});

const initialState = {
  tours: [],
  status: 'idle',
  error: null,
};

const tourSlice = createSlice({
  name: 'tours',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTours.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(getTours.fulfilled, (state, action) => (
        {
          ...state,
          tours: action.payload,
          status: 'succeeded',
        }
      ))
      .addCase(getTours.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export const tourActions = tourSlice.actions;
export default tourSlice.reducer;
