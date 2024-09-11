import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import initialState from './initialState';
import usersReducer from './usersRedux';

const subreducers = {
  users: usersReducer,
};

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
