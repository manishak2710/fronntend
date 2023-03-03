import React, { useState } from "react";
import "./LoginPage.css";
import bg from "./bg.jpg";
import {Link} from 'react-router-dom';

function LoginPage() {
  // Define state variables for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle input change events
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Handle form submit event
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform validation and login logic here
    // ...
  };

  return (
    <div className="login-page" style={{ background: `url(${bg}) no-repeat center center fixed`
    , backgroundSize: `cover`}}>
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={handleEmailChange}
              
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <Link to = "/candidate">
          <button type="submit">Login</button>
          </Link>
        </form>
        <p className="signup-text">Don't have an account?</p>
        <Link to="/signup">
        <button type="button" className="signup-btn">
          Sign up
        </button>
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
