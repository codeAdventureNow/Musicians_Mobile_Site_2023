'use client';
import styles from './client-component.module.css';
import {
  collection,
  query,
  onSnapshot,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { db } from '../firebase-config/firebase-config';
import { useEffect, useState } from 'react';

import { ClientCard } from './client-card';

export interface Client {
  id: string;
  data: {
    availability?: string;
    email: string;
    fullName: string;
    instruments: string[];
    leadSource: string;
    phone: number;
    zipCode: number;
    message?: string;
    date: string;
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
        {clients.map((client: Client, id) => (
          <ClientCard deleteClient={deleteClient} client={client} key={id} />
        ))}
      </ul>
    </div>
  );
}
