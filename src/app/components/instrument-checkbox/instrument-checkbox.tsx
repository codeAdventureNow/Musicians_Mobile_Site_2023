'use client';

import { UseFormRegister } from 'react-hook-form';
import styles from './instrument-checkbox.module.css';
import { FormData } from '../../lib/form-data-schema';

interface Checkbox {
  instrument: string;
  register: UseFormRegister<FormData>;
}

export const instrumentOptions: string[] = [
  'piano',
  'guitar',
  'voice',
  'drums',
  'violin',
  'other',
];

export function InstrumentCheckbox({ instrument, register }: Checkbox) {
  return (
    <div className={styles.checkbox}>
      <label htmlFor={instrument} className={styles.label}>
        {instrument}
      </label>

      <input
        id={instrument}
        className={styles.input}
        type='checkbox'
        {...register('instruments')}
        value={instrument}
      />
    </div>
  );
}
