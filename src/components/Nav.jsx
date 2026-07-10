import React from "react";

function Nav(props) {
  return <nav class="navbar navbar-dark bg-primary mb-4 border-bottom fixed-top">
    <div className="container-fluid">
      <a href="/" class="navbar-brand">
        <span class="fs-4">Bryan Luu</span>
      </a>
      <ul class="navbar-nav d-flex flex-row flex-fill gap-3 px-3">
        <li class="nav-item"><a href="/index.html" class="nav-link">Home</a></li>
        {/* The link below won't work locally because it links to the resume repo */}
        <li class="nav-item"><a href="/resume/resume.pdf" class="nav-link">Resumé</a></li>
      </ul>
      <button class="btn btn-primary">Book a call <i class="bi bi-telephone-fill"></i ></button>
    </div>
  </nav>
}

export default Nav;
