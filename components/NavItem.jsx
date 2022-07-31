import React from "react";

export default function NavItem({ children, href }) {
  return (
    <div>
      <li>
        <a
          href={href}
          className="text-secondary-dark font-Work-sans font-medium text-xl "
        >
          {children}
        </a>
      </li>
    </div>
  );
}
