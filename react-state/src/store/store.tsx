import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';

export const store = configureStore({
  reducer: { user: userSlice },
});

export type RootType = ReturnType<typeof store.getState>;
