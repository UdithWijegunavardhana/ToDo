import {combineReducers} from 'redux';
import authReducer from '../redux/slices/AuthSlice';
import quoteReducer from '../redux/slices/QuoteSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  quote: quoteReducer,
});

export default rootReducer;
