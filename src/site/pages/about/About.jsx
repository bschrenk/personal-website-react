import React from 'react';
import { Helmet } from "react-helmet";
import Card from '../../components/Card/Card';
import './About.scss';

function About() {
    return (
        <div className="main-content">
            <Helmet>
                <title>Branden Schrenk | About</title>
                <link rel="canonical" href="https://www.schrenk.dev/about" />
                <meta name="description" content="A page about Branden Schrenk experiances and accomplishments" />
                <meta name="keywords" content="about,experiance,branden,schrenk" />

                {/* OpenGraph Tags */}
                <meta property="og:title" content="Branden Schrenk | About" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.schrenk.dev/about" />
                <meta property="og:image" content="https://www.schrenk.dev/android-chrome-192x192.png" />
                <meta property="og:description" content="A page about Branden Schrenk experiances and accomplishments" />

                {/* AboutPage SCHEMA */}
                <script type="application/ld+json">{`
                {
                    "@context": "https://schema.org",
                    "@type": "AboutPage",
                    "name": "Branden Schrenk | About",
                    "description": "A page about Branden Schrenk experiances and accomplishments"
                }
                `}</script>
            </Helmet>
            <div>
                <h2>About Branden</h2>
                <p>
                    I graduated from Northern Kentucky University in 2015 with a Bachelors in Computer Information
                    Technology. I have had many experiences in the technology field including Development,
                    Reporting, Integrations, System Migrations, Devops, and Architecture to name a few.
                </p>
                <p>
                    I have a proven track record of quickly learning, and adapting to new technologies.
                    When faced with new challenges working as a team to create innovative solutions that accomplish the goals of the project.
                    Effective communication of business requirements, and translating them to actionable
                    features and tasks.
                </p>
                <Card title={'Education'} barBox={'2011 - 2015'} barText={'Northern Kentucky University'}>
                    <p>BS Computer Information Technology</p>
                    <p>Minor in Business Informatics, Minor in Information Security</p>
                </Card>

                <h3>Areas of Expertise</h3>
                <div className="tag">
                    <span>Web Development</span>
                    <span>Coding & Programming</span>
                    <span>Devops</span>
                    <span>SEO</span>
                    <span>Site Troubleshooting</span>
                    <span>UX/UI Design</span>
                    <span>Agile</span>
                    <span>Hosting</span>
                    <span>eCommerce Strategy</span>
                    <span>System Integrations</span>
                    <span>System Architecture</span>
                    <span>Platform Maintence</span>
                </div>
            </div>
        </div>
    );
}

export default About;
