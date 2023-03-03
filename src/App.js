import React from "react";
import LoginPage from "./LoginPage";
import SignupPage from "./SignUp";
import Home from "./Home";
import {Link} from "react-router-dom";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Candidate from "./Candidate";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/signup" element={<SignupPage />}/>
        <Route path="/candidate" element={<Candidate />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
