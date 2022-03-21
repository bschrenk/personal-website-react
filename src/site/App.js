import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import About from './pages/about/AboutComponent';
import Index from './pages/index/IndexComponent';
import Contact from './pages/contact/ContactComponent';
import Login from './pages/login/LoginComponent';
import Footer from './Footer';
import ReactGA from 'react-ga';
import { Helmet } from "react-helmet";

import './App.scss';

ReactGA.initialize('UA-61971155-2');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  const [isToggleOn] = useState(true);

  const handleClick = () => {
    if (!document.getElementById('mobile-nav').classList.contains("show-nav")) {
      document.getElementById('mobile-nav').classList.add("show-nav")
    } else {
      document.getElementById('mobile-nav').classList.remove("show-nav")
    }
  }
  return (
    <div className="page-wrapper">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="https://www.schrenk.dev/" />
        <link rel="shortcut icon" href="https://www.schrenk.dev/favicon.ico" />
        <link rel="manifest" href="https://www.schrenk.dev/manifest.json" />

        {/* OpenGraph Tags */}
        <meta property="og:title" content="Branden Schrenk" />
        <meta property="og:site_name" content="Branden Schrenk" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.schrenk.dev/" />
        <meta property="og:image" content="https://www.schrenk.dev/android-chrome-192x192.png" />
        <meta property="og:description" content="A website all about Branden Schrenk to demo and talk about his work and skills" />

        {/* Organization SCHEMA */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "url": "https://www.schrenk.dev",
            "logo": "https://www.schrenk.dev/android-chrome-192x192.png",
            "sameAs": [
              "https://www.linkedin.com/in/bschrenk/",
              "https://github.com/schrenkb1"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Cincinnati",
              "addressRegion": "OH",
              "postalCode": "45231",
              "addressCountry": "US",
              "streetAddress": ""
            },
            "email": "",
            "faxNumber": "",
            "telephone": ""
          }
          `}
        </script>

        {/* LocalBusiness SCHEMA */}
        <script type="application/ld+json">{`
          {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Branden Schrenk",
          "image": "https://www.schrenk.dev/android-chrome-192x192.png",
          "url": "https://www.schrenk.dev",
          "telephone": "",
          "openingHours": "Mo,Tu,We,Th,Fr 09:00-21:00",
          "currenciesAccepted": "USD",
          "paymentAccepted":"Cash, Check, Credit Card",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Cincinnati",
            "addressRegion": "OH",
            "postalCode": "45231",
            "addressCountry": "US",
            "streetAddress": ""
          }
        }
        `}</script>

        {/* Website SCHEMA */}
        <script type="application/ld+json">{`
          {
            "@context": "http://schema.org",
            "@type": "WebSite",
            "name": "Branden Schrenk's Website"
          }
        `}</script>

        {/* Person SCHEMA */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Cincinnati",
              "addressRegion": "OH",
              "postalCode": "45231",
              "addressCountry": "US",
              "streetAddress": ""
            },
            "email": "",
            "image": "https://www.schrenk.dev/android-chrome-192x192.png",
            "jobTitle": "Enterprise Application Engineer",
            "name": "Branden Schrenk",
            "telephone": "",
            "url": "https://www.schrenk.dev/"
          }
        `}</script>

      </Helmet>
      <div className="main-nav" id="navbar">
        <nav>
          <button className="icon" onClick={handleClick}>
            <div className="toggle-nav btnn">
              <div className="menu-bar"></div>
              <div className="menu-bar"></div>
              <div className="menu-bar"></div>
            </div>
          </button>
          <div className="login-button">
            <a href='/login'>
              <button>Login</button>
            </a>
          </div>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/contact'>Contact</a></li>
          </ul>
        </nav>
      </div>
      <aside className="side-nav" id="mobile-nav" style={{ height: isToggleOn ? '0%' : '80%' }}>
        <div id="site-canvas">
          <div id="site-menu">
            <ul>
              <li><a href='/'>Home</a></li>
              <li><a href='/about'>About</a></li>
              <li><a href='/contact'>Contact</a></li>
            </ul>
          </div>
        </div>
      </aside>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
