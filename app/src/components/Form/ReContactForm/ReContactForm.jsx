"use client";
import React, { useState, useReducer } from "react";
import styles from "./ContactForm.module.css";


// const state = {
//   data:{
//     name: "",
//   },
//   errorStatus: false
// };


export const INITIAL_STATE = {
  name: "",
  postcode: "",
  house: "",
  city: "",
  number: "",
  email: "",
}

const formReducer = (state, action) => {
  switch(action.type){
    case "INPUT_CHANGE":
      return{};
    default:
      return state;
  }

}