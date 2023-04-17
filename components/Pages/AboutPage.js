import React from "react";
import s from "./AboutPage.module.scss";
import Socials from "../Socials";
import DeveloperContent from "../DeveloperContent";

function AboutPage() {
  return (
    <main className={s["about-page"]}>
      <div className={s["about-header"]}>
        <h1>About the Developer</h1>
      </div>
      <div className={`${s["body-content"]} row`}>
        <hr className="divider-2" />
        <div className={s["author-wrapper"]}>
          <div className={s["image-wrapper"]}>
            <img
              src="./img/james-developer.png"
              alt="James Serengia"
              className={s["author-img"]}
            />
          </div>

          <div className={s["details"]}>
            <h3>James Serengia</h3>
            <h4>Software Engineer</h4>
            <Socials />
          </div>
        </div>
        <div className={s["content"]}>
          <DeveloperContent />
        </div>
      </div>
    </main>
  );
}

export default AboutPage;
