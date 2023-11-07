import styles from './client-card.module.css';
import { useState } from 'react';

export const ClientCard = ({ item, deleteClient }) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = (id: string) => {
    setIsEditing((prev) => !prev);
  };

  const handleOnChange = () => {
    console.log('hello on change');
  };
  return (
    <div>
      {isEditing ? (
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
              <p className={styles.printedFields}>Name:</p>
              <input
                onChange={handleOnChange}
                type='text'
                value={item.data.fullName}
              />
            </div>

            <div className={styles.field_edit}>
              <p className={styles.printedFields}>Zip Code:</p>
              <input
                onChange={handleOnChange}
                type='text'
                value={item.data.zipCode}
              />
            </div>

            <div className={styles.field_edit}>
              <p className={styles.printedFields}>Email:</p>
              <input
                onChange={handleOnChange}
                type='email'
                value={item.data.email}
              />
            </div>
            <div className={styles.field_edit}>
              <p className={styles.printedFields}>Phone:</p>
              <input
                onChange={handleOnChange}
                type='number'
                value={item.data.phone}
              />
            </div>
            <div className={styles.field_edit}>
              <p className={styles.printedFields}>Instruments:</p>
              <input
                onChange={handleOnChange}
                type='text'
                value={item.data.instrument}
              />
            </div>
            <div className={styles.field_edit}>
              <p className={styles.printedFields}>LeadSource:</p>
              <input
                onChange={handleOnChange}
                type='text'
                value={item.data.leadSource}
              />
            </div>
            <div className={styles.field_edit}>
              <p className={styles.printedFields}>Availability:</p>
              <input
                onChange={handleOnChange}
                type='text'
                value={item.data.availability}
              />
            </div>
            <div className={styles.field_edit}>
              <p className={styles.printedFields}>Message:</p>
              <input onChange={handleOnChange} value={item.data.message} />
            </div>
          </div>
        </li>
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
