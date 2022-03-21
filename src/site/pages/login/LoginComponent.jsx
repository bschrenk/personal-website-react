import React, { useState } from 'react';
import { Helmet } from "react-helmet";

import './LoginComponent.scss';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }
    const handleSubmit = (event) => {
        console.log('This is just a placeholder')
        event.preventDefault();
    }
    return (
        <div className="main-content">
            <Helmet>
                <title>Branden Schrenk | Login Page</title>
                <link rel="canonical" href="https://www.schrenk.dev/login" />
                <meta name="description" content="Login to Branden Schrenk Website" />
                <meta name="keywords" content="react,login,branden,schrenk" />

                {/* OpenGraph Tags */}
                <meta property="og:title" content="Branden Schrenk | Login Page" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.schrenk.dev/login" />
                <meta property="og:image" content="https://www.schrenk.dev/android-chrome-192x192.png" />
                <meta property="og:description" content="Login to Branden Schrenk Website" />
            </Helmet>
            <h2>Login</h2>
            <form name="form" onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" name="username" value={username} onChange={handleUsernameChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" value={password} onChange={handlePasswordChange} />
                </div>
                <div className="form-group">
                    <button className="btnPrimary">Login</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
