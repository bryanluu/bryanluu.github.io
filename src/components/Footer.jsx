import React from "react";

function Footer(props) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="d-flex justify-content-between p-3 align-items-center mt-auto border-top bg-secondary text-bg-secondary">
      <span>© {currentYear} Bryan Luu.</span>
      <ul className="d-flex flex-row navbar-nav gap-3">
        <li className="nav-item">
          <a
            href="https://bryanluu.github.io/resume/resume.pdf"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resumé
          </a>
        </li>
        <li className="nav-item">
          <a
            href="https://github.com/bryanluu"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
