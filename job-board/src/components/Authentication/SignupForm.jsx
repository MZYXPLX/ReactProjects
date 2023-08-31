// src/components/auth/SignupForm.js
import { useState } from "react";
import { auth } from "../../assets/JS/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

import "./auth.css";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((useCredential) => {
        console.log(useCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDetailClick = () => {
    // Check if the click occurred within job-floating-div or outside
    window.location.href = "/"; // Toggle the detailed view
  };

  return (
    <form onSubmit={signUp} className="AuthForms">
      <h2>Sign Up</h2>
      <div>
        <label>Email:</label>
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label> <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" onClick={handleDetailClick}>
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm;
