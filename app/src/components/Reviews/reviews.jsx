'use client';

import { useState, useEffect } from 'react';
import styles from "./reviews.module.css";

export default function Reviews() {
  const [resourceType, setResourceType] = useState(null);
  const [items, setItems] = useState([]);

  console.log(items);

  useEffect(() => {
    if (resourceType) {
      fetch(`https://seal-app-336e8.ondigitalocean.app/reviews?country=${resourceType}`)
        .then(response => response.json())
        .then(data => setItems(data));
    }
  }, [resourceType]);

  function handleResourceTypeChange(name) {
    setResourceType(name);
  }

  return (
    <>
      <div>
        <h1 className={styles.reviewsTitle}>Trusted.</h1>
        <hr className={styles.reviewsSeparator}></hr>

        <p className={styles.reviewsDesc}>
          We've got thousands of happy customers all over the UK. Choose your country to see the latest review:
        </p>

        <button className={styles.reviewsButton} onClick={() => handleResourceTypeChange('england')}>
          England
        </button>
        <button className={styles.reviewsButton} onClick={() => handleResourceTypeChange('wales')}>
          Wales
        </button>
        <button className={styles.reviewsButton} onClick={() => handleResourceTypeChange('scotland')}>
          Scotland
        </button>
        { items && JSON.stringify(items) }

      </div>
      <p className={styles.reviewExample}>{resourceType}</p>
    </>
  );
}