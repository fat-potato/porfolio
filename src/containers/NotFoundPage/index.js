import React from 'react';
import styles from './styles.scss';

const NotFound = () => (
  <div className={styles.content}>
    <div className={styles.errorContainer}>
      <h1 className={styles.h1}>404 page not found</h1>
      <p>We are sorry but the page you are looking for does not exist.</p>
    </div>
  </div>
);

export default NotFound;
