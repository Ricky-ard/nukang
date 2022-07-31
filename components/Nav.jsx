import React from "react";
import logo from "../assets/logo.png";
import Image from "next/image";
import menu from "../assets/menu.svg";
import NavTitle from "./NavTitle";
import close from "../assets/x.svg";
import { useState } from "react";
import classnames from "classnames";

export default function Nav() {
  const [offcanvas, setOffcanvas] = useState(false);
  return (
    <>
      <div className=" bg-white w-full pb-2 lg:px-36 sticky top-0 z-30 ">
        <div className="container mx-auto mt-5 ">
          <div className="flex items-center justify-between">
            <Image src={logo} alt="logo" width="223px" height="62" />
            <div className="lg:w-6/12 hidden md:block">
              <NavTitle direction="horizontal" />
            </div>
            <div className="lg:w-6/12 md:hidden mr-10">
              <Image
                src={menu}
                alt="menu"
                layout="intrinsic"
                onClick={() => setOffcanvas(true)}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className={classnames(
          "fixed bg-white z-50 right-0 top-0 h-full w-full md:hidden transition-all",
          offcanvas ? "right-0" : "-right-full"
        )}
      >
        <div className="absolute top-10 right-8 ">
          <Image
            src={close}
            alt="close"
            width={40}
            onClick={() => setOffcanvas(false)}
          />
        </div>
        <NavTitle direction="vertical" />
      </div>
    </>
  );
}
