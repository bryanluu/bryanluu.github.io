import React from "react";
import HoverLink from "../HoverLink";

function IdentityCard(props) {
  const { emoji, title, subtitle, className = "mb-3", children } = props;

  return (
    <div className={`card rounded-4 p-4 ${className}`}>
      <div className="d-flex align-items-baseline gap-2 mb-1">
        <span className="fs-3" aria-hidden="true">
          {emoji}
        </span>
        <h3 className="fs-4 mb-0">{title}</h3>
      </div>
      <h4 className="fs-5 fw-normal text-body-secondary mb-3">{subtitle}</h4>
      {children}
    </div>
  );
}

function LearnMore() {
  return (
    <p className="text-center mt-4 mb-0">
      Want to learn more?{" "}
      <HoverLink
        href="https://bryanluu.github.io/resume/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Dive deeper
      </HoverLink>{" "}
      into my resumé 🤿
    </p>
  );
}

function AboutIdentities() {
  return (
    <section className="container my-5">
      <div className="bg-primary-subtle rounded-4 p-3 p-md-4">
        <IdentityCard
          emoji="🧑🏻‍💻"
          title="I am a software developer"
          subtitle="I write code as a profession."
        >
          <p>
            I've worked as a <strong>full-stack developer</strong> for over 2
            years, building scalable web applications. I learned the ropes
            creating data products with{" "}
            <HoverLink
              href="https://opentech.eco/"
              target="_blank"
              rel="noopener noreferrer"
            >
              OPEN Technologies
            </HoverLink>{" "}
            and interactive forms with{" "}
            <HoverLink
              href="https://proofgov.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Proof
            </HoverLink>
            .
          </p>
          <p>
            I've worked as an independent{" "}
            <strong>application developer</strong> in research laboratories,
            building essential software for researchers to interface with
            experimental apparatus and data.
          </p>
          <p className="mb-0">
            I've acted as a <strong>game developer</strong> in my spare time,
            building hobby projects such as{" "}
            <HoverLink href="/work/grid-arcade/">GRID</HoverLink>
            , a mini-arcade which I developed from scratch, and{" "}
            <HoverLink
              href="https://github.com/bryanluu/a-maze-ing-race-web"
              target="_blank"
              rel="noopener noreferrer"
            >
              A-Maze-ing Race
            </HoverLink>
            , a web port of a hardware project.
          </p>
        </IdentityCard>

        <IdentityCard
          emoji="👷🏻"
          title="I am an engineering physicist"
          subtitle="I understand systems and how they work."
        >
          <p>
            <b>I'm not afraid of hard problems</b>; I've studied as a
            physicist in quantum mechanics, mechatronics, and statistical
            mathematics.
          </p>
          <p>
            <b>I thrive on experimentation</b>: I've iterated laser conversion
            setups, prototyped robotic sailboats, and tinkered with games.
          </p>
          <p className="mb-0">
            <b>I'm grounded in simulation</b>: I've modelled electric grid
            power flow, bird flocking behaviour, and planetary formations.
          </p>
        </IdentityCard>

        <IdentityCard
          emoji="👨🏻‍🌾"
          title="I am a steward for good tech"
          subtitle="I care deeply about my impact."
          className="mb-0"
        >
          <p>
            <b>I love to grow</b>: I've shifted my career towards climate
            tech, educating myself thoroughly on the field and completed
            certificates to prove it.
          </p>
          <p>
            <b>I'm keen to contribute</b>: I've added to new tech stacks right
            away, delivered workshops on climate policies, and led on team
            projects.
          </p>
          <p className="mb-0">
            <b>I value learning</b>: I provide and take on mentorship
            continually, I've taught for a decade to transfer my skills to
            others, and I'm still learning.
          </p>
        </IdentityCard>
      </div>

      <LearnMore />
    </section>
  );
}

export default AboutIdentities;
