import React from 'react';
import { Helmet } from "react-helmet";
import Card from "../../components/Card/Card"
import './Projects.scss';

function Projects() {
    
    return (
        <div className="main-content">
            <Helmet>
                <title>Branden Schrenk | Projects</title>
                <link rel="canonical" href="https://www.schrenk.dev/projects" />
                <meta name="description" content="Learn about the projects I am working on and see work I have done." />
                <meta name="keywords" content="projects,experiance,branden,schrenk" />

                {/* OpenGraph Tags */}
                <meta property="og:title" content="Branden Schrenk | Projects" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.schrenk.dev/projects" />
                <meta property="og:image" content="https://www.schrenk.dev/android-chrome-192x192.png" />
                <meta property="og:description" content="Learn about the projects I am working on and see work I have done." />

                {/* Webpage SCHEMA */}
                <script type="application/ld+json">{`
                {
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "name": "Branden Schrenk | Projects",
                    "description": ""
                }
                `}</script>
            </Helmet>
            <div>
                <h1>Projects</h1>
                <Card title={'GatsbyJS Website'} barText={'Built for Valley Commercial Services'} barBox={'2021'}>
                    <p>Designed, Built, and Host Valley Commercial Services</p>
                    <p>Built using a Jamstack architecture with <a href='https://www.gatsbyjs.com/'>GatsbyJs</a>. I built a PWA with customized SCSS and React components.</p>
                    <p>Leverages best in class SEO of Structured Data, Sitemap, and Opengraph tags tracked with Google Analytics</p>
                    <p>The site is integrated to a CMS for easy content editing that triggers deployments in real time.</p>
                    <p>Comparing to the old Wordpress site Google Search metrics with no advertisment campaigns the site naturally increased organic search impressions by 300%</p>
                    <a target="_blank" rel="noopener noreferrer" href='https://valleycommercialservice.com'><button className='btnPrimary'>View Website</button></a>
                </Card>
            </div>
        </div>
    );
}

export default Projects;
