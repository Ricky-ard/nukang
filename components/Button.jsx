import React from "react";

export default function Button({ className, variant, children }) {
  const addClassName = className ? ` ${className}` : "";

  const variants = {
    "outline-blue": `text-primary-blue border border-primary-blue`,
    blue: "text-white bg-primary-blue",
  };

  const pickedVariant = variants[variant];

  return (
    <a
      className={`px-5 py-3 rounded-md text-xs ${pickedVariant}${addClassName}`}
    >
      {children}
    </a>
  );
}
