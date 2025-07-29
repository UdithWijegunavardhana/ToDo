import {all} from 'redux-saga/effects';
import {authSaga} from './sagas/AuthSaga';
import {quoteSaga} from './sagas/QuoteSaga';

export default function* rootSaga() {
  yield all([authSaga(), quoteSaga()]);
}
