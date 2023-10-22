import { call, put } from 'redux-saga/effects';
import { DeletedSongResponse } from '../../songs/type';
import {
  DeleteSongDataFailure,
  DeleteSongDataSuccess,
  Id,
  StartGetSongData,
} from '../../store/songsSlice';
import { deleteSong } from '../request/deleteSong';

export function* deleteSongData(action: { payload: Id }) {
  try {
    const songData: DeletedSongResponse = yield call(deleteSong, action.payload.id);
    yield put(DeleteSongDataSuccess());
    yield put(StartGetSongData());
  } catch (e: any) {
    yield put(DeleteSongDataFailure(e.message));
  }
}
