import JobDetail from "../jobDetail/JobDetail"; // Import the JobDetail component

const JobDetailPage = () => {
  // Replace this with fetching the job data based on the ID
  const job = {
    id: 1,
    title: "Frontend Developer",
    company: "TechCo",
    location: "Remote",
    description: "Join our team as a frontend developer...",
  };

  return (
    <div className="job-detail-page">
      <JobDetail job={job} />
    </div>
  );
};

export default JobDetailPage;
