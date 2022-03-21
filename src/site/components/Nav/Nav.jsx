import React, { useState } from "react";
import './Nav.scss';
function Nav() {
    const [isToggleOn] = useState(true);

    const links = [
        {
            link: '/',
            name: 'Home'
        },
        {
            link: '/about',
            name: 'About'
        },
        {
            link: '/projects',
            name: 'Projects'
        },
        {
            link: '/contact',
            name: 'Contact'
        }
    ]
    
    const handleClick = () => {
        if (!document.getElementById('mobile-nav').classList.contains("show-nav")) {
            document.getElementById('mobile-nav').classList.add("show-nav")
        } else {
            document.getElementById('mobile-nav').classList.remove("show-nav")
        }
    }

    const makeLinkList = () => {
        return (
            <ul>
                {links.map((linkData) => (
                    <li><a href={linkData.link}>{linkData.name}</a></li>
                ))}
            </ul>
        )
    }
    return (
        <>
            <div className="main-nav" id="navbar">
                <nav>
                    <button aria-label={"Navigation Menu"} className="icon" onClick={handleClick}>
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
                    {makeLinkList()}
                </nav>
            </div>
            <aside className="side-nav" id="mobile-nav" style={{ height: isToggleOn ? '0%' : '80%' }}>
                <div id="site-canvas">
                    <div id="site-menu">
                        {makeLinkList()}
                    </div>
                </div>
            </aside>
        </>
    );
}

export default Nav;