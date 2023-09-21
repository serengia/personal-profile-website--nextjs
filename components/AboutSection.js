import React from "react";
import { FrameworksIcon, LanguagesIcon, SkillsIcon } from "@/svg";
import { useRouter } from "next/router";

function AboutSection() {
  const router = useRouter();
  return (
    <section className="section-about" id="about">
      <div className="about-header row">
        <h2 className="section-title m-b-l">About Me</h2>
        <p className="description-text m-b-l">
          I am a Senior Software Engineer with 6+ years of experience. After
          working in the software industry for three years, I gained a lot of
          experience with which I founded my own software development company.
          This experience taught me firsthand how to manage big software
          projects with diverse specifications.
        </p>
        <button
          className="button button-primary m-t-s m-b-xl"
          onClick={() => router.push("/about")}
        >
          Learn More
        </button>
      </div>
      <div className="about-container row">
        <div className="skill">
          <div className="skill-icon-container">
            <a href="#" className="skill-icon-wrapper">
              <LanguagesIcon className="skill-icon" />
            </a>
          </div>
          <div className="details-container">
            <h3>Languages</h3>
            <ul className="skills">
              <li className="skill-tag skill-tag--white">Node Js</li>
              <li className="skill-tag skill-tag--white">Next Js</li>
              <li className="skill-tag skill-tag--white">Ruby</li>
              <li className="skill-tag skill-tag--white">HTML</li>
              <li className="skill-tag skill-tag--white">CSS</li>
              <li className="skill-tag skill-tag--white">SCSS</li>
              <li className="skill-tag skill-tag--white">Javascript</li>
            </ul>
          </div>
        </div>
        <div className="skill">
          <div className="skill-icon-container">
            <a href="#" className="skill-icon-wrapper">
              <FrameworksIcon className="skill-icon" />
            </a>
          </div>
          <div className="details-container">
            <h3>Frameworks</h3>
            <ul className="skills">
              <li className="skill-tag skill-tag--white">React</li>
              <li className="skill-tag skill-tag--white">React Native</li>
              <li className="skill-tag skill-tag--white">Next Js</li>
              <li className="skill-tag skill-tag--white">Bootstrap</li>
              <li className="skill-tag skill-tag--white">Ruby on Rails</li>
              <li className="skill-tag skill-tag--white">Selenium</li>
            </ul>
          </div>
        </div>
        <div className="skill">
          <div className="skill-icon-container">
            <a href="#" className="skill-icon-wrapper">
              <SkillsIcon className="skill-icon" />
            </a>
          </div>
          <div className="details-container">
            <h3>Skills</h3>
            <ul className="skills">
              <li className="skill-tag skill-tag--white">Code kit</li>
              <li className="skill-tag skill-tag--white">Github</li>
              <li className="skill-tag skill-tag--white">Digital Ocean</li>
              <li className="skill-tag skill-tag--white">Gitlab</li>
              <li className="skill-tag skill-tag--white">Terminal</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
