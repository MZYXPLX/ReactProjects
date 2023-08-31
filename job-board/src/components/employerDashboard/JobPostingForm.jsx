// A form component for employers to post new job openings
// src/components/employerDashboard/JobPostingForm.js
import { useState } from "react";
import Button from "../common/Button";

const JobPostingForm = () => {
  const [jobData, setJobData] = useState({
    title: "",
    company: "",
    location: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the jobData to the server to post a new job
    console.log("Job data:", jobData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="job-posting-form">
      <div>
        <input
          placeholder="Job Title"
          type="text"
          id="title"
          name="title"
          value={jobData.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          placeholder="Company"
          type="text"
          id="company"
          name="company"
          value={jobData.company}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          placeholder="Location"
          type="text"
          id="location"
          name="location"
          value={jobData.location}
          onChange={handleChange}
        />
      </div>
      <div>
        <textarea
          placeholder="Job Description"
          id="description"
          name="description"
          value={jobData.description}
          onChange={handleChange}
        />
      </div>
        <Button ButtonText="Submit"/>
      </form>
  );
};

export default JobPostingForm;
