import CandidateDashboard from "../candidateDashboard/CandidateDashboard"; // Import the CandidateDashboard component
import "./CandidateDashboard.css";

const CandidateDashboardPage = () => {
  return (
      <div className="candidate-dashboard-page">
          <h1>Candidate Dashboard</h1>
      <CandidateDashboard />
    </div>
  );
};

export default CandidateDashboardPage;
