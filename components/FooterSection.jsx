import Image from "next/image";
import React from "react";
import logo from "../assets/logo2.png";
import googleplay from "../assets/google-play.svg";
import appstore from "../assets/appstore.svg";
import NavItem from "./NavItem";
import FooterItem from "./FooterItem";
import Button from "./Button";
import ic_instagram from "../assets/ic-instagram.svg";
import ic_facebook from "../assets/ic-fb.svg";
import ic_whatsapp from "../assets/ic-whatsapp.svg";

export default function FooterSection() {
  return (
    <section className="py-5 px-5 bg-gray-100">
      <div className="container lg:px-24 md:px-10 lg:gap-x-24 md:gap-4 flex flex-wrap md:flex-nowrap mx-auto text-center md:text-left">
        <div className=" w-full md:w-4/12 flex flex-col items-start lg:px-20 md:px-3 mt-5 gap-3">
          <Image src={logo} alt="logo" width="200px" height="60" />
          <Image src={googleplay} alt="logo" width="159px" />
          <Image src={appstore} alt="logo" width="159px" />
        </div>
        <div className="w-full md:w-2/12 gap-y-24 text-2xl font-bold mt-5">
          <h1 className="md:mb-5 mb-1">About us</h1>
          <ul>
            <FooterItem>Contact Us</FooterItem>
            <FooterItem>Career</FooterItem>
            <FooterItem>Blog</FooterItem>
            <FooterItem>Press</FooterItem>
          </ul>
        </div>
        <div className="w-full md:w-3/12 gap-y-24 text-2xl font-bold mt-5">
          <h1 className="md:mb-5 mb-1">Customer</h1>
          <ul>
            <FooterItem>cara kerja nukang</FooterItem>
            <FooterItem>Download APP</FooterItem>
            <FooterItem>Temukan Nukang</FooterItem>
            <FooterItem>Temukan Layanan</FooterItem>
          </ul>
        </div>
        <div className="w-full md:w-2/12 gap-y-24 text-2xl font-bold mt-5">
          <h1 className="md:mb-5 mb-1">Partner</h1>
          <ul>
            <FooterItem>Join Us</FooterItem>
          </ul>
          <Button variant={"blue"}>Register</Button>
        </div>
      </div>
      <div className="my-11 w-full h-0.5 bg-secondary-light" />
      <div className="md:px-14 px-5 flex flex-wrap md:justify-between justify-center">
        <div>
          <p className="text-sm md:text-lg">
            © Nukang, 2022. We love our users!
          </p>
        </div>
        <div className="md:flex text-center">
          <h1 className="text-sm md:text-lg md:mr-10">Follow Us :</h1>
          <div className="space-x-3 mb">
            <a href="??">
              <Image src={ic_instagram} alt="logo" width="26px" />
            </a>
            <a href="??">
              <Image src={ic_facebook} alt="logo" width="27px" />
            </a>
            <a href="??">
              <Image src={ic_whatsapp} alt="logo" width="32px" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
