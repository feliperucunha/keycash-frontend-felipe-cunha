import { configureStore } from '@reduxjs/toolkit';
import { housesApi } from '../services/housesApi';

export default configureStore({
  reducer: {
    [housesApi.reducerPath]: housesApi.reducer
  }
});