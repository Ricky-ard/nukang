import React, { Children } from "react";

export default function Title({ children, className }) {
  const addClassName = className ? ` ${className}` : "";
  return (
    <>
      <h1
        className={`font-bold lg:text-4xl text-black text-2xl ${addClassName}`}
      >
        {children}
      </h1>
    </>
  );
}
