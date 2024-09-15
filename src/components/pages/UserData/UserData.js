import React from 'react';

const UserData = (props) => {
  return (
    <tbody>
      <tr>
        <td>{props.name}</td>
        <td>{props.username}</td>
        <td>
          <span className='badge bg-success'>{props.email}</span>
        </td>
        <td>{props.phone}</td>
      </tr>
    </tbody>
  );
};

export default UserData;
