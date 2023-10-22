import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '../api/autheticate';

type State = {
  user: undefined | User;
  permissions: undefined | string[];
  loading: boolean;
};
const initialState: State = {
  user: undefined,
  permissions: undefined,
  loading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    autheticateUser: (state) => {
      state.loading = true;
    },
    autheticatedUser: (state, action: PayloadAction<User | undefined>) => {
      state.user = action.payload;
      state.loading = false;
    },
    authorizeUser: (state) => {
      state.loading = true;
    },
    authorizedUser: (state, action: PayloadAction<string[] | undefined>) => {
      state.permissions = action.payload;
      state.loading = false;
    },
  },
});

export const { authorizeUser, autheticateUser, authorizedUser, autheticatedUser } =
  userSlice.actions;

export default userSlice.reducer;
