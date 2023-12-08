'use client';
import styles from './form-input.module.css';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import schema from '../../lib/form-data-schema';
import { FormData } from '../../lib/form-data-schema';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase-config/firebase-config';
import { useState } from 'react';
import {
  InstrumentCheckbox,
  instrumentOptions,
} from '../instrument-checkbox/instrument-checkbox';
import { leadSourceOptions } from '../lead-source/lead-source';

const FormInput = () => {
  const now = new Date().toLocaleString();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      instruments: [],
      date: now,
    },
    resolver: zodResolver(schema),
  });

  const submitData = async (data: FormData) => {
    await addDoc(collection(db, 'prospects'), {
      data,
    });
    setFormSubmitted(true);
  };

  return (
    <div>
      {formSubmitted ? (
        <h2>Form successfully submitted!</h2>
      ) : (
        <form
          data-testid='contact-form'
          onSubmit={handleSubmit(submitData)}
          className={styles.formInput}
        >
          <label className={styles.label_hidden}>Date</label>

          <input
            className={styles.label_hidden}
            type='text'
            {...register('date')}
          />

          <label className={styles.label}> First/Last Name* </label>
          {errors.fullName && (
            <span className={styles.errormessage}>
              {errors.fullName.message}
            </span>
          )}
          <input
            data-testid='fullName'
            className={styles.input}
            type='text'
            {...register('fullName')}
          />

          <label className={styles.label}> Zip Code* </label>
          {errors.zipCode && (
            <span className={styles.errormessage}>
              {errors.zipCode.message}
            </span>
          )}
          <input
            className={styles.input}
            type='number'
            {...register('zipCode', { valueAsNumber: true })}
          />

          <label className={styles.label}> Email* </label>
          {errors.email && (
            <span className={styles.errormessage}>{errors.email.message}</span>
          )}
          <input className={styles.input} type='email' {...register('email')} />

          <label className={styles.label}> Phone* </label>
          {errors.phone && (
            <span className={styles.errormessage}>{errors.phone.message}</span>
          )}
          <input
            className={styles.input}
            type='number'
            {...register('phone', { valueAsNumber: true })}
          />

          <label className={styles.label}>
            {' '}
            Which musical instruments would you like to learn?*{' '}
          </label>
          {errors.instruments && (
            <span className={styles.errormessage}>
              {errors.instruments.message}
            </span>
          )}
          <div className={styles.flex}>
            {instrumentOptions.map((instrument: string) => {
              return (
                <InstrumentCheckbox
                  key={instrument}
                  register={register}
                  instrument={instrument}
                />
              );
            })}
          </div>
          <label className={styles.label}> How did you hear about us?* </label>
          {errors.leadSource && (
            <span className={styles.errormessage}>
              {errors.leadSource.message}
            </span>
          )}
          <select className={styles.leadSource} {...register('leadSource')}>
            <option className={styles.leadSourceOption} value=''>
              Please choose an option
            </option>
            {leadSourceOptions.map((leadSource) => {
              return (
                <option
                  key={leadSource}
                  className={styles.leadSourceOption}
                  value={leadSource}
                >
                  {leadSource}
                </option>
              );
            })}
          </select>

          <label className={styles.label}>
            {' '}
            What is your availability for music lessons?{' '}
          </label>
          {errors.availability && (
            <span className={styles.errormessage}>
              {errors.availability.message}
            </span>
          )}
          <input
            className={styles.input}
            type='text'
            {...register('availability')}
            placeholder='Mon 3-6pm, Sat 8-10am'
          />

          <label className={styles.label}> Additional info </label>
          {errors.message && (
            <span className={styles.errormessage}>
              {errors.message.message}
            </span>
          )}
          <textarea
            className={styles.textarea}
            {...register('message')}
            placeholder='Daughter is a beginner, 8 years old, likes Taylor Swift'
          />

          <button className={styles.submit} type='submit'>
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default FormInput;
