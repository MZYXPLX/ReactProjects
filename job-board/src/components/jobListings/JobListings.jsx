//  A component to display a list of job openings with essential details.
/* eslint-disable react/prop-types */

import JobCard from "./JobCard";
import "./joblistings.css";

const JobListings = ({ jobs }) => {
  return (
    <div className="job-listings">
      <h1>Job Listings</h1>
      <ul>
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </ul>
    </div>
  );
};

export default JobListings;
