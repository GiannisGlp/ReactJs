import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import placesReducer from './placesReducer';
import layoutReducer from './layoutReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  places: placesReducer,
  layout: layoutReducer,
});

export default rootReducer;
