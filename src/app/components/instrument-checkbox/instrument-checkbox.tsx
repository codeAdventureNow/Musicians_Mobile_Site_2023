'use client';

import styles from './instrument-checkbox.module.css';

export const instruments: string[] = [
  'piano',
  'guitar',
  'voice',
  'drums',
  'violin',
  'other',
];

export function InstrumentCheckbox({
  instrument,
  register,
}: {
  instrument: string;
  register: any;
}) {
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
