'use client';
import React, { useState, useEffect } from 'react';
import styles from "./reviews.module.css";
export default function Reviews() {
    const [resourceType, setResourceType] = useState(null);
    const [reviewData, setReviewData] = useState({ text: '', author: '' });
    useEffect(() => {
        if (resourceType) {
            fetch(`https://seal-app-336e8.ondigitalocean.app/reviews?country=${resourceType}`)
                .then(response => response.json())
                .then(data => setReviewData(data)
                );
        }
    }, [resourceType]);
    return (
        <>
            <div>
                <h1 className={styles.reviewsTitle}>Trusted.</h1>
                <hr className={styles.reviewsSeparator} />
                <p className={styles.reviewsDesc}>We've got thousands of happy customers all over the UK. Choose your country to see the latest review:</p>
                <button className={styles.reviewsButton} onClick={() => setResourceType('england')}>England</button>
                <button className={styles.reviewsButton} onClick={() => setResourceType('wales')}>Wales</button>
                <button className={styles.reviewsButton} onClick={() => setResourceType('scotland')}>Scotland</button>
            </div>
            <div className={styles.reviewExample}>
                <p>{reviewData.text}</p>
                <p>{reviewData.author}</p>
            </div>
        </>
    );
}