import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { useState } from 'react';
import InputForm from '../../common/InputForm/InputForm';
import clsx from 'clsx';
import styles from './SearchInput.module.scss';

interface SearchInputProps {
  placeholder: string;
  onChange: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder, onChange }) => {
  const [search, setSearch] = useState('');

  const handleSearchChange = (text: string) => {
    setSearch(text);
    onChange(text);
  };

  return (
    <Container className={clsx('my-1', styles.root)}>
      <Form>
        <div className={styles.searchCont}>
          <span className={styles.search}>Search: </span>
          <div className={styles.inputCont}>
            <InputForm
              className={styles.nameInput}
              fieldValue={search}
              handleChange={handleSearchChange}
              placeholder={placeholder}
              type='text'
            />
          </div>
        </div>
      </Form>
    </Container>
  );
};

export default SearchInput;
