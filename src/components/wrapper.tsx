import React from "react";
import LineX from "./linex";

interface Props {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

const Wrapper = ({ id, className, children }: Props) => {
  return (
    <div id={id} className={`${className} wrapper`}>
      {/* <div className="wrapper__content">{children}</div> */}
      {children}
      <LineX />
    </div>
  );
};

export default Wrapper;
