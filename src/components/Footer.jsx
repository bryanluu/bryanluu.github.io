import React from "react";
import ExternalLink from "./ExternalLink";

function Footer(props) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="d-flex justify-content-between p-3 align-items-center mt-auto border-top bg-secondary text-bg-secondary">
      <span>© {currentYear} Bryan Luu.</span>
      <ul className="d-flex flex-row navbar-nav gap-3">
        <li className="nav-item">
          <ExternalLink
            href="https://bryanluu.github.io/resume/resume.pdf"
            className="nav-link"
          >
            Resumé
          </ExternalLink>
        </li>
        <li className="nav-item">
          <ExternalLink href="https://github.com/bryanluu" className="nav-link">
            GitHub
          </ExternalLink>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
