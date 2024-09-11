import { combineReducers, createStore } from 'redux';
import usersReducer from './usersRedux';

const subreducers = {
  users: usersReducer,
};

const reducer = combineReducers(subreducers);

let initialState = [];

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
