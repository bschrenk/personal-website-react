import React from 'react';
import { Helmet } from "react-helmet";
import './Contact.scss';

function Contact() {
    return (
        <div className="main-content">
            <Helmet>
                <title>Branden Schrenk | Contact</title>
                <link rel="canonical" href="https://www.schrenk.dev/contact" />
                <meta name="description" content="Get in touch with Branden Schrenk today." />
                <meta name="keywords" content="contact,branden,schrenk" />

                {/* OpenGraph Tags */}
                <meta property="og:title" content="Branden Schrenk | Contact" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.schrenk.dev/contact" />
                <meta property="og:image" content="https://www.schrenk.dev/android-chrome-192x192.png" />
                <meta property="og:description" content="Get in touch with Branden Schrenk today." />

                {/* ContactPage SCHEMA */}
                <script type="application/ld+json">{`
                {
                    "@context": "https://schema.org",
                    "@type": "ContactPage",
                    "name": "Branden Schrenk | Contact",
                    "keywords": "contact,branden,schrenk",
                    "description": "Get in touch with Branden Schrenk today."
                }
                `}</script>
            </Helmet>
            <div>
                <iframe title="Contact Branden" className='contact-frame' src="https://docs.google.com/forms/d/e/1FAIpQLSe5YFiHAXaJZHoUl9dFjt1psb-6hiqgC_sdihT3abBi8lK0gQ/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
        </div>
    );
}

export default Contact;
