import Image from "next/image";
import React from "react";
import Phone from "../assets/phone.png";
import googleplay from "../assets/google-play.svg";
import appstore from "../assets/appstore.svg";

export default function PromoSection() {
  return (
    <section
      className="pt-16 px-5 lg:px-32 md:px-20 md:pb-32 pb-12 mb-5 bg-no-repeat bg-right-bottom bg-contain"
      style={{
        backgroundImage: `url("/Ellipse4.svg")`,
      }}
    >
      <div className="container mx-auto md:flex  items-center gap-14">
        <div className="lg:w-5/12 md:w-6/12">
          <h1 className="font-bold text-secondary-dark lg:text-4xl md:text-2xl text-base mb-2">
            Nukang Hadir Untuk Memudahkan Kebutuhan Hunian Kamu
          </h1>
          <p className="font-medium lg:ext-2xl md:text-lg lg:py-10 md:py-4 text-sm mb-6">
            Saat kamu sedang membutuhkan jasa tukang, konsultan, atau kontraktor
            untuk hunian kamu, Nukang ada untukmu
          </p>
          <div className="flex justify-around">
            <Image src={googleplay} alt="logo" width="167px" height="54px" />
            <Image src={appstore} alt="logo" width="167px" height="54px" />
          </div>
        </div>
        <div className="lg:w-7/12 md:w-6/12 md:text-right">
          <Image src={Phone} alt="phone" width="470.28px" height="645.33px" />
        </div>
      </div>
    </section>
  );
}
