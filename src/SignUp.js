import React, { useState } from "react";
import "./SignupPage.css";
import bg from "./bg.jpg"
import {Link} from 'react-router-dom';
function SignupPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // perform validation and submit logic here
    // ...
  };

  return (
    <div className="signup-page" style={{ background: `url(${bg}) no-repeat center center fixed`
    , backgroundSize: `cover`}}>
      <h1>Signup Page</h1>
      <form onSubmit={handleSubmit} className="signup-form">
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
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
        <Link to="/login">
        <button type="submit">Create Account</button>
        </Link>
      </form>
    </div>
  );
}

export default SignupPage;
