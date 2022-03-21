import React, { useState } from "react";
import './Nav.scss';
function Nav() {
    const [isToggleOn] = useState(true);

    const handleClick = () => {
        if (!document.getElementById('mobile-nav').classList.contains("show-nav")) {
            document.getElementById('mobile-nav').classList.add("show-nav")
        } else {
            document.getElementById('mobile-nav').classList.remove("show-nav")
        }
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
        </>
    );
}

export default Nav;