"use client"
import { useState } from "react";

export default function ContactForm() {
    const [ field, setField ] = useState("");

    function handleChange(event) {
        if (event.target.name === "name") {
            setField(event.target.value);
        }
        if (event.target.name === "postcode") {
            setField(event.target.value);
        }
        if (event.target.name === "house") {
            setField(event.target.value);
        }
        if (event.target.name === "city") {
            setField(event.target.value);
        }
    }
    console.log(field);



    return(
        <>
        <h3>Personal Information</h3>
        <form>
      <label htmlFor="name">Full Name</label>
      <input type="text" id="name" name="name" value={field.name} onChange={handleChange}/>

      <label htmlFor="postcode">Postcode</label>
      <input type="text" id="postcode" name="postcode" value={field.postcode} onChange={handleChange}/>

      <label htmlFor="house">House/Flat Number and Street Name</label>
      <input type="house" id="house" name="house" value={field.house} onChange={handleChange}/>

      <label htmlFor="city">City</label>
      <input type="city" id="city" name="city" value={field.house} onChange={handleChange}/>

      <button type="submit">Submit</button>
    </form>
        </>
    )
}