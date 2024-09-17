import React from 'react';
import clsx from 'clsx';
import styles from './InputForm.module.scss';

interface InputFormProps {
  fieldValue: string;
  handleChange: (
    value: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  placeholder: string;
  className?: string;
  type: 'text' | 'number' | 'email';
}

const InputForm: React.FC<InputFormProps> = ({
  fieldValue,
  handleChange,
  placeholder,
  className,
  type,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    handleChange(inputValue, e);
  };

  return (
    <>
      <label htmlFor='inputValues'></label>
      <input
        className={clsx(styles.root, className)}
        type={type}
        inputMode={type === 'text' ? 'text' : 'numeric'}
        id='value'
        aria-describedby='value field'
        placeholder={placeholder}
        value={fieldValue}
        onChange={handleInputChange}
      />
    </>
  );
};

export default InputForm;
