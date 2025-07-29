import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest: state => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: state => {
      state.loading = false;
      state.isAuthenticated = true;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: state => {
      state.isAuthenticated = false;
    },
  },
});

export const {loginRequest, loginSuccess, loginFailure, logout} =
  authSlice.actions;

export default authSlice.reducer;
