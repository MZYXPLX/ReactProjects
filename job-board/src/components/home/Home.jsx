import WelcomeMessage from "./WelcomeMessage";
import FeaturedJobListings from "./FeaturedJobListings";
import "./home.css"


const Home = () => {
  const featuredJobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechCo",
      location: "Remote",
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "CodeCorp",
      location: "San Francisco",
    },
    // Add more job objects
  ];

  return (
    <div className="home">
      <WelcomeMessage />
      <FeaturedJobListings jobs={featuredJobs} />
    </div>
  );
};

export default Home;
