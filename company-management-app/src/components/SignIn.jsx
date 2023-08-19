// src/SignIn.js

import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebase } from "firebase/app";

const SignIn = () => {
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

  return (
    <div className="sign-in-container">
      <form onSubmit={signIn}>
        <h1>log In</h1>
        <input
          type="email"
          placeholder="enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}></input>{" "}
        <input
          type="password"
          placeholder="enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}></input>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default SignIn;
