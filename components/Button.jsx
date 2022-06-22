import React from "react";

export default function Button({ className, variant, children }) {
  const addClassName = className ? ` ${className}` : "";

  const variants = {
    "outline-blue": `text-primary-blue border border-primary-blue hover:text-white hover:bg-primary-blue duration-300 ease-in-out`,
    blue: "text-white bg-primary-blue",
  };

  const pickedVariant = variants[variant];

  return (
    <a
      href="#"
      className={`px-5 py-3 rounded-md text-xs   ${pickedVariant} ${addClassName}`}
    >
      {children}
    </a>
  );
}
