import {createSlice} from '@reduxjs/toolkit';

const quoteSlice = createSlice({
  name: 'quote',
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {
    fetchQuoteRequest: state => {
      state.loading = true;
      state.error = null;
    },
    fetchQuoteSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchQuoteFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {fetchQuoteRequest, fetchQuoteSuccess, fetchQuoteFailure} =
  quoteSlice.actions;

export default quoteSlice.reducer;
