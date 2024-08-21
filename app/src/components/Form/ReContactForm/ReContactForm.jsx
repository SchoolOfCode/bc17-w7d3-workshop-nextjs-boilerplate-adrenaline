"use client";
import React, { useState, useReducer } from "react";
import styles from "./ContactForm.module.css";

// Initial state of the form and error message which will be updated based on user input but start as empty
const initialFormState = {
  fields: {
    name: "",
    postcode: "",
    house: "",
    city: "",
    number: "",
    email: "",
  },
  errorStatus: "",
};

// Update the state based on which input field is being changed
// switch statement to handle different types of actions that can be dispatched
const formReducer = (state, action) => {
  switch (action.type) {
    // case to handle input text changes in the form
    case "HANDLE_INPUT_TEXT":
      return {
        ...state,
        // Update the specific field that changed in the fields object
        // [action.field] is the key in the fields object that we want to update
        // action.payload is the value that we want to update the key with
        [action.field]: action.payload,
      };
    // below case to handle form submission error
    case "HANDLE_ERROR":
      return {
        ...state,
        // Update the error message
        error: action.payload,
      };
    // default case to return the state if no action type matches which means no changes to the state
    default:
      return state;
  }
};

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
