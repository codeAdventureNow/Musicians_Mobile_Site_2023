'use client';
import styles from './clients.module.css';
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
import { db } from '../components/firebase-config/firebase-config';
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

export default async function About() {
  const [clients, setClients] = useState<Client[]>([]);
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
      <h2 className={styles.paragraph}>Welcome to the clients page</h2>
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
}
