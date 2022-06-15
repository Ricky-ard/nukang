import React from "react";

export default function FooterItem({ children }) {
  return (
    <li>
      <a className="text-black font-Work-sans font-normal text-lg ">
        {children}
      </a>
    </li>
  );
}
