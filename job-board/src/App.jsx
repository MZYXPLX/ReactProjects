import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import Home from "./components/home/Home";
import JobListingsPage from "./components/jobListings/JobListingPage";
import EmployerDashboardPage from "./components/employerDashboard/EmployerDashboardPage";
import CandidateDashboardPage from "./components/candidateDashboard/CandidateDashboardPage";
import AuthPage from "./components/Authentication/AuthPage";

function App() {
  return (
    <Router>
      <Header />
      <body>
        <Home />
        <Routes>
          <Route path="/" element={<JobListingsPage />} />
          <Route path="/job-listings" element={<JobListingsPage />} />
          <Route
            path="/employer-dashboard"
            element={<EmployerDashboardPage />}
          />
          <Route
            path="/candidate-dashboard"
            element={<CandidateDashboardPage />}
          />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </body>
    </Router>
  );
}

export default App;
