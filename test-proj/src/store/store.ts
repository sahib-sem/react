import songReducer from './songsSlice';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import watcherSaga from '../saga/saga';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    songs: songReducer,
  },
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(watcherSaga);

export type RootState = ReturnType<typeof store.getState>;
