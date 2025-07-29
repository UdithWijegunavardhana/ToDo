import {put, takeLatest, call} from 'redux-saga/effects';
import {loginSuccess, loginFailure} from '../slices/AuthSlice';
import {createAction} from '@reduxjs/toolkit';
import {signInApi} from '../../api/auth.api';

function* handleLogin(action) {
  try {
    const response = yield* call(signInApi, action.payload);
    yield put(loginSuccess(response));
  } catch (error) {
    yield put(loginFailure(error.message || 'Login failed'));
  }
}

export function* authSaga() {
  yield takeLatest(authSagaActions.login.type, handleLogin);
}

export const authSagaActions = {
  login: createAction('Auth/Login'),
  logout: createAction('Auth/Logout'),
  restoreSession: createAction('Auth/RestoreSession'),
};
