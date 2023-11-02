import React from "react";
import s from "./ContactPage.module.scss";
import Contact from "../Contact";

export default function ContactPage() {
  return (
    <>
      <div className={s["contact-page"]}>
        <div className={`${s["content"]} row`}>
          <h1>Contact me</h1>
        </div>
      </div>
      <div className="row">
        <Contact />
      </div>
    </>
  );
}
