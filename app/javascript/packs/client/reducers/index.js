import { combineReducers } from 'redux';
import formulations from './formulations';
import ingredients from './ingredients';

export default combineReducers({
  formulations,
  ingredients
});
