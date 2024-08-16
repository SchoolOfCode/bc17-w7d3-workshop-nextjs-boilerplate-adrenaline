'use client';
import React, { useState } from 'react'
import styles from "./reviews.module.css";

export default function Reviews() {
  const [resourceType, setResourceType] = useState('england')


  return (
    <>
      <div>
        <h1 className={styles.reviewsTitle}>Trusted.</h1>
        <hr className={styles.reviewsSeparator}></hr>

        <p className={styles.reviewsDesc}>We've got thousands of happy customers all over the UK. Choose your country to see the latest review:</p>

        <button className={styles.reviewsButton} onClick={() => setResourceType('england')}>England</button>
        <button className={styles.reviewsButton} onClick={() => setResourceType('wales')}>Wales</button>
        <button className={styles.reviewsButton} onClick={() => setResourceType('scotland')}>Scotland</button>
      </div>
      <h1>{resourceType}</h1>
    </>
  )

}