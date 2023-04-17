import React from "react";

export default function Notice({ noticeData }) {
  const { message, status } = noticeData;

  return (
    <p
      className={`form-feedback ${
        status === "success" ? "email-success" : ""
      } ${status === "fail" ? "email-fail" : ""}`}
    >
      {message}
    </p>
  );
}
