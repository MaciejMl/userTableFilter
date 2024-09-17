import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { UsersState } from './initialState';
import { User } from '../types/User';
import initialState from './initialState';

// Selectors
export const getAllUsers = (state: { users: UsersState }) => state.users.users;

// Action types
const UPDATE_USERS = 'app/users/UPDATE_USERS';

// Action creators
export const updateUsers = (payload: User[]) => ({
  type: UPDATE_USERS,
  payload,
});

//Dispatch thunk
export const fetchUsers = (): ThunkAction<
  void,
  UsersState,
  unknown,
  Action<string>
> => {
  return (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data: User[]) => {
        dispatch(updateUsers(data));
      })
      .catch((err) => {
        console.error('Failed to fetch users:', err);
      });
  };
};

// Reducer
const usersReducer = (
  state = initialState,
  action: { type: string; payload: User[] }
): UsersState => {
  switch (action.type) {
    case UPDATE_USERS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default usersReducer;
