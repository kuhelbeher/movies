/* eslint-disable no-param-reassign */
import { createSlice } from 'redux-starter-kit';

import { Errors } from '../../types';

type State = {
  tokenType: String;
  accessToken: String;
  expiresAt: String;
  loading: Boolean;
  errors: Errors | null;
};

const initialState: State = {
  tokenType: '',
  accessToken: '',
  expiresAt: '',
  loading: false,
  errors: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    fetchTokenStart(state: State) {
      state.loading = true;
    },
    fetchTokenSuccess(state: State, action) {
      state = { ...state, loading: false, errors: null, ...action.payload };
    },
    fetchTokenFail(state: State, action) {
      state = { ...state, loading: false, errors: action.payload };
    },
  },
});

export const {
  fetchTokenStart,
  fetchTokenSuccess,
  fetchTokenFail,
} = authSlice.actions;

export default authSlice.reducer;
