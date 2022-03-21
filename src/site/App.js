import React from "react";
import { Routes, Route } from "react-router-dom";

import About from './pages/about/About';
import Index from './pages/index/Index';
import Contact from './pages/contact/Contact';
import Login from './pages/login/Login';
import Projects from "./pages/projects/Projects";
import Footer from './components/Footer/Footer';
import ReactGA from 'react-ga';
import { Helmet } from "react-helmet";
import Nav from "./components/Nav/Nav";

import './App.scss';

ReactGA.initialize('UA-61971155-2');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {

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
      <Nav />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
