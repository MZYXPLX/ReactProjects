import { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import "./auth.css";

function AuthPage() {
  const [isLoginFormVisible, setLoginFormVisible] = useState(false);
  const [isSignupFormVisible, setSignupFormVisible] = useState(false);

  const handleShowLoginForm = () => {
    setLoginFormVisible(true);
    setSignupFormVisible(false);
  };

  const handleShowSignupForm = () => {
    setLoginFormVisible(false);
    setSignupFormVisible(true);
  };

  const handleDetailClick = (event) => {
    // Check if the click occurred within job-floating-div or outside
    if (!event.target.closest(".AuthDiv")) {
      window.location.href = "/"; // Toggle the detailed view
    }
  };

  return (
    <div className="AuthPage" onClick={handleDetailClick}>
      <div className="AuthDiv">
        <div className="ButtonsDiv">
          <h1>User</h1>
          <button onClick={handleShowSignupForm}>Sign Up</button>
          <button onClick={handleShowLoginForm}>Login</button>
        </div>
        <div className="formDiv">
          {isLoginFormVisible && <LoginForm />}
          {isSignupFormVisible && <SignupForm />}
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
