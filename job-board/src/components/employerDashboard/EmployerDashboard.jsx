//  A dashboard for employers to manage their accounts and job postings
import JobPostingForm from "./JobPostingForm";
import "./employerDashboard.css";

const EmployerDashboard = () => {
  return (
    <div className="employer-dashboard">
      <h3>Post a New Job</h3>
      <JobPostingForm />
    </div>
  );
};

export default EmployerDashboard;
