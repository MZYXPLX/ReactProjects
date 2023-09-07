import { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import "./auth.css";

function AuthPage({ onLogin }) {
  const [newUser, setNewUser] = useState(false);

  const Authenticate = () => {
    setNewUser(!newUser);
  };

  return (
    <div className="AuthPage ">
      <div className="AuthDiv glass">
        {newUser ? (
          <LoginForm onLogin={onLogin} />
        ) : (
          <SignupForm onLogin={onLogin} />
        )}
        <button className="userBtn">
          {!newUser ? (
            <p>
              Already a user? <b onClick={Authenticate}>Login</b>
            </p>
          ) : (
            <p>
              New user? <b onClick={Authenticate}>Join Now</b>
            </p>
          )}
        </button>
      </div>
    </div>
  );
}

export default AuthPage;
