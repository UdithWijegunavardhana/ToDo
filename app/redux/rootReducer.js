import {combineReducers} from 'redux';
import authReducer from '../redux/slices/AuthSlice';
import quoteReducer from '../redux/slices/QuoteSlice';
import todoReducer from '../redux/slices/TodoSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  quote: quoteReducer,
  todo: todoReducer,
});

export default rootReducer;
