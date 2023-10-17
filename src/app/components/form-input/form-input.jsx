import styles from './form-input.module.css';
import { useState } from 'react';

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className={styles.formInput}>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          (inputProps.name === 'confirmPassword') === setFocused(true)
        }
        focused={focused.toString()}
      />
      <span className={styles.span}>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
