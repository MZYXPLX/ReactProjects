import JobListings from "../jobListings/JobListings"; // Import the JobListings component
import "./joblistings.css";

const JobListingsPage = () => {
  const jobListings = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechCo",
      location: "Remote",
      description:
        "With Mojo Fantasy, you get the thrill of the sportsbook — a full selection of live player props and odds you won’t find anywhere else — in games of skill against other fans. Every player prop acts like a stock, giving you total control to buy and sell your picks all game long, or just hang on and let ‘em ride.They are launching a NEW app feature and they're looking for the right students to test it.*Before you apply, please check that you are based in one of the states listed for legal purposesThis gig is a WIN for you if:·  You are obsessed with stats & data·  You love sports (and placing bets)·  You are an aspiring tech proAs a key contributor, you'll help the Mojo team create yet another top rated product by:Sharing overall user feedbackIdentifying product improvementsCalling out what you like, and what you don't",
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "CodeCorp",
      location: "San Francisco",
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "CodeCorp",
      location: "San Francisco",
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "CodeCorp",
      location: "San Francisco",
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "CodeCorp",
      location: "San Francisco",
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "CodeCorp",
      location: "San Francisco",
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "CodeCorp",
      location: "San Francisco",
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
    <div className="job-listings-page">
      <JobListings jobs={jobListings} />
    </div>
  );
};

export default JobListingsPage;
