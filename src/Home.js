import React from 'react';
import bg from "./bg.jpg";
import "./Home.css";
import LoginPage from './LoginPage';
import { Link } from 'react-router-dom';


export default function Home() {
    return (
        <div className='home-page' style={{ background: `url(${bg}) no-repeat center center fixed` , backgroundSize: `cover`}}>
            <h1>DIGIBOXX Recruitment Portal</h1>
            <button className='recruiter'>Login as Recruiter</button>

            <Link to="/login">
            <button className='candidate'>Login as Candidate</button>
            </Link>
        </div>
    )
}