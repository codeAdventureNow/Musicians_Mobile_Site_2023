'use client';
import styles from './client-card.module.css';
import formstyle from '../form-input/form-input.module.css';
import { leadSourceOptions } from '../lead-source/lead-source';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import schema from '../../lib/form-data-schema';
import { FormData } from '../../lib/form-data-schema';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase-config/firebase-config';
import { Client } from './client-component';
import {
  InstrumentCheckbox,
  instrumentOptions,
} from '../instrument-checkbox/instrument-checkbox';

import { PencilAltIcon, TrashIcon, XIcon } from '@heroicons/react/solid';

import { IoSaveOutline } from 'react-icons/io5';

export type DeleteClient = (id: string) => void;

interface ClientCard {
  client: Client;
  deleteClient: DeleteClient;
}

export const ClientCard = ({ client, deleteClient }: ClientCard) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = (id: string) => {
    setIsEditing((prev) => !prev);
  };

  const {
    instruments,
    fullName,
    zipCode,
    email,
    phone,
    availability,
    message,
    leadSource,
    date,
  } = client.data;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      instruments: instruments,
      fullName: fullName,
      zipCode: zipCode,
      email: email,
      phone: phone,
      availability: availability,
      message: message,
      leadSource: leadSource,
      date: date,
    },
    resolver: zodResolver(schema),
  });

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
        <form className={styles.formInput}>
          <div className={styles.deleteButtonFlex}>
            <IoSaveOutline
              onClick={handleSubmit(updateData)}
              className={styles.reactIconsSave}
            />
            <TrashIcon
              onClick={() => deleteClient(client.id)}
              className={styles.reactIcons}
            />
            <XIcon
              onClick={() => toggleEdit(client.id)}
              className={styles.reactIcons}
            />
          </div>

          {errors.fullName && (
            <span className={styles.errorMessage}>
              {errors.fullName.message}
            </span>
          )}
          <div className={styles.field_edit_flexbox}>
            <label className={styles.field_edit}> Name: </label>

            <input
              className={styles.input}
              type='text'
              {...register('fullName')}
            />
          </div>

          {errors.zipCode && (
            <span className={styles.errorMessage}>
              {errors.zipCode.message}
            </span>
          )}
          <div className={styles.field_edit_flexbox}>
            <label className={styles.field_edit}> Zip Code: </label>

            <input
              className={styles.inputNumber}
              type='number'
              {...register('zipCode', { valueAsNumber: true })}
            />
          </div>

          {errors.email && (
            <span className={styles.errorMessage}>{errors.email.message}</span>
          )}
          <div className={styles.field_edit_flexbox}>
            <label className={styles.field_edit}> Email: </label>

            <input
              className={styles.input}
              type='email'
              {...register('email')}
            />
          </div>

          {errors.phone && (
            <span className={styles.errorMessage}>{errors.phone.message}</span>
          )}
          <div className={styles.field_edit_flexbox}>
            <label className={styles.field_edit}> Phone: </label>

            <input
              className={styles.inputNumber}
              type='number'
              {...register('phone', { valueAsNumber: true })}
            />
          </div>

          <label className={formstyle.label}>
            {' '}
            Which musical instruments would you like to learn?*{' '}
          </label>
          {errors.instruments && (
            <span className={styles.errorMessage}>
              {errors.instruments.message}
            </span>
          )}

          <div className={formstyle.flex}>
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
          <label className={formstyle.label}>
            {' '}
            How did you hear about us?*{' '}
          </label>
          {errors.leadSource && (
            <span className={styles.errorMessage}>
              {errors.leadSource.message}
            </span>
          )}
          <select className={formstyle.leadSource} {...register('leadSource')}>
            <option className={formstyle.leadSourceOption} value=''>
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

          <label className={formstyle.label}>
            {' '}
            What is your availability for music lessons?{' '}
          </label>
          {errors.availability && (
            <span className={styles.errorMessage}>
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
            <span className={styles.errorMessage}>
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
              <PencilAltIcon
                onClick={() => toggleEdit(client.id)}
                className={styles.reactIcons}
              />
              <TrashIcon
                onClick={() => deleteClient(client.id)}
                className={styles.reactIcons}
              />
            </div>

            <div className={styles.field_edit}>
              <p className={styles.date}> {date} </p>
            </div>

            <div className={styles.field_edit}>
              <p className={styles.printedFields}>Name: {fullName} </p>
            </div>

            <div className={styles.field_edit}>
              <p className={styles.printedFields}>Zip Code: {zipCode}</p>
            </div>

            <div className={styles.field_edit}>
              <p className={styles.printedFields}>Email: {email}</p>
            </div>
            <div className={styles.field_edit}>
              <p className={styles.printedFields}>Phone: {phone}</p>
            </div>
            <div className={styles.field_edit}>
              <div className={styles.printedFields}>
                Instruments:{' '}
                {instruments.map((instrument) => {
                  return (
                    <p key={instrument} className={styles.instrument}>
                      {instrument}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className={styles.field_edit}>
              <p className={styles.printedFields}>LeadSource: {leadSource}</p>
            </div>
            <div className={styles.field_edit}>
              <p className={styles.printedFields}>
                Availability: {availability}
              </p>
            </div>
            <div className={styles.field_edit}>
              <p className={styles.printedFields}>Message: {message}</p>
            </div>
          </div>
        </li>
      )}
    </div>
  );
};
