const StatusIcon = ({ active = false }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={active ? "#71ff2f" : "#ff1515"}
      className="circle"
    >
      <title>Status</title>
      <circle cx="12" cy="12" r="12" />
    </svg>
  );
};

export default StatusIcon;
