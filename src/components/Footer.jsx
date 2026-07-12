import React from "react";

function Footer(props) {
  const currentYear = new Date().getFullYear();

  return (
    <footer class="d-flex justify-content-between p-3 align-items-center mt-auto border">
      <span>© {currentYear} Bryan Luu.</span>
      <ul class="d-flex flex-row navbar-nav gap-3">
        <li class="nav-item">
          <a
            href="https://bryanluu.github.io/resume/resume.pdf"
            class="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resumé
          </a>
        </li>
        <li class="nav-item">
          <a
            href="https://github.com/bryanluu"
            class="nav-link"
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
