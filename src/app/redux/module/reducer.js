import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { appReducer } from './app/reducer';

export const reducer = combineReducers({
  router: routerReducer,
  app: appReducer,
});
