import React from 'react';
import { Helmet } from "react-helmet";
import './Index.scss';

function Index() {
    return (
        <div className="main-content-home">
            <Helmet>
                <title>Branden Schrenk | Home</title>
                <link rel="canonical" href="https://www.schrenk.dev/" />
                <meta name="description" content="A website to learn about Branden Schrenk. This is a place Branden links to his work and skills" />
                <meta name="keywords" content="branden,schrenk,react,frontend,website,developer,engineer,application,full,stack,cincinnati" />

                {/* OpenGraph Tags */}
                <meta property="og:title" content="Branden Schrenk | Home" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.schrenk.dev/" />
                <meta property="og:image" content="https://www.schrenk.dev/android-chrome-192x192.png" />
                <meta property="og:description" content="A website to learn about Branden Schrenk. This is a place Branden links to his work and skills" />
            </Helmet>
            <div>
                <h2>Hello,</h2>
                <h3>My name is <span>Branden Schrenk</span></h3>
                <a href="/about">
                    <button className="btnPrimary">Learn About Branden</button>
                </a>
            </div>
        </div>
    );
}

export default Index;
