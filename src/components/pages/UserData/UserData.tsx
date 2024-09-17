import React from 'react';
import { User } from '../../../types/User';

const UserData: React.FC<User> = ({ name, username, email, phone }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{username}</td>
      <td>
        <span className='badge bg-success'>{email}</span>
      </td>
      <td>{phone}</td>
    </tr>
  );
};

export default UserData;
