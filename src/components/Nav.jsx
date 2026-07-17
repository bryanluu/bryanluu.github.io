import React from "react";

const navLinks = [
  { title: "Home", href: "/", isActive: (path) => path === "/" },
  { title: "Work", href: "/#featured-work", isActive: (path) => path.startsWith("/work") },
];

function buildNavLinks(currentPath) {
  return navLinks.map(({ title, href, isActive }, idx) => {
    const className = isActive(currentPath) ? "nav-link active" : "nav-link";
    return (
      <li key={idx} className="nav-item">
        <a href={href} className={className}>
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
          {buildNavLinks(props.currentPath)}
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
