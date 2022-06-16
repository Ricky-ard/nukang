import React from "react";
import Button from "./Button";
import tukang from "../assets/tukang2.png";
import Image from "next/image";

export default function BottomSection() {
  return (
    <section className="lg:px-32 md:px-20 px-5">
      <div className="container mx-auto flex flex-wrap md:flex-nowrap gap-5">
        <div className="md:w-8/12 ">
          <h1 className="font-bold lg:text-5xl md:text-2xl text-lg pb-2 ">
            Apakah kamu Seorang Tukang, Konsultan, atau Kontraktor ?
          </h1>
          <p className="font-medium md:leading-relaxed md:w-3/4 mb-5 lg:mb-10 md:mb-5 text-sm lg:text-lg md:text-base ">
            Gabung menjadi mitra nukang hub indonesia, mari bertumbuh dan
            berkembang menjadi besar bersama.
          </p>
          <Button variant={"blue"} className="inline-block font-bold ">
            Jadi Mitra Nukang
          </Button>
        </div>
        <div className="md:w-4/12 w-0 text-right">
          <Image src={tukang} alt="partner" width="490px" height="556px" />
        </div>
      </div>
    </section>
  );
}
