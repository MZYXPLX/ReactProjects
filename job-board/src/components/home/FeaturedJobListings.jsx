/* eslint-disable react/prop-types */
import "./Home.css";
import '../../assets/CSS/Animation.css'; // Import the Animation.css file


const FeaturedJobListings = ({ jobs }) => {
  return (
    <div className="featured-job-listings " id="breathing-button">
      <h2>Featured Job Listings</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.company}</p>
            <p>{job.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturedJobListings;
