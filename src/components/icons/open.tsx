import * as React from "react";

const OpenIcon = ({
  size = 46,
  strokeWidth = 1,
  color = "currentColor",
  ...props
}) => (
  <svg
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={strokeWidth}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M18 10.5v8.625A1.875 1.875 0 0 1 16.125 21H4.875A1.875 1.875 0 0 1 3 19.125V7.875A1.875 1.875 0 0 1 4.875 6h7.85" />
    <path d="M15.75 3H21v5.25" />
    <path d="M10.5 13.5 20.625 3.375" />
  </svg>
);

export default OpenIcon;
