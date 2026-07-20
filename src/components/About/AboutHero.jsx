import React from "react";
import Avatar from "./Avatar";
import "./AboutHero.scss";

function AboutHero(props) {
  const avatarSize = props.avatarSize ?? 200;
  // A little extra clearance so the "y" in "many" doesn't dip past the edge.
  const topBannerHeight = `${avatarSize / 2 + 56}px`;

  return (
    <section style={{ "--top-banner-height": topBannerHeight }}>
      <div id="top-banner"></div>
      <div className="container mt-5">
        <div id="hero">
          <Avatar
            src="/assets/profile_pic.jpg"
            alt="Photo of me, wearing a hat with a cat on it"
            size={avatarSize}
            className="avatar"
          />
          <div id="hero-text">
            <h1
              id="heading"
              className="display-4 fw-bold text-primary-emphasis mb-1"
            >
              Hi, I'm <span className="text-primary">Bryan</span>.
            </h1>
            <h2 id="lead" className="lead text-body-secondary mb-0">
              As a software-focused engineering physicist,
            </h2>
            <p
              id="subheading"
              className="about-hero-intro text-center text-lg-start mb-0"
            >
              I am a technical professional that wears many hats. 🤠
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
