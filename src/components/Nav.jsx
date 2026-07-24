import React from "react";

const navLinks = [
  { title: "Home", href: "/", isActive: (path) => path === "/" },
  {
    title: "Work",
    href: "/#featured-work",
    isActive: (path) => path.startsWith("/work"),
  },
  {
    title: "Services",
    href: "/services",
    isActive: (path) => path === "/services",
  },
  { title: "About", href: "/about", isActive: (path) => path === "/about" },
  {
    title: "Contact",
    href: "/contact",
    isActive: (path) => path === "/contact",
  },
];

function buildNavLinks(currentPath) {
  return navLinks.map(({ title, href, isActive }, idx) => {
    const active = isActive(currentPath);
    const className = active ? "nav-link active" : "nav-link";
    return (
      <li key={idx} className="nav-item">
        <a
          href={href}
          className={className}
          aria-current={active ? "page" : undefined}
        >
          {title}
        </a>
      </li>
    );
  });
}

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary border-bottom sticky-top">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          <span className="fs-4">Bryan Luu</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navlinks"
          aria-controls="navlinks"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navlinks" className="collapse navbar-collapse">
          <div className="d-flex justify-content-center flex-fill">
            <ul className="navbar-nav d-flex flex-row gap-3 px-3">
              {buildNavLinks(props.currentPath)}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
