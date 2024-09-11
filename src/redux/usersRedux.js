//selectors
export const getAllUsers = (state) => state.users;

//actions
const createActionName = (actionName) => `app/users/${actionName}`;
const FETCH_USERS = createActionName('FETCH_USERS');
//action creators
export const fetchUsers = (payload) => ({ type: FETCH_USERS, payload });

const usersReducer = (statePart = [], action) => {
  switch (action.type) {
    case FETCH_USERS:
      return [...statePart];
    default:
      return statePart;
  }
};

export default usersReducer;
