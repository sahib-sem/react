import { call, put } from 'redux-saga/effects';

import { getSongs } from '../request/getSong';

import { SongData } from '../../songs/type';
import { GetSongDataFailure, GetSongDataSuccess } from '../../store/songsSlice';

export function* getSongData() {
  try {
    const songData: SongData[] = yield call(getSongs);
    yield put(GetSongDataSuccess(songData));
  } catch (e: any) {
    yield put(GetSongDataFailure(e.message));
  }
}
