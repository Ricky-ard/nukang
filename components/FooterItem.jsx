import React from "react";

export default function FooterItem({ children }) {
  return (
    <li>
      <a className="text-black font-Work-sans font-normal d:text-lg text-base ">
        {children}
      </a>
    </li>
  );
}
