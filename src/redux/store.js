import { configureStore } from '@reduxjs/toolkit';
import ToursReducer from './ToursSlice';

const store = configureStore({
  reducer: {
    tours: ToursReducer,
  },
});

export default store;
