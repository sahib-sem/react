import { createSlice } from '@reduxjs/toolkit';
import { NewSongData, SongData } from '../songs/type';
import type { PayloadAction } from '@reduxjs/toolkit';

type State = {
  songs: SongData[];
  openDeleteModal: boolean;
  openEditModal: boolean;
  openCreateModal: boolean;
  openedSongId: number | undefined;
};
export type Id = {
  id: number;
};

const initialState: State = {
  songs: [],
  openCreateModal: false,
  openDeleteModal: false,
  openEditModal: false,
  openedSongId: undefined,
};
export const songsSlice = createSlice({
  name: 'song slice',
  initialState,
  reducers: {
    OpenDeleteModal: (state) => {
      state.openDeleteModal = true;
      state.openCreateModal = false;
      state.openEditModal = false;
    },
    CloseDeleteModal: (state) => {
      state.openDeleteModal = false;
    },
    OpenEditModal: (state) => {
      state.openEditModal = true;
      state.openCreateModal = false;
      state.openDeleteModal = false;
    },
    OpenCreateModal: (state) => {
      state.openCreateModal = true;
      state.openDeleteModal = false;
      state.openEditModal = false;
    },
    CloseEditModal: (state) => {
      state.openEditModal = false;
    },
    CloseCreateModal: (state) => {
      state.openCreateModal = false;
    },
    StartGetSongData: (state) => {
      state.songs = [];
    },
    GetSongDataSuccess: (state, action: PayloadAction<SongData[]>) => {
      console.log(action.payload, 'payload');
      state.songs = action.payload;
    },
    GetSongDataFailure: (state) => {
      state.songs = [];
    },
    StartPostSongData: (state, action: PayloadAction<NewSongData>) => {},
    PostSongDataSuccess: (state, action: PayloadAction<NewSongData>) => {},
    PostSongDataFailure: (state) => {
      state.songs = [];
    },
    StartPutSongData: (state) => {
      state.songs = [];
    },
    PutSongDataSuccess: (state, action: PayloadAction<SongData>) => {
      state.songs = [...state.songs!, action.payload];
    },

    PutSongDataFailure: (state) => {
      state.songs = [];
    },
    StartDeleteSongData: (state, action: PayloadAction<Id>) => {
      state.songs = [];
    },
    DeleteSongDataSuccess: (state) => {},
    DeleteSongDataFailure: (state) => {
      state.songs = [];
    },
    SetOpenedSongId: (state, action: PayloadAction<number>) => {
      state.openedSongId = action.payload;
    },
  },
});

export const {
  OpenDeleteModal,
  OpenEditModal,
  OpenCreateModal,
  CloseCreateModal,
  CloseDeleteModal,
  CloseEditModal,
  StartGetSongData,
  GetSongDataSuccess,
  GetSongDataFailure,
  StartPostSongData,
  PostSongDataSuccess,
  PostSongDataFailure,
  StartPutSongData,
  PutSongDataSuccess,
  PutSongDataFailure,
  StartDeleteSongData,
  DeleteSongDataSuccess,
  DeleteSongDataFailure,
  SetOpenedSongId,
} = songsSlice.actions;
export default songsSlice.reducer;
