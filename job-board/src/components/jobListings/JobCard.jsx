/* eslint-disable react/prop-types */
//  A component to display a single job listing with its details// src/components/JobCards/JobCard.js
import  { useState } from "react";
import "./joblistings.css";
import JobDetail from "../jobDetail/JobDetail"; // Import the JobDetail component

const JobCard = ({ job }) => {
  const [showDetail, setShowDetail] = useState(false);

  const toggleDetail = () => {
    setShowDetail(!showDetail);
  };

  return (
    <li className="job-listing">
      <h3>{job.title}</h3>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <button onClick={toggleDetail}>Apply Now</button>
      {showDetail && <JobDetail job={job} onClick={toggleDetail} />}
    </li>
  );
};

export default JobCard;
