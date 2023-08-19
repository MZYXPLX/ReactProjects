// src/AddCompany.js

import React, { useState } from "react";
import { addCompany } from "./dataService";
import { auth } from "../firebase";
import "../App.css";

const AddCompany = () => {
  const [companyData, setCompanyData] = useState({
    companyName: "",
    contactNumber: "",
    contactPerson: "",
  });

  const user = auth.currentUser;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompanyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userEmail = user ? user.email : "Guest"; // Get user's email if authenticated, otherwise use "Guest"

    const updatedCompanyData = {
      ...companyData,
      addedBy: userEmail, // Add user's email to the company data
    };

    addCompany(updatedCompanyData); // Call your addCompany function with the updated data

    console.log("Company data submitted:", updatedCompanyData); // Log the updated company data

    setCompanyData({
      companyName: "",
      contactNumber: "",
      contactPerson: "",
    });
  };

  return (
    <div>
      <h2 className="PageTop">Add Company</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Company Name:
          <br />
          <input
            type="text"
            name="companyName"
            value={companyData.companyName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Contact Number: <br />
          <input
            type="text"
            name="contactNumber"
            value={companyData.contactNumber}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Contact Person: <br />
          <input
            type="text"
            name="contactPerson"
            value={companyData.contactPerson}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Add Company</button>
      </form>
    </div>
  );
};

export default AddCompany;
