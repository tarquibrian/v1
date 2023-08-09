import * as React from "react";

const HeartIcon = ({ size = 46, color = "currentColor", ...props }) => (
  <svg
    viewBox="0 0 192 192"
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    fill="none"
  >
    <path
      d="M60.732 29.7C41.107 29.7 22 39.7 22 67.41c0 27.29 45.274 67.29 74 94.89 28.744-27.6 74-67.6 74-94.89 0-27.71-19.092-37.71-38.695-37.71C116 29.7 104.325 41.575 96 54.066 87.638 41.516 76 29.7 60.732 29.7z"
      clipRule={"evenodd"}
      display={"inline"}
      fill="none"
      stroke="currentColor"
      strokeWidth={10}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      strokeDasharray={"none"}
      strokeOpacity={1}
    ></path>
  </svg>
);

export default HeartIcon;
