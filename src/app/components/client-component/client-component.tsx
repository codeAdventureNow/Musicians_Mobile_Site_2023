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
} from 'firebase/firestore';
import { db } from '../firebase-config/firebase-config';
import { useEffect, useState, useRef } from 'react';
import { BiEditAlt } from 'react-icons/bi';
import { ClientCard } from './client-card';

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
    isEditing?: boolean;
  };
}

export default function ClientComponent() {
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

  const deleteClient = (id: string) => {
    deleteDoc(doc(db, 'prospects', id));
  };

  return (
    <div>
      <ul className={styles.flex}>
        {clients.map((item: any, id: any) => (
          <ClientCard deleteClient={deleteClient} item={item} key={id} />
        ))}
      </ul>
    </div>
  );
}
