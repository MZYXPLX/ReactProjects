// src/components/auth/LoginForm.js
import { useState } from "react";
import { auth } from "./firebase";
import "./auth.css";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User signed in:", user);
        // Trigger the callback function
        onLogin(true);
      })
      .catch((error) => {
        console.error("Error signing in:", error);
        // Handle errors or display error messages.
      });
  };

  const skipped = () => {
    onLogin(true);
  };
  return (
    <form onSubmit={signIn} className="AuthForms">
      <h2>Sign In</h2>
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
        <p className="text">Sign in</p>
      </button>{" "}
      <button onClick={skipped}>
        <p className="text">Skip</p>
      </button>
    </form>
  );
};

export default LoginForm;
