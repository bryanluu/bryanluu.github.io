import React from "react";

function buildNavLinks(activePage) {
  const navLinks = {
    Home: "/index.html",
  };

  return Object.entries(navLinks).map((entry, idx) => {
    const [title, link] = entry;
    if (title === activePage)
      return (
        <li key={idx} className="nav-item">
          <a href={link} className="nav-link active">
            {title}
          </a>
        </li>
      );
    else
      return (
        <li key={idx} className="nav-item">
          <a href={link} className="nav-link">
            {title}
          </a>
        </li>
      );
  });
}

function Nav(props) {
  return (
    <nav className="navbar navbar-dark bg-primary mb-4 border-bottom sticky-top">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          <span className="fs-4">Bryan Luu</span>
        </a>
        <ul className="navbar-nav d-flex flex-row flex-fill gap-3 px-3">
          {buildNavLinks(props.activePage)}
        </ul>
        {/* TODO: wire up booking service */}
        <button className="btn btn-primary d-flex gap-2">
          <i className="bi bi-telephone-fill"></i>
          Book a call
        </button>
      </div>
    </nav>
  );
}

export default Nav;
