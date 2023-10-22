import { call, put } from 'redux-saga/effects';
import { saveSong } from '../request/postSong';

import { NewSongData, SavedSongResponse } from '../../songs/type';
import { PostSongDataFailure, StartGetSongData } from '../../store/songsSlice';

export function* postSongData(action: { payload: NewSongData }) {
  try {
    const savedSong: SavedSongResponse = yield call(saveSong, action.payload);
    yield put({ type: 'PostSongDataSuccess', payload: savedSong });
    yield put(StartGetSongData());
  } catch (e: any) {
    yield put(PostSongDataFailure(e.message));
  }
}
