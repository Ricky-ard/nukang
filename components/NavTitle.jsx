import React from "react";
import Button from "./Button";
import NavItem from "./NavItem";
import classnames from "classnames";

export default function NavTitle({ direction }) {
  const directions = {
    horizontal: "justify-center space-x-12",
    vertical: " flex-col items-center space-y-8 mt-24",
  };

  const pickedDirection = directions[direction];

  return (
    <ul className={classnames("flex", pickedDirection)}>
      <NavItem href="#">Service</NavItem>
      <NavItem href="#">Discover</NavItem>
      <NavItem href="#">Cara Kerja</NavItem>
      <li>
        <Button variant="outline-blue" className="font-bold">
          Daftar Mitra
        </Button>
      </li>
    </ul>
  );
}
