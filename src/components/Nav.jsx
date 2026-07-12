import React from "react";

function buildNavLinks(activePage) {
  const navLinks = {
    Home: "/index.html",
  };

  return Object.entries(navLinks).map((entry) => {
    const [title, link] = entry;
    if (title === activePage)
      return (
        <li class="nav-item">
          <a href={link} class="nav-link active">
            {title}
          </a>
        </li>
      );
    else
      return (
        <li class="nav-item">
          <a href={link} class="nav-link">
            {title}
          </a>
        </li>
      );
  });
}

function Nav(props) {
  return (
    <nav class="navbar navbar-dark bg-primary mb-4 border-bottom sticky-top">
      <div className="container-fluid">
        <a href="/" class="navbar-brand">
          <span class="fs-4">Bryan Luu</span>
        </a>
        <ul class="navbar-nav d-flex flex-row flex-fill gap-3 px-3">
          {buildNavLinks(props.activePage)}
        </ul>
        {/* TODO: wire up booking service */}
        <button class="btn btn-primary d-flex gap-2">
          <i class="bi bi-telephone-fill"></i>
          Book a call
        </button>
      </div>
    </nav>
  );
}

export default Nav;
