import React from "react";
import NavItem from "../components/NavItem";
import Button from "../components/Button";
import logo from "../assets/logo.png";
import Image from "next/image";

export default function Nav() {
  return (
    <>
      <section className="fixed bg-white w-full pb-2 z-10 lg:px-36">
        <div className="container mx-auto mt-5 ">
          <div className="flex items-center justify-between">
            <Image src={logo} alt="logo" width="223px" height="62" />
            <div className="lg:w-6/12 hidden md:block">
              <ul className="flex justify-center space-x-12 ">
                <NavItem>Service</NavItem>
                <NavItem>Discover</NavItem>
                <NavItem>Cara Kerja</NavItem>
                <li>
                  <Button variant="outline-blue" className="font-bold">
                    Daftar Mitra
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
