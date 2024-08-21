"use client";
import React, { useState, useReducer } from "react";
import styles from "./ReContactForm.module.css";
import { formReducer, initialFormState } from "./UseReducer";


// function to handle form submission and error handling
export default function ContactForm() {
  // useReducer hook to manage the form state and dispatch actions to update the state
  const [formState, dispatch] = useReducer(formReducer, initialFormState);

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch({
      type: "HANDLE_INPUT_TEXT",
      field: name,
      payload: value,
    });
    dispatch({
      type: "SET_ERROR",
      payload: ""
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    // Prevent the default form submission behavior which refreshes the page
    event.preventDefault();
    // const { name, postcode, house, city, number, email } = fields = formState.fields;
    // if any field value is empty, then display an error
    const { name, postcode, house, city, number, email } = formState.fields;
    if (!name || !postcode || !house || !city || !number || !email) {
      // dispatch an action to update the error message in the state
      // payload is the error message that we want to display
      dispatch({
        type: "SET_ERROR",
        payload: "Please fill out all fields."
      });
      return;
    }
    // Log the form fields if all fields are filled out correctly
    console.log(formState.fields);
  };

  return (
    <>
      <form className={styles.fullForm} onSubmit={handleSubmit}>
        <fieldset className={styles.fieldset}>
          <legend className={styles.title}>Personal Information</legend>

          <label htmlFor="name" className={styles.formLabel}>
            Full Name
          </label>
          <input
            className={styles.input}
            type="text"
            id="name"
            name="name"
            value={formState.fields.name}
            onChange={handleChange}
          />

          <label htmlFor="postcode" className={styles.formLabel}>
            Postcode
          </label>
          <input
            className={styles.input}
            type="text"
            id="postcode"
            name="postcode"
            value={formState.fields.postcode}
            onChange={handleChange}
          />

          <label htmlFor="house" className={styles.formLabel}>
            House/Flat Number and Street Name
          </label>
          <input
            className={styles.input}
            type="text"
            id="house"
            name="house"
            value={formState.fields.house}
            onChange={handleChange}
          />

          <label htmlFor="city" className={styles.formLabel}>
            City
          </label>
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

          <label htmlFor="number" className={styles.formLabel}>
            Phone number
          </label>
          <input
            className={styles.input}
            type="number"
            id="number"
            name="number"
            value={formState.fields.number}
            onChange={handleChange}
          />

          <label htmlFor="email" className={styles.formLabel}>
            Email
          </label>
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
            value={formState.fields.email}
            onChange={handleChange}
          />
        </fieldset>

        {formState.error && <p style={{ color: "red" }}>{formState.error}</p>}

        <button type="submit" className={styles.button}>
          Request Design Consultation
        </button>
      </form>
    </>
  );
}
