import {all, fork} from 'redux-saga/effects';
import {authSaga} from './sagas/AuthSaga';
import {quoteSaga} from './sagas/QuoteSaga';

export default function* rootSaga() {
  yield all([fork(authSaga), fork(quoteSaga)]);
}
