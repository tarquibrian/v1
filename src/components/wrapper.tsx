import React from "react";
import LineX from "./linex";

interface Props {
  id?: string;
  className?: string;
  children: React.ReactNode;
  htmlElement?: string;
}

const Wrapper = ({ id, className, children, htmlElement = "div" }: Props) => {
  if (htmlElement === "section") {
    return (
      <section id={id} className={` wrapper`}>
        <div className={className ? className : ""}>{children}</div>
        <LineX />
      </section>
    );
  }
  return (
    <div id={id} className={` wrapper`}>
      <div className={className ? className : ""}>{children}</div>
      <LineX />
    </div>
  );
};

export default Wrapper;
