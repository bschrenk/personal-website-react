import React from 'react';
import { Helmet } from "react-helmet";
import './IndexComponent.scss';

function Index() {
    return (
        <div className="main-content-home">
            <Helmet>
                <title>Branden Schrenk | Home</title>
                <link rel="canonical" href="https://www.schrenk.dev/" />
                <meta name="description" content="A website all about Branden Schrenk to demo and talk about his work and skills" />
                <meta name="keywords" content="branden,schrenk,website,developer,engineer,application" />

                {/* OpenGraph Tags */}
                <meta property="og:title" content="Branden Schrenk | Home" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.schrenk.dev/" />
                <meta property="og:image" content="https://www.schrenk.dev/android-chrome-192x192.png" />
                <meta property="og:description" content="A website all about Branden Schrenk to demo and talk about his work and skills" />
            </Helmet>
            <div>
                <h2>Hello,</h2>
                <p>My name is Branden Schrenk</p>
                <a href="/about">
                    <button className="btnPrimary">Get to Know Me</button>
                </a>
            </div>
        </div>
    );
}

export default Index;
