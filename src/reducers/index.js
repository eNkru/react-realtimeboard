import {combineReducers} from 'redux';
import boards from './boardReducer';

const rootReducer = combineReducers({
  boards
});

export default rootReducer;
