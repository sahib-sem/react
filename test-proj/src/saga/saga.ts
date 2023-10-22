import { takeLatest, all } from 'redux-saga/effects';
import { getSongData } from './handler/getSongData';
import { postSongData } from './handler/postSongData';
import { StartGetSongData, StartPostSongData } from '../store/songsSlice';
export function* watchGetSongData() {
  yield takeLatest(StartGetSongData, getSongData);
}
export function* watchPostSongData() {
  yield takeLatest(StartPostSongData, postSongData);
}

export default function* watcherSaga() {
  yield all([watchGetSongData(), watchPostSongData()]);
}
