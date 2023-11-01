'use client';
import styles from './client-component.module.css';
import {
  collection,
  addDoc,
  getDoc,
  query,
  QuerySnapshot,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../firebase-config/firebase-config';
import { useEffect, useState, useRef } from 'react';
import { BiEditAlt } from 'react-icons/bi';
import { FormData } from '../../lib/form-data-schema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import schema from '../../lib/form-data-schema';

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

export default function ClientComponent() {
  const [clients, setClients] = useState<Client[]>([]);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      instrument: [],
    },
    resolver: zodResolver(schema),
  });
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

  const deleteClient = (id: string) => {
    deleteDoc(doc(db, 'prospects', id));
  };

  // const updateData = (id: string) => {
  //   console.log('submitted');
  //   updateDoc(doc(db, 'prospects', id), {
  //     fullName: 'Gilberto Vegas',
  //   });
  // };

  // const updateData = async (data: FormData) => {
  //   console.log('hello');
  //   const brookeDocRef = doc(db, 'prospects', 'Brooke Sheels');
  //   console.log('submitted');
  //   await updateDoc(brookeDocRef, {
  //     fullName: 'Gilberto Vegas',
  //   });
  // };
  // console.log(clients);

  // const updateData = async (data: FormData) => {
  //   console.log('hello');
  //   e.preventDefault();

  //   const docRef = doc(db, 'prospects', id);

  //   await updateDoc(docRef, {
  //     fullName: 'Yaz Regner',
  //   });
  // };

  // const updateData = () => {
  //   console.log('hello');
  // };

  // console.log(clients);

  return (
    <div>
      <form onSubmit={setValue(updateData)} className={styles.update}>
        <label htmlFor='id'>Document id:</label>
        <input type='text' name='id' />

        <button>Update Name</button>
      </form>

      <ul className={styles.flex}>
        {clients.map((item, id) => (
          <li key={id}>
            <div className={styles.customerCard}>
              <div className={styles.deleteButtonFlex}>
                <span
                  onClick={() => deleteClient(item.id)}
                  className={styles.deleteButton}
                >
                  Delete
                </span>
              </div>

              <div className={styles.field_edit}>
                <p className={styles.printedFields}>
                  Name: {item.data.fullName}{' '}
                </p>
                <BiEditAlt className={styles.pencil_icon} />
              </div>

              <div className={styles.field_edit}>
                <p className={styles.printedFields}>
                  Zip Code: {item.data.zipCode}
                </p>
                <BiEditAlt className={styles.pencil_icon} />
              </div>

              <div className={styles.field_edit}>
                <p className={styles.printedFields}>Email: {item.data.email}</p>
                <BiEditAlt className={styles.pencil_icon} />
              </div>
              <div className={styles.field_edit}>
                <p className={styles.printedFields}>Phone: {item.data.phone}</p>
                <BiEditAlt className={styles.pencil_icon} />
              </div>
              <div className={styles.field_edit}>
                <p className={styles.printedFields}>
                  Instruments: {item.data.instrument}
                </p>
                <BiEditAlt className={styles.pencil_icon} />
              </div>
              <div className={styles.field_edit}>
                <p className={styles.printedFields}>
                  LeadSource: {item.data.leadSource}
                </p>
                <BiEditAlt className={styles.pencil_icon} />
              </div>
              <div className={styles.field_edit}>
                <p className={styles.printedFields}>
                  Availability: {item.data.availability}
                </p>
                <BiEditAlt className={styles.pencil_icon} />
              </div>
              <div className={styles.field_edit}>
                <p className={styles.printedFields}>
                  Message: {item.data.message}
                </p>
                <BiEditAlt className={styles.pencil_icon} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
