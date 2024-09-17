import React from 'react';
import styles from './UserTable.module.scss';
import { Container } from 'react-bootstrap';
import { Spinner, Table } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, getAllUsers } from '../../../redux/usersRedux';
import { User } from '../../../types/User';
import UserData from '../UserData/UserData';
import SearchInput from '../../features/SearchInput/SearchInput';
import clsx from 'clsx';

const UserTable: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
  });
  const users = useSelector(getAllUsers);
  const dispatch = useDispatch();

  console.log(users);
  useEffect(() => {
    if (users.length === 0) {
      dispatch(fetchUsers());
    }
  }, [dispatch, users.length]);

  useEffect(() => {
    if (users.length > 0) {
      console.log('Users found:', users);
      setLoading(false);
    }
  }, [users]);

  const handleFilterChange = (field: keyof typeof filters, value: string) => {
    setFilters({ ...filters, [field]: value });
  };

  const filteredUsers = users.filter((user: User) => {
    return (
      user.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      user.username.toLowerCase().includes(filters.username.toLowerCase()) &&
      user.email.toLowerCase().includes(filters.email.toLowerCase()) &&
      user.phone.includes(filters.phone)
    );
  });

  if (loading) {
    return (
      <Container className='mt-4 mb-4 px-0'>
        <div className='d-flex align-items-center'>
          <span className='ms-4'>Loading...</span>
          <Spinner animation='border' role='status'></Spinner>
        </div>
      </Container>
    );
  }

  return (
    <Container className='mt-4 mb-4 px-0'>
      <Table striped bordered hover className={clsx(styles['custom-table'])}>
        <thead>
          <tr className={styles.th}>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
          <tr>
            <th>
              <SearchInput
                placeholder='Full Name..'
                onChange={(value) => handleFilterChange('name', value)}
              />
            </th>
            <th>
              <SearchInput
                placeholder='Username..'
                onChange={(value) => handleFilterChange('username', value)}
              />
            </th>
            <th>
              <SearchInput
                placeholder='Email..'
                onChange={(value) => handleFilterChange('email', value)}
              />
            </th>
            <th>
              <SearchInput
                placeholder='Phone..'
                onChange={(value) => handleFilterChange('phone', value)}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <UserData key={user.id} {...user} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default UserTable;
