'use client';
import styles from './form-input.module.css';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import schema from '../../lib/form-data-schema';
import { FormData } from '../../lib/form-data-schema';
import {
  collection,
  addDoc,
  getDoc,
  query,
  QuerySnapshot,
  onSnapshot,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { db } from '../firebase-config/firebase-config';
import { useEffect, useState } from 'react';

interface Client {
  id: string;
  data: {
    availability?: string;
    email: string;
    fullName: string;
    instrument: string[];
    leadSource: string;
    phone: number;
    zipCode: number;
    message?: number;
  };
}

const FormInput = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      instrument: [],
    },
    resolver: zodResolver(schema),
  });

  const submitData = async (data: FormData) => {
    await addDoc(collection(db, 'prospects'), {
      data,
    });
    setFormSubmitted(true);
  };

  useEffect(() => {
    const q = query(collection(db, 'prospects'));
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let itemsArr: any = [];

      QuerySnapshot.forEach((doc) => {
        itemsArr.push({ ...doc.data(), id: doc.id });
      });
      setClients(itemsArr);
    });
  }, []);

  const deleteClient = async (id: string) => {
    await deleteDoc(doc(db, 'prospects', id));
  };

  return (
    <div>
      {formSubmitted ? (
        <h2>Form successfully submitted!</h2>
      ) : (
        <form onSubmit={handleSubmit(submitData)} className={styles.formInput}>
          <label className={styles.label}> First/Last Name* </label>
          {errors.fullName && (
            <span className={styles.errormessage}>
              {errors.fullName.message}
            </span>
          )}
          <input
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
          {errors.instrument && (
            <span className={styles.errormessage}>
              {errors.instrument.message}
            </span>
          )}
          <div className={styles.flex}>
            <div className={styles.checkbox}>
              <label className={styles.label}> Piano </label>

              <input
                className={styles.input}
                type='checkbox'
                {...register('instrument')}
                value='piano'
              />
            </div>
            <div className={styles.checkbox}>
              {' '}
              <label className={styles.label}> Guitar </label>
              <input
                className={styles.input}
                type='checkbox'
                {...register('instrument')}
                value='guitar'
              />
            </div>
            <div className={styles.checkbox}>
              {' '}
              <label className={styles.label}> Voice </label>
              <input
                className={styles.input}
                type='checkbox'
                {...register('instrument')}
                value='voice'
              />
            </div>
            <div className={styles.checkbox}>
              {' '}
              <label className={styles.label}> Drums </label>
              <input
                className={styles.input}
                type='checkbox'
                {...register('instrument')}
                value='drums'
              />
            </div>
            <div className={styles.checkbox}>
              {' '}
              <label className={styles.label}> Violin </label>
              <input
                className={styles.input}
                type='checkbox'
                {...register('instrument')}
                value='violin'
              />
            </div>
            <div className={styles.checkbox}>
              {' '}
              <label className={styles.label}> Other </label>
              <input
                className={styles.input}
                type='checkbox'
                {...register('instrument')}
                value='other'
              />
            </div>
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

          <input className={styles.submit} type='submit' />
        </form>
      )}

      <ul>
        {clients.map((item, id) => (
          <li key={id}>
            <div className={styles.customerCard}>
              <span
                onClick={() => deleteClient(item.id)}
                className={styles.deleteButton}
              >
                X
              </span>
              <p>Name: {item.data.fullName}</p>
              <p>Zip Code: {item.data.zipCode}</p>
              <p>Email: {item.data.email}</p>
              <p>Phone: {item.data.phone}</p>
              <p>Instruments: {item.data.instrument}</p>
              <p>LeadSource: {item.data.leadSource}</p>
              <p>Availability: {item.data.availability}</p>
              <p>Message: {item.data.message}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormInput;
