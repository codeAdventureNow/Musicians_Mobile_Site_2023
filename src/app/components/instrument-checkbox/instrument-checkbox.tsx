'use client';

import { UseFormRegister } from 'react-hook-form';
import styles from './instrument-checkbox.module.css';
import { FormData } from '../../lib/form-data-schema';

export const instruments: string[] = [
  'piano',
  'guitar',
  'voice',
  'drums',
  'violin',
  'other',
];

interface Checkbox {
  instrument: string;
  register: UseFormRegister<FormData>;
}

export function InstrumentCheckbox({ instrument, register }: Checkbox) {
  return (
    <div className={styles.checkbox}>
      <label className={styles.label}>{instrument}</label>

      <input
        className={styles.input}
        type='checkbox'
        {...register('instrument')}
        value={instrument}
      />
    </div>
  );
}
