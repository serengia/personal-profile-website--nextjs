import React, { useRef } from "react";
import {
  AngleListIcon,
  GithubIcon,
  LinkedinIcon,
  MediumIcon,
  ScrollToBottomIcon,
  TwitterIcon,
} from "@/svg";
import { useRouter } from "next/router";

function HeroSection() {
  const router = useRouter();
  const scrollToRef = useRef();
  const scrollHandler = () => {
    scrollToRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="section-hero">
      <div className="row hero-content">
        <div className="header-text">
          <h1 className="heading-primary">Hello, I&apos;m James Serengia</h1>
          <h2 className="heading-secondary heading-secondary--green">
            A Full-stack Software Engineer based in Nairobi, Kenya
          </h2>
        </div>
        <p className="description-text">
          I am a Senior Software Engineer with 6+ years of experience. With my
          wide range of experiences, I would love to help you build your next
          big software product, feature, web application or a basic website.
          Look through some of my work and experiences! If you like what you see
          and have a project you need coded, don&apos;t hesitate to reach
          out🚀🚀
        </p>
        <div className="hero-btn-wrapper">
          <button
            className="button button-primary m-t-s m-b-s"
            onClick={() => router.push("/about")}
          >
            Learn More About Me
          </button>
        </div>
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
