// A form component for candidates to update their profiles
// src/components/candidateDashboard/ProfileForm.js
import { useState } from "react";
import "./CandidateDashboard.css";

const ProfileForm = () => {
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    experience: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the profileData to the server to update the profile
    console.log("Profile data:", profileData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="profile-form">
      <h3>Update Your Profile</h3>
      <div>
        <input
          placeholder="Name"
          type="text"
          id="name"
          name="name"
          value={profileData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          placeholder="Email"
          type="email"
          id="email"
          name="email"
          value={profileData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <textarea
          placeholder="Experience"
          id="experience"
          name="experience"
          value={profileData.experience}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Update</button>
    </form>
  );
};

export default ProfileForm;
