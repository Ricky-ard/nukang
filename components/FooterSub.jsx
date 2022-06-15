import React from "react";

export default function FooterTitle({ children }) {
  return (
    <div className="w-2/12 gap-y-24 text-2xl font-bold mt-5">
      <h1 className="mb-5">{children}</h1>
    </div>
  );
}
