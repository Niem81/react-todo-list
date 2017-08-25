import { combineReducers } from 'redux';
import adviceReducer from './adviceReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  advices: adviceReducer,
  user: userReducer
})

export default rootReducer;
