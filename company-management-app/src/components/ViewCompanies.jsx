import React, { useState, useEffect } from "react";
// import { db } from "../firebase"; // Import the Realtime Database instance
import { ref, get, getDatabase } from "firebase/database"; // Import Realtime Database functions
import "../App.css";

const ViewCompanies = () => {
  const [companiesData, setCompaniesData] = useState([]);
  const database = getDatabase();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const companiesRef = ref(database, "companies");
        const companiesSnapshot = await get(companiesRef);
        const companies = [];
        companiesSnapshot.forEach((childSnapshot) => {
          companies.push({ id: childSnapshot.key, ...childSnapshot.val() });
        });
        setCompaniesData(companies);
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    };
    fetchData();
  }, [database]);

  return (
    <div className="viewCompanies">
      <h2>View Companies</h2>
      <ul>
        {companiesData.map((company) => (
          <div className="card" key={company.id}>
            <li>
              <div className="first-content">
                <h3>{company.companyName}</h3>
              </div>
              <div className="second-content">
                <h4>Contact Number:</h4>
                <p>{company.contactNumber}</p>
                <hr />
                <h4>Contact Person:</h4>
                <p> {company.contactPerson}</p>
                <hr />
                <h4>Added by:</h4>
                <p>{company.addedBy}</p>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ViewCompanies;
