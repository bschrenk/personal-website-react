import React from "react";

import './Footer.scss';

class Footer extends React.Component {
  render(
    year = new Date().getFullYear()
  ) {
    return (
      <footer>
        <div>
          <p>Copyright &copy; {year} Schrenk.dev</p>
        </div>
        <div>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/bschrenk/"><img src='/linkedin.svg' alt='linkedin' ></img></a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/bschrenk"><img src='/github.svg' alt='github'></img></a>
        </div>
      </footer>
    );
  }
}

export default Footer;
