'use client';

import formstyle from '../form-input/form-input.module.css';
// import styles from './instrument-checkbox.module.css';

// export default function InstrumentCheckbox({
//   register,
//   instrument,
// }: {
//   register: any;
//   instrument: string;
// }) {
//   return (
//     <div className={formstyle.checkbox}>
//       <label className={formstyle.label}>{instrument}</label>

//       <input
//         className={formstyle.input}
//         type='checkbox'
//         {...register('instrument')}
//         value={instrument}
//       />
//     </div>
//   );
// }

export default function InstrumentCheckbox({
  instrument,
  register,
  key,
}: {
  instrument: string;
  register: any;
  key: string;
}) {
  return (
    <div key={key} className={formstyle.checkbox}>
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
