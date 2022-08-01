import React from "react";

export default function NavItem({ children, href }) {
  return (
    <div>
      <li>
        <a
          href={href}
          className="text-secondary-dark font-Work-sans font-medium text-xl hover:text-primary-blue"
        >
          {children}
        </a>
      </li>
    </div>
  );
}
