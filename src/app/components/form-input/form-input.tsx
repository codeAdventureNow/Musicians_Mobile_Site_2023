'use client';
import styles from './form-input.module.css';
import { z, ZodType } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { spawn } from 'child_process';
import { useState } from 'react';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  password: string;
  confirmPassword: string;
};

const FormInput = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const schema: ZodType<FormData> = z
    .object({
      firstName: z.string().min(2).max(20),
      lastName: z.string().min(2).max(20),
      email: z.string().email(),
      age: z.number().min(18).max(70),
      password: z.string().min(5).max(20),
      confirmPassword: z.string().min(5).max(20),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: 'Passwords do not match',
      path: ['confirmPassword'],
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
          <label className={styles.label}> First Name: </label>
          <input
            className={styles.input}
            type='text'
            {...register('firstName')}
          />
          {errors.firstName && (
            <span className={styles.errormessage}>
              {errors.firstName.message}
            </span>
          )}

          <label className={styles.label}> Last Name: </label>
          <input
            className={styles.input}
            type='text'
            {...register('lastName')}
          />
          {errors.lastName && (
            <span className={styles.errormessage}>
              {errors.lastName.message}
            </span>
          )}

          <label className={styles.label}> Email: </label>
          <input className={styles.input} type='email' {...register('email')} />
          {errors.email && (
            <span className={styles.errormessage}>{errors.email.message}</span>
          )}

          <label className={styles.label}> Age: </label>
          <input
            className={styles.input}
            type='number'
            {...register('age', { valueAsNumber: true })}
          />
          {errors.age && (
            <span className={styles.errormessage}>{errors.age.message}</span>
          )}

          <label className={styles.label}> Password: </label>
          <input
            className={styles.input}
            type='password'
            {...register('password')}
          />
          {errors.password && (
            <span className={styles.errormessage}>
              {errors.password.message}
            </span>
          )}

          <label className={styles.label}> Confirm Password: </label>
          <input
            className={styles.input}
            type='password'
            {...register('confirmPassword')}
          />
          {errors.confirmPassword && (
            <span className={styles.errormessage}>
              {errors.confirmPassword.message}
            </span>
          )}

          <input className={styles.submit} type='submit' />
        </form>
      )}
    </div>
  );
};

export default FormInput;
