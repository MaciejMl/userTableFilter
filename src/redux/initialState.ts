import { User } from '../types/User';

export interface UsersState {
  users: User[];
}

const initialState: UsersState = {
  users: [],
};

export default initialState;
