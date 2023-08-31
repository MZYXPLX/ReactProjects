// A dashboard for job seekers to manage their profiles and job applications
// src/components/candidateDashboard/CandidateDashboard.js
import ProfileForm from "./ProfileForm";
import JobApplications from "./JobApplications";
import "./CandidateDashboard.css";

const CandidateDashboard = () => {
  return (
    <div className="candidate-dashboard">
        <ProfileForm />
        <JobApplications />
    </div>
  );
};

export default CandidateDashboard;
