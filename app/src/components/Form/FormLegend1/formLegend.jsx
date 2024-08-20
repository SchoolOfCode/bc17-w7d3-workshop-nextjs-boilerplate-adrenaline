"use client"
import { useState } from "react";

export default function ContactForm() {
    const [field, setField] = useState({ name: "", postcode: "", house: "", city: "", number: "", email: "" });

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
        if (event.target.name === "number") {
            setField(event.target.value);
        }
        if (event.target.name === "email") {
            setField(event.target.value);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(field);
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Personal Information</legend>
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" name="name" value={field.name} onChange={handleChange} />

                    <label htmlFor="postcode">Postcode</label>
                    <input type="text" id="postcode" name="postcode" value={field.postcode} onChange={handleChange} />

                    <label htmlFor="house">House/Flat Number and Street Name</label>
                    <input type="text" id="house" name="house" value={field.house} onChange={handleChange} />

                    <label htmlFor="city">City</label>
                    <input type="text" id="city" name="city" value={field.city} onChange={handleChange} />

                    <legend>Personal Information</legend>
                    <label htmlFor="number">Phone number</label>
                    <input type="number" id="number" name="number" value={field.number} onChange={handleChange} />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={field.email} onChange={handleChange} />

                    <button type="submit">Submit</button>
                </fieldset>
            </form>
        </>
    )
}