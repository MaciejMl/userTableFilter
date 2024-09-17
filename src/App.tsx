import React from 'react';
import UserTable from './components/pages/UserTable/UserTable';
import styles from './components/common/App/App.module.scss';

const App: React.FC = () => {
  return (
    <div>
      <h1 className={styles.main}>My Table</h1>
      <UserTable />
    </div>
  );
};

export default App;
