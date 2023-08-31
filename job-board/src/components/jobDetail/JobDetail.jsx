/* eslint-disable react/prop-types */
// A component to display detailed information about a specific job
import "./jobdetail.css";

const JobDetail = ({ job, onClick }) => {
  const handleDetailClick = (event) => {
    // Check if the click occurred within job-floating-div or outside
    if (!event.target.closest(".job-floating-div")) {
      onClick(); // Toggle the detailed view
    }
  };

  const handleClickApply = () => {
    const subject = `Application for ${job.title} Position`;
    const body = `Dear Hiring Team at ${job.company},\n\nI am writing to express my interest in the ${job.title} position at your company. Please find attached my resume. Thank you for considering my application.\n\nBest regards,\n[Your Name]`;

    window.location.href = `mailto:${
      job.contactEmail
    }?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className=" job-detail" onClick={handleDetailClick}>
      <div className="job-floating-div">
        <p>Posted By: {job.company}</p>
        <h2>{job.title}</h2>
        <small>{job.location}</small>
        <p className="scrollable">Description: {job.description}</p>
        <button onClick={handleClickApply}>Apply Now</button>
      </div>
    </div>
  );
};

export default JobDetail;
