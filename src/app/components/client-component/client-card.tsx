import styles from './client-card.module.css';
import { useState } from 'react';

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

export const ClientCard = ({ item, deleteClient }) => {
  const [editCardData, setEditCardData] = useState(false);

  const toggleEdit = (id: string) => {
    console.log(
      'toggle edit, lifting state up to parent component which is client component',
      id,
      editCardData
    );
    setEditCardData(!editCardData);
  };
  return (
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
          <p className={styles.printedFields}>Name: {item.data.fullName} </p>
        </div>

        <div className={styles.field_edit}>
          <p className={styles.printedFields}>Zip Code: {item.data.zipCode}</p>
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
          <p className={styles.printedFields}>Message: {item.data.message}</p>
        </div>
      </div>
    </li>
  );
};
