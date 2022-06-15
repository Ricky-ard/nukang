import Image from "next/image";
import React from "react";
import Phone from "../assets/phone.png";
import googleplay from "../assets/google-play.svg";
import appstore from "../assets/appstore.svg";

export default function PromoSection() {
  return (
    <section className="py-20 px-28">
      <div className="container mx-auto flex items-center">
        <div className="w-5/12">
          <h1 className="font-bold text-secondary-dark text-4xl ">
            Nukang Hadir Untuk Memudahkan Kebutuhan Hunian Kamu
          </h1>
          <p className="font-medium text-2xl py-10">
            Saat kamu sedang membutuhkan jasa tukang, konsultan, atau kontraktor
            untuk hunian kamu, Nukang ada untukmu
          </p>
          <div className="flex">
            <Image src={googleplay} alt="logo" width="167px" height="54px" />
            <Image src={appstore} alt="logo" width="167px" height="54px" />
          </div>
        </div>
        <div className="w-7/12 text-right">
          <Image src={Phone} alt="logo" width="470.28px" height="645.33px" />
        </div>
      </div>
    </section>
  );
}
