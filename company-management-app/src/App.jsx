import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUp from "./components/SignUp";
import AddCompany from "./components/AddCompany";
import ViewCompanies from "./components/ViewCompanies";
import SearchCompany from "./components/SearchCompany";
import SignIn from "./components/SignIn";
import AuthDetails from "./components/AuthDetails";

import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

const App = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAuthUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Add Company</Link>
            </li>
            <li>
              <Link to="/view">View Companies</Link>
            </li>
            <li>
              <Link to="/search">Search Companies</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/authdetails">User</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          {/* Route for AddCompany */}
          <Route path="/" element={<AddCompany />} />

          {/* Route for ViewCompanies */}
          <Route path="/view" element={<ViewCompanies authUser={authUser} />} />

          {/* Route for SearchCompany */}
          <Route path="/search" element={<SearchCompany />} />

          {/* Route for SignUp */}
          <Route path="/signup" element={<SignUp />} />

          {/* Route for SignIn */}
          <Route path="/signin" element={<SignIn />} />

          {/* Route for AuthDetails */}
          <Route
            path="/authdetails"
            element={<AuthDetails authUser={authUser} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
