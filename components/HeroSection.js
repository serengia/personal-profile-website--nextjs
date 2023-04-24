import React, { useRef } from "react";
import {
  AngleListIcon,
  GithubIcon,
  LinkedinIcon,
  MediumIcon,
  ScrollToBottomIcon,
  TwitterIcon,
} from "@/svg";

function HeroSection() {
  const scrollToRef = useRef();
  const scrollHandler = () => {
    scrollToRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="section-hero">
      <div className="row hero-content">
        <div className="header-text">
          <h1 className="heading-primary">
            Hey there, my name is James Serengia.
          </h1>
          <h2 className="heading-secondary heading-secondary--green">
            A software Engineer based in Nairobi Kenya
          </h2>
        </div>
        <p className="description-text">
          I can help you build a product, feature or website. Look through some
          of my work and experience! If you like what you see and have a project
          you need coded, don’t hesitate to contact me.
        </p>
        <ul className="social-icons">
          <li>
            <a
              target="_blank"
              href="https://github.com/serengia"
              rel="noreferrer"
            >
              <GithubIcon className="social-icon" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://twitter.com/JamesSerengia"
              className="social-icon"
              rel="noreferrer"
            >
              <TwitterIcon className="social-icon" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/james-serengia/"
              rel="noreferrer"
            >
              <LinkedinIcon className="social-icon" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://medium.com/@jamesserengia"
              rel="noreferrer"
            >
              <MediumIcon className="social-icon" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://wellfound.com/u/james-serengia"
              rel="noreferrer"
            >
              <AngleListIcon className="social-icon" />
            </a>
          </li>
        </ul>
        <div className="scroll-btn-container">
          <span
            className="scroll-btn"
            ref={scrollToRef}
            onClick={scrollHandler}
          >
            <ScrollToBottomIcon className="scroll-icon" />
          </span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
