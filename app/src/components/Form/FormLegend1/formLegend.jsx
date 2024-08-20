"use client"
import { useState } from "react";

export default function FormLegend() {
    const [formData, setFormData] = useState({
      name: '',
      postcode: '',
      house: '',
      city: '',
    });

    return(
        <>
        <h3>Personal Information</h3>
        <form>
      <label htmlFor="name">Full Name</label>
      <input type="text" id="name" name="name" value={formData.name} />

      <label htmlFor="postcode">Postcode</label>
      <input type="text" id="postcode" name="postcode" value={formData.postcode}/>

      <label htmlFor="house">House/Flat Number and Street Name</label>
      <input type="house" id="house" name="house" value={formData.house} />

      <label htmlFor="city">City</label>
      <input type="city" id="city" name="city" value={formData.house} />

      <button type="submit">Submit</button>
    </form>
        </>
    )
}