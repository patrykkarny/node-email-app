import { combineReducers } from 'redux';

import { authReducer as auth } from './authReducer';

export const reducers = combineReducers({
  auth,
});
