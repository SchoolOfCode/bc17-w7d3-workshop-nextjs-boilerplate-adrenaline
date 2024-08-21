"use client";
import React, { useState } from "react";
import styles from "./formLegend.module.css"

export default function ContactForm() {
  const [fields, setFields] = useState({
    name: "",
    postcode: "",
    house: "",
    city: "",
    number: "",
    email: "",
  });
  const [error, setError] = useState(false);

  // Update the state based on which input field is being changed
  function handleChange(event) {
    const { name, value } = event.target;
    setFields({
      ...fields, // Spread the existing fields
      [name]: value, // Update the specific field that changed
    });

    setError("");
  }

  // if any field value is empty, then display an error

  function handleSubmit(event) {
    event.preventDefault();
    if (
      !fields.name ||
      !fields.postcode ||
      !fields.house ||
      !fields.city ||
      !fields.number ||
      !fields.email
    ) {
      setError("Please fill out all fields.");
      return;
    }
    console.log(fields);
  }

  return (
    <>
      <form className={styles.fullForm} onSubmit={handleSubmit}>
        <fieldset className={styles.fieldset}>

          <legend className={styles.title}>Personal Information</legend>

          <label htmlFor="name" className={styles.formLabel}>Full Name</label>
          <input
            className={styles.input}
            type="text"
            id="name"
            name="name"
            value={fields.name}
            onChange={handleChange}
          />

          <label htmlFor="postcode" className={styles.formLabel}>Postcode</label>
          <input
            className={styles.input}
            type="text"
            id="postcode"
            name="postcode"
            value={fields.postcode}
            onChange={handleChange}
          />

          <label htmlFor="house" className={styles.formLabel}>House/Flat Number and Street Name</label>
          <input
            className={styles.input}
            type="text"
            id="house"
            name="house"
            value={fields.house}
            onChange={handleChange}
          />

          <label htmlFor="city" className={styles.formLabel}>City</label>
          <input
            className={styles.input}
            type="text"
            id="city"
            name="city"
            value={fields.city}
            onChange={handleChange}
          />        
          </fieldset>

        <fieldset className={styles.fieldset}>
          <legend className={styles.title}>Contact Information</legend>

          <label htmlFor="number" className={styles.formLabel}>Phone number</label>
          <input
            className={styles.input}
            type="number"
            id="number"
            name="number"
            value={fields.number}
            onChange={handleChange}
          />

          <label htmlFor="email" className={styles.formLabel}>Email</label>
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
            value={fields.email}
            onChange={handleChange}
          />
        </fieldset>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit" className={styles.button}>Request Design Consultation</button>

      </form>
    </>
  );
}
