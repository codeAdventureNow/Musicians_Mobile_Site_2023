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
  instruments,
} from '../instrument-checkbox/instrument-checkbox';

type DeleteClient = (id: string) => void;

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
    instrument,
    fullName,
    zipCode,
    email,
    phone,
    availability,
    message,
    leadSource,
  } = client.data;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      instrument: instrument,
      fullName: fullName,
      zipCode: zipCode,
      email: email,
      phone: phone,
      availability: availability,
      message: message,
      leadSource: leadSource,
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

          <div className={formstyle.flex}>
            {instruments.map((instrument: string) => {
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
            <span className={formstyle.errormessage}>
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
