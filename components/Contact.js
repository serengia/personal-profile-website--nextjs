import React, { useEffect, useState } from "react";
import Notice from "./Notice";
const SUBMIT_LINK = "https://formspree.io/f/myyvwvbw";

export default function Contact() {
  const [noticeData, setNoticeData] = useState({});
  const [showNotice, setShowNotice] = useState(false);

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    const name = event.target?.name?.value;
    const message = event.target?.message?.value;

    if (!name || !message) {
      setNoticeData((prev) => ({
        ...prev,
        message: "Fields cannot be empty.",
        status: "fail",
      }));
      setShowNotice(true);
      return;
    }

    const email = event.target.email.value;

    const emailRegex = /^[a-z]+@[a-z0-9-]+\.[a-z0-9-.]+$/;

    if (!emailRegex.test(email)) {
      setNoticeData((prev) => ({
        ...prev,
        message: "Invalid Email (Email must be lowercase).",
        status: "fail",
      }));
      setShowNotice(true);

      return;
    }

    const formData = new FormData(event.target);

    try {
      const response = await fetch(SUBMIT_LINK, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        // SUCCESS
        setNoticeData((prev) => ({
          ...prev,
          message:
            "Email successfully sent. We will get back to you soonest possible.",
          status: "success",
        }));
        setShowNotice(true);

        // Clear local storage
        if (localStorage.getItem("userFormData")) {
          localStorage.removeItem("userFormData");
        }
        return;
      }
      throw new Error("Oops! There was a problem submitting your form");
    } catch (error) {
      // Any other error
      setNoticeData((prev) => ({
        ...prev,
        message: error?.message
          ? `${error.message}`
          : "Something went wrong. Try again.",
        status: "fail",
      }));
      setShowNotice(true);
    }
  };

  useEffect(() => {
    let timer;
    if (showNotice) {
      timer = setTimeout(() => {
        setShowNotice(false);
      }, 3000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [showNotice]);

  return (
    <div className="form-container">
      <h2 className="heading-secondary heading-secondary--blue">
        I&apos;m always interested in hearing about new projects, so if
        you&apos;d like to chat please get in touch.
      </h2>
      <form className="form" onSubmit={formSubmitHandler}>
        <input
          className="name"
          aria-label="Name input"
          type="text"
          name="name"
          id="name"
          placeholder="Full name"
          maxLength="30"
        />
        <input
          className="email"
          type="email"
          name="email"
          id="email"
          aria-label="Email input"
          placeholder="Email address"
          required
        />

        <textarea
          className="message"
          name="message"
          id="user-message"
          cols="30"
          rows="10"
          maxLength="500"
          placeholder="Enter Text Here"
        ></textarea>
        {showNotice && <Notice noticeData={noticeData} />}
        <button type="submit">Get in Touch</button>
      </form>
    </div>
  );
}
