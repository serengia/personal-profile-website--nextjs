import React from "react";
import s from "./ContactPage.module.scss";

export default function ContactPage() {
  return (
    <div className={s["contact-page"]}>
      <div className={`${s["content"]} row`}>
        <h1>Contact me</h1>
      </div>
    </div>
  );
}
