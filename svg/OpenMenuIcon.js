import React from "react";

export default function OpenMenuIcon({ onClick, className }) {
  return (
    <svg
      className={className}
      onClick={onClick}
      aria-label="Menu Icon"
      width="18"
      height="12"
      viewBox="0 0 18 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 1a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1zm1 4a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2H1z"
      />
    </svg>
  );
}
