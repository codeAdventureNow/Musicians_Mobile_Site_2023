'use client';
import styles from './client-card.module.css';
import formstyle from '../form-input/form-input.module.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import schema from '../../lib/form-data-schema';
import { FormData } from '../../lib/form-data-schema';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase-config/firebase-config';
import { Client } from './client-component';
import InstrumentCheckbox from '../instrument-checkbox/instrument-checkbox';

interface ClientCard {
  client: Client;
  deleteClient: any;
}

export const ClientCard = ({ client, deleteClient }: ClientCard) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = (id: string) => {
    setIsEditing((prev) => !prev);
  };

  const instruments: string[] = [
    'piano',
    'guitar',
    'voice',
    'drums',
    'violin',
    'other',
  ];

  const { instrument, fullName, zipCode } = client.data;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      instrument: instrument,
      fullName: client.data.fullName,
      zipCode: client.data.zipCode,
      email: client.data.email,
      phone: client.data.phone,
      availability: client.data.availability,
      message: client.data.message,
      leadSource: client.data.leadSource,
    },
    resolver: zodResolver(schema),
  });

  // clean up repetition of client.data above

  // const checkboxes = (instruments) => {
  //   <div></div>;
  // };

  const updateData = async (data: FormData) => {
    const clientDoc = doc(db, 'prospects', client.id);

    await updateDoc(clientDoc, {
      data,
    });
    setIsEditing((prev) => !prev);
  };

  return (
    <div>
      {isEditing ? (
        <form className={formstyle.formInput}>
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
              onClick={() => deleteClient(client.id)}
              className={styles.deleteButton}
            >
              Delete
            </span>
          </div>
          <div className={styles.deleteButtonFlex}>
            <span
              onClick={() => toggleEdit(client.id)}
              className={styles.deleteButton}
            >
              Edit
            </span>
          </div>
          <label className={formstyle.label}> First/Last Name* </label>
          {errors.fullName && (
            <span className={formstyle.errormessage}>
              {errors.fullName.message}
            </span>
          )}
          <input
            className={formstyle.input}
            type='text'
            {...register('fullName')}
          />

          <label className={formstyle.label}> Zip Code* </label>
          {errors.zipCode && (
            <span className={formstyle.errormessage}>
              {errors.zipCode.message}
            </span>
          )}
          <input
            className={formstyle.input}
            type='number'
            {...register('zipCode', { valueAsNumber: true })}
          />

          <label className={formstyle.label}> Email* </label>
          {errors.email && (
            <span className={formstyle.errormessage}>
              {errors.email.message}
            </span>
          )}
          <input
            className={formstyle.input}
            type='email'
            {...register('email')}
          />

          <label className={formstyle.label}> Phone* </label>
          {errors.phone && (
            <span className={formstyle.errormessage}>
              {errors.phone.message}
            </span>
          )}
          <input
            className={formstyle.input}
            type='number'
            {...register('phone', { valueAsNumber: true })}
          />

          <label className={formstyle.label}>
            {' '}
            Which musical instruments would you like to learn?*{' '}
          </label>
          {errors.instrument && (
            <span className={formstyle.errormessage}>
              {errors.instrument.message}
            </span>
          )}

          {/* checkbox component - const instruments = [Piano, Guitar] */}
          {/* label styling textTransform : capitalize */}
          <div className={formstyle.flex}>
            {instruments.map((instrument: string, index: number) => {
              console.log(instrument);
              return (
                <InstrumentCheckbox
                  register={register}
                  instrument={instrument}
                  key={instrument}
                />
              );
            })}

            {/* <div className={formstyle.checkbox}>
              <label className={formstyle.label}> Piano </label>

              <input
                className={formstyle.input}
                type='checkbox'
                {...register('instrument')}
                value='piano'
              />
            </div>
            <div className={formstyle.checkbox}>
              {' '}
              <label className={formstyle.label}> Guitar </label>
              <input
                className={formstyle.input}
                type='checkbox'
                {...register('instrument')}
                value='guitar'
              />
            </div>
            <div className={formstyle.checkbox}>
              {' '}
              <label className={formstyle.label}> Voice </label>
              <input
                className={formstyle.input}
                type='checkbox'
                {...register('instrument')}
                value='voice'
              />
            </div>
            <div className={formstyle.checkbox}>
              {' '}
              <label className={formstyle.label}> Drums </label>
              <input
                className={formstyle.input}
                type='checkbox'
                {...register('instrument')}
                value='drums'
              />
            </div>
            <div className={formstyle.checkbox}>
              {' '}
              <label className={formstyle.label}> Violin </label>
              <input
                className={formstyle.input}
                type='checkbox'
                {...register('instrument')}
                value='violin'
              />
            </div>
            <div className={formstyle.checkbox}>
              {' '}
              <label className={formstyle.label}> Other </label>
              <input
                className={formstyle.input}
                type='checkbox'
                {...register('instrument')}
                value='other'
              />
            </div> */}
          </div>
          <label className={formstyle.label}>
            {' '}
            How did you hear about us?*{' '}
          </label>
          {errors.leadSource && (
            <span className={formstyle.errormessage}>
              {errors.leadSource.message}
            </span>
          )}
          <select className={formstyle.leadSource} {...register('leadSource')}>
            <option className={formstyle.leadSourceOption} value=''>
              Please choose an option
            </option>
            <option className={formstyle.leadSourceOption} value='referral'>
              Referral
            </option>
            <option className={formstyle.leadSourceOption} value='yelp'>
              Yelp!
            </option>
            <option
              className={formstyle.leadSourceOption}
              value='google search'
            >
              Google Search
            </option>
            <option
              className={formstyle.leadSourceOption}
              value='google sponsored ad'
            >
              Google Sponsored Ad
            </option>
            <option className={formstyle.leadSourceOption} value='facebook'>
              Facebook
            </option>
            <option className={formstyle.leadSourceOption} value='instagram'>
              Instagram
            </option>
            <option className={formstyle.leadSourceOption} value='other'>
              Other
            </option>
          </select>

          <label className={formstyle.label}>
            {' '}
            What is your availability for music lessons?{' '}
          </label>
          {errors.availability && (
            <span className={formstyle.errormessage}>
              {errors.availability.message}
            </span>
          )}
          <input
            className={formstyle.input}
            type='text'
            {...register('availability')}
            placeholder='Mon 3-6pm, Sat 8-10am'
          />

          <label className={formstyle.label}> Additional info </label>
          {errors.message && (
            <span className={formstyle.errormessage}>
              {errors.message.message}
            </span>
          )}
          <textarea
            className={formstyle.textarea}
            {...register('message')}
            placeholder='Daughter is a beginner, 8 years old, likes Taylor Swift'
          />
        </form>
      ) : (
        <li>
          <div className={styles.customerCard}>
            <div className={styles.deleteButtonFlex}>
              <span
                onClick={() => deleteClient(client.id)}
                className={styles.deleteButton}
              >
                Delete
              </span>
            </div>
            <div className={styles.deleteButtonFlex}>
              <span
                onClick={() => toggleEdit(client.id)}
                className={styles.deleteButton}
              >
                Edit
              </span>
            </div>

            <div className={styles.field_edit}>
              <p className={styles.printedFields}>
                Name: {client.data.fullName}{' '}
              </p>
            </div>

            <div className={styles.field_edit}>
              <p className={styles.printedFields}>
                Zip Code: {client.data.zipCode}
              </p>
            </div>

            <div className={styles.field_edit}>
              <p className={styles.printedFields}>Email: {client.data.email}</p>
            </div>
            <div className={styles.field_edit}>
              <p className={styles.printedFields}>Phone: {client.data.phone}</p>
            </div>
            <div className={styles.field_edit}>
              <p className={styles.printedFields}>
                Instruments: {client.data.instrument}
              </p>
            </div>
            <div className={styles.field_edit}>
              <p className={styles.printedFields}>
                LeadSource: {client.data.leadSource}
              </p>
            </div>
            <div className={styles.field_edit}>
              <p className={styles.printedFields}>
                Availability: {client.data.availability}
              </p>
            </div>
            <div className={styles.field_edit}>
              <p className={styles.printedFields}>
                Message: {client.data.message}
              </p>
            </div>
          </div>
        </li>
      )}
    </div>
  );
};
