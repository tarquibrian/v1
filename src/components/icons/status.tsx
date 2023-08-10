import React from "react";

const StatusIcon = ({ active = false }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={active ? "#71ff2f" : "#ff1515"}
      xmlns="http://www.w3.org/2000/svg"
      className="circle"
    >
      <circle cx="12" cy="12" r="12" />
    </svg>
  );
};

export default StatusIcon;
