import { combineReducers } from 'redux';

import { reducer as form } from 'redux-form';
import { authReducer as auth } from './authReducer';


export const reducers = combineReducers({
  auth,
  form,
});
