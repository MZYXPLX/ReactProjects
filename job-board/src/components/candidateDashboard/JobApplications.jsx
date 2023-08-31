// src/components/candidateDashboard/JobApplications.js

const JobApplications = () => {
  const applications = [
    { id: 1, jobTitle: "Frontend Developer", company: "TechCo" },
    { id: 2, jobTitle: "Backend Engineer", company: "CodeCorp" },
    // Add more application objects
  ];

  return (
    <div className="job-applications">
      <h2>Your Job Applications:</h2>
      <ul>
        {applications.map((application) => (
          <li key={application.id}>
            <p>
              <bold>Applied for:</bold>
              <br /> {application.jobTitle}
            </p>
            <p>
              <bold>Company: </bold> <br /> {application.company}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobApplications;
