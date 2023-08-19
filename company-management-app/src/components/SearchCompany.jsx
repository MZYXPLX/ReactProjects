import React, { useState } from "react";
import { searchCompanies, deleteCompany } from "./dataService";
import "../App.css";

const SearchCompany = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleDelete = async (companyId) => {
    if (window.confirm("Are you sure you want to delete this company?")) {
      await deleteCompany(companyId);
      // After deletion, refresh the search results
      const results = await searchCompanies(searchQuery);
      setSearchResults(results);
    }
  };
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    if (searchQuery.trim() === "") {
      console.log("Search query is empty");
      return;
    }

    const results = await searchCompanies(searchQuery);
    setSearchResults(results);
    setSearchQuery(""); // Clear the search query after searching

    console.log("Search query:", searchQuery);
    console.log("Search results:", results);
  };

  return (
    <div className="searchCompany">
      <h2 className="PageTop">Search Companies</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleChange}
          placeholder="Search by Company Name or Contact Person"
          required
        />
        <button type="submit">Search</button>
      </form>
      {searchResults.length > 0 && (
        <div className="PageTop">
          <h3>Search Results for :</h3>
          {searchResults.map((company) => (
            <div className="searchResults" key={company.id}>
              <strong>{company.companyName}</strong>
              <br />
              <p className="one">Contact Number: </p>
              <p>{company.contactNumber}</p>
              <br />
              <p className="one"> Contact Person:</p>
              <p>{company.contactPerson}</p>
              <br />
              <button onClick={() => handleDelete(company.id)}>Delete</button>
              <br />
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchCompany;
