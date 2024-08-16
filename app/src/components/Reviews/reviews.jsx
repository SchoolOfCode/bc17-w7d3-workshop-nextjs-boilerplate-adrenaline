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

        <button className={styles.reviewsButton} onClick={() => setResourceType('"This is England actually a longer description and I need to check if it scales properly bla bla bla some more text we couldnt be more proud and blown away 😊🏆"')}>England</button>
        <button className={styles.reviewsButton} onClick={() => setResourceType('"This is Wales actually a longer description and I need to check if it scales properly bla bla bla some more text we couldnt be more proud and blown away 😊🏆"')}>Wales</button>
        <button className={styles.reviewsButton} onClick={() => setResourceType('"This is Scotland actually a longer description and I need to check if it scales properly bla bla bla some more text we couldnt be more proud and blown away 😊🏆"')}>Scotland</button>
      </div>
      <p className={styles.reviewExample}>{resourceType}</p>
    </>
  )
}