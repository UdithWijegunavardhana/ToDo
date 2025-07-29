import {put, takeLatest, call} from 'redux-saga/effects';
import {createAction} from '@reduxjs/toolkit';

import {
  fetchQuoteRequest,
  fetchQuoteSuccess,
  fetchQuoteFailure,
} from '../slices/QuoteSlice';
import {API_ENDPOINTS} from '../../api/EndPoints';

function* handleFetchQuote() {
  try {
    yield put(fetchQuoteRequest());
    const response = yield* call(fetch, API_ENDPOINTS.GET_QUOTES);
    const data = yield response.json();
    console.log('🟩 data:', data);
    yield put(fetchQuoteSuccess(data));
  } catch (error) {
    yield put(fetchQuoteFailure(error.message || 'Failed to fetch quote'));
  }
}

export function* quoteSaga() {
  yield takeLatest(fetchQuoteRequest.type, handleFetchQuote);
}

export const quoteSagaActions = {
  fetchQuoteRequest: createAction('Quote/FetchQuote'),
};
