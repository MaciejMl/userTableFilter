import initialState from './initialState';

//selectors
export const getAllUsers = (state) => state.users.users;

//actions
const createActionName = (actionName) => `app/users/${actionName}`;
const UPDATE_USERS = createActionName('UPDATE_USERS');
//action creators
export const updateUsers = (payload) => ({ type: UPDATE_USERS, payload });

export const fetchTables = () => {
  return (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((tables) => {
        dispatch(updateUsers(tables));
      })
      .catch((err) => {
        console.error('Faild to fetch users:', err);
      });
  };
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USERS:
      console.log('Reducer called with data:', action.payload);
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default usersReducer;
