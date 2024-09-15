import { Container } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { fetchTables } from '../../../redux/usersRedux';
import { getAllUsers } from '../../../redux/usersRedux';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import UserData from '../UserData/UserData';

const UserTable = () => {
  const [loading, setLoading] = useState(true);
  const table = useSelector(getAllUsers);
  const dispatch = useDispatch();

  console.log('Table:', table);

  useEffect(() => {
    if (!table || table.length === 0) {
      dispatch(fetchTables());
    }
  }, [dispatch, table]);

  useEffect(() => {
    if (table && table.length > 0) {
      setLoading(false);
    }
  }, [table]);

  if (loading) {
    return (
      <Container className='mt-4 mb-4 px-0'>
        <div className='d-flex align-items-center'>
          <span className='ms-4'>Loading...</span>
          <Spinner animation='border' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
        </div>
      </Container>
    );
  }

  return (
    <Container className='mt-4 mb-4 px-0'>
      <Table striped bordered hover className='min-w-full'>
        <thead>
          <tr>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        {table.map((user) => (
          <UserData key={user.id} {...user} />
        ))}
      </Table>
    </Container>
  );
};

export default UserTable;
