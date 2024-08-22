"use client";
import React, { useState, useReducer } from "react";
import styles from "./ReContactForm.module.css";
import { formReducer, initialFormState } from "./UseReducer";

// function to handle form submission and error handling
export default function ContactForm() {
  const [formState, dispatch] = useReducer(formReducer, initialFormState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch({
      type: "HANDLE_INPUT_TEXT",
      field: name,
      payload: value,
    });
    // Clear the error when the user starts typing again
    dispatch({
      type: "HANDLE_ERROR",
      payload: "",
    });
  };

  // Handle submit function
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: "FORM_SUBMITTING",
      // payload: "Form successfully submitted."
    });

    const { name, postcode, house, city, number, email } = formState.fields;
    if (!name || !postcode || !house || !city || !number || !email) {
      dispatch({
        type: "HANDLE_ERROR",
        payload: "Please fill out all fields.",  // Set the error message
      });
      return;
    } else {
      setTimeout(() => {

        dispatch({
          type: "FORM_SUCCESS",
          // payload: "Form successfully submitted.",
        });
        console.log("Submit successful")
  
      }, 3000);
    }
    console.log(formState.fields);
  };

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
            value={formState.fields.name}
            onChange={handleChange}
          />

          <label htmlFor="postcode" className={styles.formLabel}>Postcode</label>
          <input
            className={styles.input}
            type="text"
            id="postcode"
            name="postcode"
            value={formState.fields.postcode}
            onChange={handleChange}
          />

          <label htmlFor="house" className={styles.formLabel}>House/Flat Number and Street Name</label>
          <input
            className={styles.input}
            type="text"
            id="house"
            name="house"
            value={formState.fields.house}
            onChange={handleChange}
          />

          <label htmlFor="city" className={styles.formLabel}>City</label>
          <input
            className={styles.input}
            type="text"
            id="city"
            name="city"
            value={formState.fields.city}
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
            value={formState.fields.number}
            onChange={handleChange}
          />

          <label htmlFor="email" className={styles.formLabel}>Email</label>
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
            value={formState.fields.email}
            onChange={handleChange}
          />
        </fieldset>

        {formState.errorStatus && (
          <p style={{ color: "red" }}>{formState.errorStatus}</p>
        )}

        <button type="submit" className={styles.button}>
          {formState.loading ? 'Submitting' : 'Request Design Consultation'}
        </button>

      </form>

      {formState.submitStatus && (
        <div className={styles.overlay}>
          <div>
            <p className={styles.overlayMessage}>Form submitted successfully!</p>
            <a href="http://localhost:3000/">Return to the Homepage</a>
          </div>
        </div>
      )}
    </>
  );
}