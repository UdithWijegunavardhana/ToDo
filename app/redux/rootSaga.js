import {all} from 'redux-saga/effects';
import {authSaga} from './sagas/AuthSaga';

export default function* rootSaga() {
  yield all([authSaga()]);
}
