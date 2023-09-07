// src/components/auth/SignupForm.js
import { useState } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./auth.css";

const SignupForm = ({ onLogin }) => {
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

  const skipped = () => {
    onLogin(true);
  };

  return (
    <form onSubmit={signUp} className="AuthForms">
      <h2>Sign Up</h2>

      <input
        type="email"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">
        <p className="text">Sign Up</p>
      </button>
      <button onClick={skipped}>
        <p className="text">Skip</p>
      </button>
    </form>
  );
};

export default SignupForm;
