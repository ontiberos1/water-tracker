import React from 'react';
import '../styles/login.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faLock,  } from '@fortawesome/free-solid-svg-icons';

export default function Login() {
    return(
        <div className="container">
            <h2 className="loginTitle">Water Tracker Login</h2>
            <form className="loginForm">
                <FontAwesomeIcon className="user-circle" icon={faUserCircle} />
                <div> 
                    <input type="email" placeholder="Email Address"  />
                    <input type="password" placeholder="Password" />
                    <br />
                    <button className="login-btn" type="submit">
                        <FontAwesomeIcon icon={faLock} />
                         &nbsp; Sign In
                    </button>
                </div>
                <div className="login-text">
                    <p>Forget your <strong><a href="#">Password?</a></strong></p>
                    <p>New to Water Tracker? <strong><a href="#">Sign Up</a></strong></p>
                </div>
            </form>
        </div>
    );
}