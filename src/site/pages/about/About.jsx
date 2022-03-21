import React from 'react';
import { Helmet } from "react-helmet";
import Card from '../../components/Card/Card';
import Chip from '../../components/Chip/Chip';
import './About.scss';

function About() {
    const skills = [
        "Web Development",
        "Coding & Programming",
        "Devops",
        "SEO",
        "Site Troubleshooting",
        "UX/UI Design",
        "Agile",
        "Hosting",
        "eCommerce Strategy",
        "System Integrations",
        "System Architecture",
        "Platform Maintence",
    ]

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
                    I graduated from Northern Kentucky University in 2015 with a Bachelor's in Computer Information Technology.
                    Throughout my professional career, I have been sharpening my skills in the technology industry doing Frontend and Backend Web Development, Reporting, System Integrations, Cloud Migrations, Devops, Architecture and more.
                </p>
                <p>
                    I have a proven track record of quickly learning and adapting to new technologies.
                    When faced with new challenges, working as a team to create innovative solutions that accomplish the goals of the project.
                    I am able to effectively communicate with any business partner to gather requirements, and translate them into actionable features and tasks.
                    I look forward to the opportunity to work as a team to solve any challenge.
                </p>
                <Card title={'Education'} barBox={'2011 - 2015'} barText={'Northern Kentucky University'}>
                    <p>BS Computer Information Technology</p>
                    <p>Minor in Business Informatics, Minor in Information Security</p>
                </Card>

                <h3>Areas of Expertise</h3>
                <div className="tag">
                    {skills.map((value) => (
                        <Chip text={value} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default About;
