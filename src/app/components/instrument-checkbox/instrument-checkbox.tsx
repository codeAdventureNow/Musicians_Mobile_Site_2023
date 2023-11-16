'use client';

import formstyle from './instrument-checkbox.module.css';

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
    <div className={formstyle.checkbox}>
      <label className={formstyle.label}>{instrument}</label>

      <input
        className={formstyle.input}
        type='checkbox'
        {...register('instrument')}
        value={instrument}
      />
    </div>
  );
}
