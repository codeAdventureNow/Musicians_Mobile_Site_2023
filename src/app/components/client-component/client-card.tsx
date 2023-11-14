import styles from './client-card.module.css';
import { useState } from 'react';

import style from '../form-input/form-input.module.css';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import schema from '../../lib/form-data-schema';
import { FormData } from '../../lib/form-data-schema';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase-config/firebase-config';
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
    message?: string;
  };
}

export const ClientCard = ({
  item,
  deleteClient,
}: {
  item: Client;
  deleteClient: any;
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = (id: string) => {
    setIsEditing((prev) => !prev);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      instrument: [],
      fullName: item.data.fullName,
      zipCode: item.data.zipCode,
      email: item.data.email,
      phone: item.data.phone,
      availability: item.data.availability,
      message: item.data.message,
      leadSource: item.data.leadSource,
    },
    resolver: zodResolver(schema),
  });

  const updateData = async (data: FormData) => {
    const clientDoc = doc(db, 'prospects', item.id);

    await updateDoc(clientDoc, {
      data,
    });
    setIsEditing((prev) => !prev);
  };

  return (
    <div>
      {isEditing ? (
        <form className={style.formInput}>
          <div className={styles.deleteButtonFlex}>
            <span
              onClick={handleSubmit(updateData)}
              className={styles.deleteButton}
            >
              Update
            </span>
          </div>
          <div className={styles.deleteButtonFlex}>
            <span
              onClick={() => deleteClient(item.id)}
              className={styles.deleteButton}
            >
              Delete
            </span>
          </div>
          <div className={styles.deleteButtonFlex}>
            <span
              onClick={() => toggleEdit(item.id)}
              className={styles.deleteButton}
            >
              Edit
            </span>
          </div>
          <label className={style.label}> First/Last Name* </label>
          {errors.fullName && (
            <span className={style.errormessage}>
              {errors.fullName.message}
            </span>
          )}
          <input
            className={style.input}
            type='text'
            {...register('fullName')}
          />

          <label className={style.label}> Zip Code* </label>
          {errors.zipCode && (
            <span className={style.errormessage}>{errors.zipCode.message}</span>
          )}
          <input
            className={style.input}
            type='number'
            {...register('zipCode', { valueAsNumber: true })}
          />

          <label className={style.label}> Email* </label>
          {errors.email && (
            <span className={style.errormessage}>{errors.email.message}</span>
          )}
          <input className={style.input} type='email' {...register('email')} />

          <label className={style.label}> Phone* </label>
          {errors.phone && (
            <span className={style.errormessage}>{errors.phone.message}</span>
          )}
          <input
            className={style.input}
            type='number'
            {...register('phone', { valueAsNumber: true })}
          />

          <label className={style.label}>
            {' '}
            Which musical instruments would you like to learn?*{' '}
          </label>
          {errors.instrument && (
            <span className={style.errormessage}>
              {errors.instrument.message}
            </span>
          )}
          <div className={style.flex}>
            <div className={style.checkbox}>
              <label className={style.label}> Piano </label>

              <input
                className={style.input}
                type='checkbox'
                {...register('instrument')}
                value='piano'
              />
            </div>
            <div className={style.checkbox}>
              {' '}
              <label className={style.label}> Guitar </label>
              <input
                className={style.input}
                type='checkbox'
                {...register('instrument')}
                value='guitar'
              />
            </div>
            <div className={style.checkbox}>
              {' '}
              <label className={style.label}> Voice </label>
              <input
                className={style.input}
                type='checkbox'
                {...register('instrument')}
                value='voice'
              />
            </div>
            <div className={style.checkbox}>
              {' '}
              <label className={style.label}> Drums </label>
              <input
                className={style.input}
                type='checkbox'
                {...register('instrument')}
                value='drums'
              />
            </div>
            <div className={style.checkbox}>
              {' '}
              <label className={style.label}> Violin </label>
              <input
                className={style.input}
                type='checkbox'
                {...register('instrument')}
                value='violin'
              />
            </div>
            <div className={style.checkbox}>
              {' '}
              <label className={style.label}> Other </label>
              <input
                className={style.input}
                type='checkbox'
                {...register('instrument')}
                value='other'
              />
            </div>
          </div>
          <label className={style.label}> How did you hear about us?* </label>
          {errors.leadSource && (
            <span className={style.errormessage}>
              {errors.leadSource.message}
            </span>
          )}
          <select className={style.leadSource} {...register('leadSource')}>
            <option className={style.leadSourceOption} value=''>
              Please choose an option
            </option>
            <option className={style.leadSourceOption} value='referral'>
              Referral
            </option>
            <option className={style.leadSourceOption} value='yelp'>
              Yelp!
            </option>
            <option className={style.leadSourceOption} value='google search'>
              Google Search
            </option>
            <option
              className={style.leadSourceOption}
              value='google sponsored ad'
            >
              Google Sponsored Ad
            </option>
            <option className={style.leadSourceOption} value='facebook'>
              Facebook
            </option>
            <option className={style.leadSourceOption} value='instagram'>
              Instagram
            </option>
            <option className={style.leadSourceOption} value='other'>
              Other
            </option>
          </select>

          <label className={style.label}>
            {' '}
            What is your availability for music lessons?{' '}
          </label>
          {errors.availability && (
            <span className={style.errormessage}>
              {errors.availability.message}
            </span>
          )}
          <input
            className={style.input}
            type='text'
            {...register('availability')}
            placeholder='Mon 3-6pm, Sat 8-10am'
          />

          <label className={style.label}> Additional info </label>
          {errors.message && (
            <span className={style.errormessage}>{errors.message.message}</span>
          )}
          <textarea
            className={style.textarea}
            {...register('message')}
            placeholder='Daughter is a beginner, 8 years old, likes Taylor Swift'
          />
        </form>
      ) : (
        <li>
          <div className={styles.customerCard}>
            <div className={styles.deleteButtonFlex}>
              <span
                onClick={() => deleteClient(item.id)}
                className={styles.deleteButton}
              >
                Delete
              </span>
            </div>
            <div className={styles.deleteButtonFlex}>
              <span
                onClick={() => toggleEdit(item.id)}
                className={styles.deleteButton}
              >
                Edit
              </span>
            </div>

            <div className={styles.field_edit}>
              <p className={styles.printedFields}>
                Name: {item.data.fullName}{' '}
              </p>
            </div>

            <div className={styles.field_edit}>
              <p className={styles.printedFields}>
                Zip Code: {item.data.zipCode}
              </p>
            </div>

            <div className={styles.field_edit}>
              <p className={styles.printedFields}>Email: {item.data.email}</p>
            </div>
            <div className={styles.field_edit}>
              <p className={styles.printedFields}>Phone: {item.data.phone}</p>
            </div>
            <div className={styles.field_edit}>
              <p className={styles.printedFields}>
                Instruments: {item.data.instrument}
              </p>
            </div>
            <div className={styles.field_edit}>
              <p className={styles.printedFields}>
                LeadSource: {item.data.leadSource}
              </p>
            </div>
            <div className={styles.field_edit}>
              <p className={styles.printedFields}>
                Availability: {item.data.availability}
              </p>
            </div>
            <div className={styles.field_edit}>
              <p className={styles.printedFields}>
                Message: {item.data.message}
              </p>
            </div>
          </div>
        </li>
      )}
    </div>
  );
};
