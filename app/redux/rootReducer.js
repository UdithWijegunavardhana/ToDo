import {combineReducers} from 'redux';
import authReducer from '../redux/slices/AuthSlice';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
