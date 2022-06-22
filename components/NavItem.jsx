import React from "react";

export default function NavItem({ children }) {
  return (
    <div>
      <li>
        <a className="text-secondary-dark font-Work-sans font-medium text-xl ">
          {children}
        </a>
      </li>
    </div>
  );
}
