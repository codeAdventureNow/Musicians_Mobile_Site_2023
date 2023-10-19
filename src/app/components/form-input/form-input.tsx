'use client';
import styles from './form-input.module.css';
import { z, ZodType } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

type FormData = {
  fullName: string;
  zipCode: number;
  email: string;
  phone: number;

  availability: string;
  message: string;
  guitar: boolean;
  piano: boolean;
  voice: boolean;
  drums: boolean;
  violin: boolean;
  other: boolean;
  leadSource: string;
};

const FormInput = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const schema: ZodType<FormData> = z.object({
    fullName: z.string().min(2).max(20),
    zipCode: z.coerce
      .number() // Force it to be a number
      .int() // Make sure it's an integer
      .gte(10000) // Greater than or equal to the smallest 5 digit int
      .lte(99999),
    email: z.string().email(),
    phone: z.coerce.number().int().gte(1000000),

    availability: z.string(),
    message: z.string(),
    guitar: z.boolean(),
    piano: z.boolean(),
    voice: z.boolean(),
    drums: z.boolean(),
    violin: z.boolean(),
    other: z.boolean(),
    leadSource: z.string().min(2),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const submitData = (data: FormData) => {
    console.log('it worked', data);
    setFormSubmitted(true);
  };

  return (
    <div>
      {formSubmitted ? (
        <h2>Form successfully submitted!</h2>
      ) : (
        <form onSubmit={handleSubmit(submitData)} className={styles.formInput}>
          <label className={styles.label}> First/Last Name* </label>
          <input
            className={styles.input}
            type='text'
            {...register('fullName')}
          />
          {errors.fullName && (
            <span className={styles.errormessage}>
              {errors.fullName.message}
            </span>
          )}

          <label className={styles.label}> Zip Code* </label>
          <input
            className={styles.input}
            type='number'
            {...register('zipCode', { valueAsNumber: true })}
          />
          {errors.zipCode && (
            <span className={styles.errormessage}>
              {errors.zipCode.message}
            </span>
          )}

          <label className={styles.label}> Email* </label>
          <input className={styles.input} type='email' {...register('email')} />
          {errors.email && (
            <span className={styles.errormessage}>{errors.email.message}</span>
          )}

          <label className={styles.label}> Phone* </label>
          <input
            className={styles.input}
            type='number'
            {...register('phone', { valueAsNumber: true })}
          />
          {errors.phone && (
            <span className={styles.errormessage}>{errors.phone.message}</span>
          )}

          <label className={styles.label}>
            {' '}
            Which musical instruments would you like to learn?*{' '}
          </label>
          <div className={styles.flex}>
            <div className={styles.checkbox}>
              <label className={styles.label}> Piano </label>
              <input
                className={styles.input}
                type='checkbox'
                {...register('piano')}
              />
            </div>
            <div className={styles.checkbox}>
              {' '}
              <label className={styles.label}> Guitar </label>
              <input
                className={styles.input}
                type='checkbox'
                {...register('guitar')}
              />
            </div>
            <div className={styles.checkbox}>
              {' '}
              <label className={styles.label}> Voice </label>
              <input
                className={styles.input}
                type='checkbox'
                {...register('voice')}
              />
            </div>
            <div className={styles.checkbox}>
              {' '}
              <label className={styles.label}> Drums </label>
              <input
                className={styles.input}
                type='checkbox'
                {...register('drums')}
              />
            </div>
            <div className={styles.checkbox}>
              {' '}
              <label className={styles.label}> Violin </label>
              <input
                className={styles.input}
                type='checkbox'
                {...register('violin')}
              />
            </div>
            <div className={styles.checkbox}>
              {' '}
              <label className={styles.label}> Other </label>
              <input
                className={styles.input}
                type='checkbox'
                {...register('other')}
              />
            </div>
          </div>
          <label className={styles.label}> How did you hear about us?* </label>
          <select className={styles.leadSource} {...register('leadSource')}>
            <option className={styles.leadSourceOption} value=''>
              Please choose an option
            </option>
            <option className={styles.leadSourceOption} value='referral'>
              Referral
            </option>
            <option className={styles.leadSourceOption} value='yelp'>
              Yelp!
            </option>
            <option className={styles.leadSourceOption} value='google search'>
              Google Search
            </option>
            <option
              className={styles.leadSourceOption}
              value='google sponsored ad'
            >
              Google Sponsored Ad
            </option>
            <option className={styles.leadSourceOption} value='facebook'>
              Facebook
            </option>
            <option className={styles.leadSourceOption} value='instagram'>
              Instagram
            </option>
            <option className={styles.leadSourceOption} value='other'>
              Other
            </option>
          </select>

          <label className={styles.label}>
            {' '}
            What is your availability for music lessons?{' '}
          </label>
          <input
            className={styles.input}
            type='text'
            {...register('availability')}
            placeholder='Mon 3-6pm, Sat 8-10am'
          />
          {errors.availability && (
            <span className={styles.errormessage}>
              {errors.availability.message}
            </span>
          )}

          <label className={styles.label}> Additional info </label>
          <textarea
            className={styles.textarea}
            {...register('message')}
            placeholder='Daughter is a beginner, 8 years old, likes Taylor Swift'
          />
          {errors.message && (
            <span className={styles.errormessage}>
              {errors.message.message}
            </span>
          )}

          <input className={styles.submit} type='submit' />
        </form>
      )}
    </div>
  );
};

export default FormInput;
