// src/components/auth/LoginForm.js
import { useState } from "react";
import { auth } from "../../assets/JS/firebase";
import "./auth.css";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
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
    <form onSubmit={signIn} className="AuthForms">
      <h2>Login</h2>
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
        <label>Password:</label>
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" onClick={handleDetailClick}>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
