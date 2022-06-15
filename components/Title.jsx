import React, { Children } from "react";

export default function Title({ children, className }) {
  const addClassName = className ? ` ${className}` : "";
  return (
    <>
      <h1 className={`font-bold text-4xl text-secondary-dark${addClassName}`}>
        {children}
      </h1>
    </>
  );
}
